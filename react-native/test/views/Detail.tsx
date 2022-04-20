import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from '@rneui/base';
import {observer} from 'mobx-react-lite'
import { useStore } from '../hook/useStore';


const HomeScreen = observer(() => {
  const { user } = useStore();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Text>{JSON.stringify(user.contents)}</Text>
      <Button title='退出' onPress={() => user.logout()}/>
    </View>
  )
})

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function UserScreen(){
  return(
    <View style={styles.container}>
      <Text>我的</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator();

export default function DetailScreen(){
  return(
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{title: '聊天'}}
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{title: '设置'}}
      />
      <Tab.Screen
        name="user"
        component={UserScreen}
        options={{title: '用户'}}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  },
  button: {
    padding: 20,
    borderRadius: 5,
    backgroundColor: 'blue'
  }
});