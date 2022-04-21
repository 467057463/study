import { makeAutoObservable } from "mobx"
import { setStorage, getStorage, removeStorage } from "../utils";
import { ucLogin } from '../api/user';

import type { LoginParams, Account } from "../types/user";
export default class User {
  state = 'initing'; // initing/logined/logout/error
  contents: Account | null = null;  
  loading = false;

  constructor() {
    makeAutoObservable(this)
  }
  // 初始化
  async init(){
    try {
      const contents = await getStorage('user');
      if(contents){
        this.contents = contents;
        this.state = 'logined';
      } else {
        this.state = 'logout'
      }
    } catch (error) {
      this.state = 'error';
      console.error(error)
    }
  }
  // 登录
  async login(params: LoginParams){
    this.loading = true;
    try {
      const res = await ucLogin(params);
      this.contents = res;
      await setStorage('user', JSON.stringify(res));
      this.state = 'logined';
      return res;
    } catch (error) {
      return Promise.reject(error);
    } finally {
      this.loading = false;
    }
  }
  // 退出
  async logout(){
    await removeStorage('user');
    this.contents = null;
    this.state = 'logout';
  }
}