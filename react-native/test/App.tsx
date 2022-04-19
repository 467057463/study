import * as React from 'react';
// import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ToastProvider } from 'react-native-toast-notifications'
import { RecoilRoot } from 'recoil';
// import { currentUserInfo } from './store/app';

import Index from './views/Index'
// import Login from './views/Login';
// import DetailScreen from './views/Detail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <ToastProvider>
        <RecoilRoot>
          <NavigationContainer>
            <StatusBar style="auto" />
            <Stack.Navigator>
              <Stack.Screen
                name="Index"
                component={Index}
                options={{headerShown: false}}
              />                
              {/* <Index/> */}
            </Stack.Navigator>
          </NavigationContainer>
        </RecoilRoot>
      </ToastProvider>
    </SafeAreaProvider>
  );
}

export default App;