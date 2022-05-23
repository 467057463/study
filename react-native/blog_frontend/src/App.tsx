import React from 'react';
import './App.css';

import { ThemeProvider } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './views/Login';
import Home from './views/Home';
import ForgetPassword from './views/ForgetPassword';

const Stack = createNativeStackNavigator();

const linking = {
  // prefixes: [''],
  config: {
    screens: {
      Login: 'login',
      ForgetPassword: 'forgetPassword',
      Home: {
        path: 'home',
        screens: {
          Chat: {
            path: 'chat',
          },
          Settings: {
            path: 'settings',
          }
        }
      }
    }
  },
};

function App() {
  return (
    <ThemeProvider>
      <style type="text/css">{`
        @font-face {
          font-family: 'Ionicons';
          src: url(${require('react-native-vector-icons/Fonts/Ionicons.ttf')}) format('truetype');
        }
        @font-face {
          font-family: 'FontAwesome';
          src: url(${require('react-native-vector-icons/Fonts/FontAwesome.ttf')}) format('truetype');
        }
        @font-face {
          font-family: 'AntDesign';
          src: url(${require('react-native-vector-icons/Fonts/AntDesign.ttf')}) format('truetype');
        }
      `}</style>
      {/* @ts-ignore */}
      <NavigationContainer linking={linking}>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: '登录',
            }}
          />
          <Stack.Screen
              name="ForgetPassword"
              component={ForgetPassword}
              options={{
                title: '忘记密码',
              }}
            />
           <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
