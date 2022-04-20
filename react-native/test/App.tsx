import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ToastProvider } from 'react-native-toast-notifications'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { StoreProvider } from './hook/useStore';
import Router from './router'

export default function App() {
  return (
    <SafeAreaProvider>
      <ToastProvider>
        <StoreProvider>
          <NavigationContainer>
            <StatusBar style="auto" />
            <Router/>
          </NavigationContainer>
        </StoreProvider>
      </ToastProvider>
    </SafeAreaProvider>
  );
}
