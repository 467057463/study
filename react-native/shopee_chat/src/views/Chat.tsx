import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Chat() {
  return (
    <View style={styles.view}>
      <Text>Chat</Text>
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
