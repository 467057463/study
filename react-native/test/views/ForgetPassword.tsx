import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { observer } from 'mobx-react-lite';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input, Button, Icon } from '@rneui/themed';
import { useToast } from "react-native-toast-notifications";
import { useValidate } from '../hook/useValidate';
import { checkObjectIsExists, getVerifyCode, verifyCode } from "../api/user";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { delay } from "../utils";

export default observer(function ForgetPassword({navigation}: NativeStackScreenProps<any, 'Login'>){
  const toast = useToast();
  const [ codeLoading, setCodeLoading] = useState(false);
  const [ count, setCount ] = useState(60);
  const [ submitLoading, setSubmitLoading ] = useState(false);
  const { data, changeData, validate, validateFiled } = useValidate({
    account: [{
      required: true,
      message: '请输入用户名/手机号码/邮箱地址'
    },{
      asyncValidator(rule, value, callback){
        checkObjectIsExists(value)
          .then((res) => {
            if(res.dataMeta.isExits === 0){
              return callback(new Error('账号不存在'))
            }
            callback()
          })
          .catch((error: any) => {
            callback(new Error(error));
          })
      }
    }],
    code: [{  
      required: true, 
      message: '请输入验证码' 
    }]
  }) 

  // 验证码倒计时
  async function countDownTime(){
    let i = 60;
    while(i >= 0){
      i--;
      console.log(i, count)      
      setCount(i);
      await delay(1000)
    }
  }

  // 获取验证码
  async function getCode(){
    try {      
      setCodeLoading(true);
      await validateFiled('account')
      await getVerifyCode({
        object: data.account,
        action: 'forgetpassword'
      })
      countDownTime();
      toast.show('验证码发送成功，请注意查收')
    } catch (error) {
      console.log(error)      
    } finally {
      setCodeLoading(false);
    }
  }

  // 提交
  async function submit(){
    setSubmitLoading(true);
    try {
      await validate();
      await verifyCode({
        object: data.account,
        code: data.code,
        action: 'forgetpassword'
      })
      // toast.show('验证成功')
      navigation.navigate('ChangePassword', {
        object: data.account
      })
    } catch (error: any) {
      // api 返回错误
      if(error.msg){
        toast.show(error.msg)
      }
    } finally{
      setSubmitLoading(false);
    }
  }

  return(
    <SafeAreaView style={styles.container}>
      <Input 
        placeholder='用户名/手机号码/邮箱地址' 
        value={data.account} 
        onChangeText={(value) => changeData("account", value)}
        leftIcon={
          <Icon
            name="user"
            type='antdesign'
            size={24}
            color='black'
          />
        }
      />
      <Input 
        placeholder='请输入验证码' 
        value={data.code} 
        onChangeText={(value) => changeData('code', value)}
        leftIcon={
          <Icon
            type="fontwwesome"
            name="code"
            size={24}
            color='black'
          />
        }
        rightIcon={
          <Button
            type="clear"
            disabled={count >= 0 && count <60}
            title={count >= 0 && count <60 ? `${count}s后，重新获取` : '获取验证码'}
            onPress={getCode}
            loading={codeLoading}
          />
        }
      />
      <View style={styles.buttonContainer}>
        <Button 
          title="确认"
          onPress={submit}
          loading={submitLoading}
        />
        <Button 
          style={styles.cancel}
          type="clear" 
          title="取消"
          onPress={() => navigation.goBack()}
        />
      </View>

    </SafeAreaView>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  buttonContainer: {
    paddingHorizontal: 10
  },
  cancel: {
    marginTop: 10,
    textAlign: 'right'
  }
});