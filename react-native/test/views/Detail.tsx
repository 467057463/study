import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-ui-lib';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from 'react-native-ui-lib';


function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Button onPress={() => navigation.navigate('Login')} label='返回'/>
    </View>
  );
}

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
    // <NavigationContainer>
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
    // </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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