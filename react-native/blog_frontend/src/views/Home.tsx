import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Technology from './Technology';
import Life from './Life';
import User from './User';

const Tab = createBottomTabNavigator();

export default function Home({navigation}) {

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Technology') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          } else if (route.name === 'Life') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'User') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Technology" component={Technology} options={{title: '技术'}}/>
      <Tab.Screen name="Life" component={Life} options={{title: '随笔'}}/>
      <Tab.Screen
        name="User"
        component={User}
        options={{title: '我的'}}
      />
    </Tab.Navigator>
  );
}