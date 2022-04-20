import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button, Icon } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useToast } from "react-native-toast-notifications";
import { observer } from 'mobx-react-lite';
import { useStore } from '../hook/useStore';
import { useValidate } from '../hook/useValidate';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export default observer(function Login({navigation}: NativeStackScreenProps<any, 'Login'>) {
  const { data, changeData, validate } = useValidate({
    account: [{
      required: true,
      message: '请输入用户名/手机号码/邮箱地址'
    }],
    password: [{  
      required: true, 
      message: '请输入密码' 
    }]  
  });
  const toast = useToast();
  const { user } = useStore();

  async function submit(){
    try {
      await validate();
      const res = await user.login(data)
    } catch (error: any) {
      // api 返回错误
      if(error.msg){
        toast.show(error.msg)
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>      
      <Input 
        placeholder='用户名/手机号码/邮箱地址' 
        value={data.account} 
        onChangeText={(value) => changeData('account', value)}
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
        value={data.password} 
        onChangeText={(value) => changeData('password', value)}
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
          loading={user.loading}
        />

        <Button 
          type="clear" 
          title="忘记密码"
          onPress={() => navigation.navigate('ForgetPassword')}
        />
      </View>
    </SafeAreaView>
  );
})

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