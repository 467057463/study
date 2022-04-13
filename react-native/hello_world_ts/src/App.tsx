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
import {StoreProvider} from './hook/useStore';
import Home from './views/home';
import {Text} from 'react-native';

const App = () => {
  return (
    <StoreProvider>
      <Home />
      {/* <Text>HOMEssss</Text> */}
    </StoreProvider>
  );
  // return <Text>HOME</Text>;
};

export default App;
