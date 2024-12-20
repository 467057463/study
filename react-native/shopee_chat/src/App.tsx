import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.sectionContainer}>
        <Text>abcdef</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
