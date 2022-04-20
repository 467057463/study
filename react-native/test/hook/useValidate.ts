import { useState } from "react";
import Schema from 'async-validator';
import { useToast } from "react-native-toast-notifications";

export function useValidate(descriptor){
  const obj = Object.keys(descriptor).reduce((prev, item)=> {
    return {
      ...prev,
      [item]: ''
    }
  }, {})
  const [data, setData] = useState(obj);
  const toast = useToast();
  const validator = new Schema(descriptor);


  function changeData(key, val){
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

  return {
    data, 
    changeData,
    validate
  } as any
}