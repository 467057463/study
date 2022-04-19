import { atom, selector } from "recoil";
import { getStorage } from "../utils";

export const currentUserInfo = atom({
  key: 'currentUserInfo',
  default: getStorage('user')
})

export const currentUserInfoSelector = selector({
  key: "currentUserInfoSelector",
  get: async () => {
    return getStorage('user');
  }
})