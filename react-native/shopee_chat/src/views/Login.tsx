import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function Login({navigation}) {
  return (
    <View style={styles.view}>
      <Text>login</Text>
      <Button title="聊天" onPress={() => navigation.navigate('Home')} />
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
