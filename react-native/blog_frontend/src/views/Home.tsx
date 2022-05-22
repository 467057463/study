import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Chat from './Chat';
import Settings from './Settings';

const Tab = createBottomTabNavigator();

export default function Home({navigation}) {
  React.useEffect(() => {
    console.log(navigation)
    const unsubscribe = navigation.addListener('tabPress', (e) => {
      console.log(e)
      // Prevent default behavior
      // e.preventDefault();
  
      // Do something manually
      // ...
    });
  
    return unsubscribe;
  }, [navigation]);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Chat') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Chat" component={Chat} options={{title: '聊天'}}/>
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{title: '设置'}}
      />
    </Tab.Navigator>
  );
}