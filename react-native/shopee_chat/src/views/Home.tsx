import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Chat from './Chat';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="chat"
        component={Chat}
        options={{
          title: '聊天',
        }}
      />
    </Tab.Navigator>
  );
}
