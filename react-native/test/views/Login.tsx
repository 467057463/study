

import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button, Icon } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useToast } from "react-native-toast-notifications";
import Schema from 'async-validator';


import { ucRequest, setStorage, getStorage } from '../utils';
import { ucLogin } from '../api/user';

const descriptor = {
  account: [{
    required: true,
    message: '请输入用户名/手机号码/邮箱地址'
  }],
  password: [{  
    required: true, 
    message: '请输入密码' 
  }]  
}
const validator = new Schema(descriptor);

export default function HomeScreen({navigation}) {
  const [account, setAccount ] = useState('');
  const [password, setPassword ] = useState('');
  const toast = useToast();

  async function submit(){
    try {
      await validator.validate({account, password}, {
        first: true,
        firstFields: true
      })
      const res = await ucLogin({
        account, 
        password
      })
      console.log(res);
    } catch (error: any) {
      // 验证错误
      if(error.errors){
        return toast.show(error.errors[0].message)   
      }
      // api 返回错误
      toast.show(error.msg)
    }
  }

  async function get(){
    try {
      const value = await getStorage('user');
      console.log(value)
    } catch (error) {
      console.log(error)      
    }
  }

  return (
    <SafeAreaView style={styles.container}>      
      <Input placeholder='用户名/手机号码/邮箱地址' 
        value={account} 
        onChangeText={(value) => setAccount(value)}
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
        placeholder='密码' 
        value={password} 
        onChangeText={(value) => setPassword(value)}
        secureTextEntry={true}
        leftIcon={
          <Icon
            type="ionicon"
            name="lock-open-outline"
            size={24}
            color='black'
          />
        }
      />
      <View style={styles.buttonContainer}>
        <Button 
          title="登录"
          onPress={submit}
        />

        <Button type="clear" title="忘记密码" onPress={get}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  buttonContainer: {
    paddingHorizontal: 10
  } 
});