import axios from 'axios';
import { PLATFORM, IV, SECRET_KEY } from '../constants';
import {
  // myEncode,
  objectToLine,
  objectToCamel,
} from '../utils/common';

// 根据 tocken 生成用户中心 header
function generateHeader(token = '') {
  const platform = PLATFORM;
  const time = Math.ceil(new Date().getTime() / 1000);
  const signstr = platform.toString() + time;
  // const sign = myEncode(SECRET_KEY, IV, signstr);
  return {
    platform,
    token,
    sign: 'aaaa',
    time,
  };
}

const ucRequest = axios.create({
  // baseURL: 'http://user.erp.idealhere.com/',
  baseURL: 'http://172.168.20.12/',
  timeout: 20000,
  // adapter: cacheAdapterEnhancer(axios.defaults.adapter, {
  //   enabledByDefault: false,
  //   maxAge: 5000,
  // }),
  // paramsSerializer(params) {
  //   return qs.stringify(params, { arrayFormat: 'repeat', encode: false });
  // },
  headers: {
    version: 'V2',
  },
});

// 请求拦截起
ucRequest.interceptors.request.use((config: any) => {
  config.headers = {
    ...config.headers,
    ...generateHeader(),
  };
  if (!config.data) {
    config.data = {};
  }
  // data 中带上 V2
  config.data.version = 'V2';
  config.data = objectToLine(config.data);
  return config;
});

ucRequest.interceptors.response.use(
  (response) => {
    const res = objectToCamel(response.data);
    // 请求成功
    if (res.status === 0) {
      return res.data;
    } else if (res.status === 2) {
      // 被迫下线
      // notify('被迫下线，您的账号已在其他设备登录');
      // const userStore = useUserStore();
      // userStore.logout();
      return Promise.reject(res);
    } else {
      return Promise.reject(res);
    }
  },
  (error) => {
    console.error(error);
    if (error.message.indexOf('timeout') !== -1) {
      // message({ type: 'error', message: '请求超时' });
      return Promise.reject('请求超时');
    } else {
      // message({
      //   type: 'error',
      //   message: error.response.statusText || '网络异常，请稍后重试！',
      // });
      return Promise.reject(
        error.response.statusText || '网络异常，请稍后重试！'
      );
    }
  }
);

export { ucRequest };
