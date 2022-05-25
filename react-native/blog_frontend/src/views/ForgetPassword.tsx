import React from 'react';
import { View, StyleSheet } from 'react-native-web';
import {Button, Input, Text} from '@rneui/themed';
import { useTheme } from '@rneui/themed';
import { Link } from '@react-navigation/native';
import { useForm, Controller  } from 'react-hook-form'

export default function ForgetPassword(){
  const { theme } = useTheme();
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      account: '',
      code: ''
    }
  });
  const onSubmit = data => console.log(data)
  const SubmitErrorHandler = error => console.log(error)

  return(
    <View style={styles.view}>
      <Controller
        control={control}
        name="account"
        rules={{
          required: {
            value: true,
            message: '不能为空'
          }
        }}
        render={({ field: { onChange, onBlur, value } }) => (        
          <Input 
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            errorMessage={errors.account?.message}
            containerStyle={styles.inputContainer}
            errorStyle={styles.errorStyle}
            placeholder='用户名/邮箱/手机号'
            leftIcon={{ type: 'ant-design', name: 'user' }}
          />
        )}        
      />

      <Controller
        control={control}
        name="code"
        rules={{
          required: {
            value: true,
            message: '不能为空'
          }
        }}
        render={({ field: { onChange, onBlur, value } }) => (        
          <Input 
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            errorMessage={errors.code?.message}
            containerStyle={styles.inputContainer}
            errorStyle={styles.errorStyle}
            leftIcon={{ type: 'ant-design', name: 'lock' }}
            placeholder='请输入验证码'
            rightIcon={<Text 
              style={{color: theme.colors.primary}}
            >获取验证码</Text>}
          />
        )}        
      />

      <View style={styles.btnWraper}>
        <Button title="提交" onPress={handleSubmit(onSubmit, SubmitErrorHandler)}/>

        <Link style={styles.loginBtn} to={{ screen: 'Login' }}>
          返回登录
        </Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    paddingTop: 20,
    flex: 1,
  },
  inputContainer: {
    paddingBottom: 20
  },
  errorStyle: {
    position: 'absolute',
    top: 48,
    left: 5
  },
  btnWraper: {
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'cetner'
  },
  loginBtn:{
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center'
  }
});
