import { useState } from "react";
import Schema from 'async-validator';
import type { Rules } from "async-validator";
import { useToast  } from "react-native-toast-notifications";

export function useValidate<D extends Rules, K extends keyof D >(descriptor: D){
  const obj = Object.keys(descriptor).reduce((prev, item)=> {
    return {
      ...prev,
      [item]: ''
    }
  }, {}) as Record<K, string>
  const [data, setData] = useState(obj);
  const toast = useToast();
  const validator = new Schema(descriptor);

  function changeData(key: K, val: string){
    setData({
      ...data,
      [key]: val
    })
  }

  async function validate(){
    try {
      await validator.validate(data, {
        first: true,
        firstFields: true
      })
    } catch (error: any) {
      if(error.errors){
        toast.show(error.errors[0].message)   
      }
      return Promise.reject(error)
    }
  }

  async function validateFiled(filed: K){
    try {
      await validator.validate(data)
    } catch (error: any) {
      if(error.fields[filed]){
        toast.show(error.fields[filed][0].message) 
        return Promise.reject(error.fields[filed][0].message)
      }
    }
  }

  return {
    data, 
    changeData,
    validate,
    validateFiled
  }
}