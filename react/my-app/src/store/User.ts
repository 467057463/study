import { makeAutoObservable } from "mobx"

class User {
  count = 0;
  constructor(){
    makeAutoObservable(this)
  }

  increase() {
    this.count += 1
  }

  reset() {
    this.count = 0
  }
}

export default User;