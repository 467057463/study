/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  FlatList,
  Image,
  LogBox,
  Platform,
  StyleSheet,
  Text,
} from 'react-native';
import BigButton from './BigButton';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};
const data = [
  {
    name: 'test',
    image: logo,
  },
  {
    name: 'test',
    image: logo,
  },
  {
    name: 'test',
    image: logo,
  },
  {
    name: 'test',
    image: logo,
  },
  {
    name: 'test',
    image: logo,
  },
  {
    name: 'test',
    image: logo,
  },
  {
    name: 'test',
    image: logo,
  },
  {
    name: 'test',
    image: logo,
  },
  {
    name: 'test',
    image: logo,
  },
  {
    name: 'test',
    image: logo,
  },
];

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    padding: 10,
    ...Platform.select({
      ios: {
        color: 'red',
      },
      android: {
        color: 'yellow',
      },
    }),
  },
});
console.log('ssssbbbb');
const App = () => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <>
          <Image source={item.image} />
          <Text style={styles.text}>{item.name}</Text>
          <Text>{Platform.OS}</Text>
          <Text>{Platform.Version}</Text>
          <BigButton />
        </>
      )}
    />
  );
};

export default App;
