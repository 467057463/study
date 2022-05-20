import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function ForgetPassword() {
  return (
    <View style={styles.view}>
      <Text>忘记密码</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
