import React from 'react';
import {  View, StyleSheet } from 'react-native-web';
import { Input, Button } from "@rneui/themed";
import { useForm, Controller } from "react-hook-form";

export default function Login({navigation}){
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      account: '',
      password: ''
    }
  });
  
  const onSubmit = data => console.log(data);
  const SubmitErrorHandler = error => console.log(error)
  return(
    <View style={styles.view}>
      <View style={styles.container}>
        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: '不能为空'
            },
          }}
          name="account"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input 
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder='用户名/邮箱/手机号'
              leftIcon={{ type: 'ant-design', name: 'user' }}
            />
          )}
        />
        
        <Controller
          control={control}
          rules={{
           required: true,
          }}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input 
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder='密码' 
              secureTextEntry={true}
              leftIcon={{ type: 'ant-design', name: 'lock' }}
            />
          )}
        />

        <View style={styles.btnWraper}>
          <Button
            onPress={handleSubmit(onSubmit, SubmitErrorHandler)}
          >登录</Button>
        </View>
      </View>
      <Button 
        type="clear"
        onPress={() => navigation.navigate('ForgetPassword')}
      >忘记密码？</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    paddingTop: 20,
    flex: 1,
  },
  container: {
    flex: 1
  },
  btnWraper: {
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  }
});
