import React from 'react';
import { View, StyleSheet } from 'react-native-web';
import {Button} from '@rneui/themed';
import { Link } from '@react-navigation/native';

export default function Chat(){
  return(
    <View style={styles.view}>
      <Button title="忘记密码"/>
      <Link to={{ screen: 'Login' }}>
        登录
      </Link>
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
