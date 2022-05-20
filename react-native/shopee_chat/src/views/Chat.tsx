import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function Chat({navigation}) {
  return (
    <View style={styles.view}>
      <Text>Chat</Text>
      <Button
        title="更新标题"
        onPress={() => navigation.setOptions({title: 'cw'})}
      />
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
