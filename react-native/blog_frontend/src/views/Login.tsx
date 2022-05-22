import React from 'react';
import { View, StyleSheet } from 'react-native-web';
import {Button} from '@rneui/themed';

export default function Login({navigation}){
  return(
    <View style={styles.view}>
      <Button 
        title="聊天" 
        onPress={() => navigation.navigate('Home', {
          screen: 'Settings',
        })
        }/>
      <Button
        title="忘记密码"
        onPress={() => navigation.navigate('ForgetPassword')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
