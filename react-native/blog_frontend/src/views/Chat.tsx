import React from 'react';
import { View, StyleSheet } from 'react-native-web';
import {Button} from '@rneui/themed';
import { Link } from '@react-navigation/native';

export default function Chat({navigation}){
  return(
    <View style={styles.view}>
      <Button title="设置" onPress={() => navigation.navigate('Home', { screen: 'Settings' })}/>
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
