import type { APIRespon } from "./util";

// 登录接口参数类型
export type LoginParams = {
  account: string;
  password: string;
};

// 用户账号信息类型
export type Account = {
  account: string;
  allowLoginTime: string;
  auditRole: number;
  avatar: string;
  collectDetailUrl: string;
  email: string;
  expireTime: string;
  isAccessLocalData: number;
  isAdmin: number;
  isShowSubAccount: number;
  isUserCenterAdmin: number;
  mainCenterUserId: number;
  mainUserId: string;
  mobile: string;
  nonceStr: string;
  number: string;
  numberType: number;
  permissionList: Array<any>;
  platform: string;
  platformAccess: Array<any>;
  platformId: Array<number>;
  psd: string;
  realname: string;
  registerPlatformId: number;
  sign: string;
  subUserId: string;
  time: string;
  token: string;
  userCenterId: number;
  userId: string;
  userRole: number;
  userCode: string;
  userName: string;
  password: string;
  contact: string;
  isMain: boolean;
};

// 登录接口返回数据类型
export type LoginRespon = APIRespon<any, Account>

// 检查账号是否存在存在响应类型
export type CheckObjectIsExistsRespon = APIRespon<any, {
  isExits: number;
}>