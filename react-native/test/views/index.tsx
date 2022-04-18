import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import DetailScreen from './Detail';
import { getStorage } from '../utils';

const Stack = createNativeStackNavigator();

export default function Index({navigation }){

  (async function(){
    const user = await getStorage('user');
    console.log(user);
  })()

  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{title: '登录'}}
      />
      <Stack.Screen 
        name="Details" 
        component={DetailScreen} 
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}