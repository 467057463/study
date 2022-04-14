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
import {Text} from 'react-native';
import {Router, Scene, Stack} from 'react-native-router-flux';

function Login() {
  return <Text>登录</Text>;
}

const App = () => {
  return (
    <Router>
      <Stack>
        <Scene key="login" component={Login} title="登录" />
      </Stack>
    </Router>
  );
};

export default App;
