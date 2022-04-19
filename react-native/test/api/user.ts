import { ucRequest } from "../utils";
import type { LoginParams, LoginRespon, CheckObjectIsExistsRespon } from "../types/user";

// 检查账号是否存在
export function checkObjectIsExists(account: string) {
  return ucRequest.post<unknown, CheckObjectIsExistsRespon>(
    '/api/v2/user/checkObjectIsExists',
    {
      object: account,
    }
  );
}

// 用户中心登录
export async function ucLogin(params: LoginParams) {
  try {
    let { dataMeta: userInfo } = await ucRequest.post<unknown, LoginRespon>(
      '/api/v2/user/login',
      params
    );
    return {
      ...userInfo,
      // userCode: myDecode(SECRET_KEY, IV, userInfo.userId),
      userName: params.account,
      password: params.password,
      contact: userInfo.mobile || userInfo.email,
      isMain: userInfo.userRole === 1,
    };
    // return userInfo;
  } catch (error) {
    return Promise.reject(error);
  }
}