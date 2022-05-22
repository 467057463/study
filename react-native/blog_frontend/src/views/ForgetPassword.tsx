import React from 'react';
import { View, StyleSheet } from 'react-native-web';
import {Button} from '@rneui/themed';

export default function Chat(){
  return(
    <View style={styles.view}>
      <Button title="忘记密码"/>
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
