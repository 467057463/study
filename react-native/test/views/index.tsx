import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRecoilValueLoadable } from 'recoil';
import { currentUserInfo } from '../store/app';
import Login from './Login';
import Detail from './Detail';
import Splash from './Splash';

const Stack = createNativeStackNavigator();

export default function Index(){
  const currentUserInfoLoadable = useRecoilValueLoadable(currentUserInfo);
  switch (currentUserInfoLoadable.state){
    case 'loading':
      return (
        <Stack.Navigator>
          <Stack.Screen 
            name='Splash' 
            component={Splash}
            options={{headerShown: false}}
          />
        </Stack.Navigator>        
      );
    case 'hasValue':
      if(currentUserInfoLoadable.contents){
        return(
          <Stack.Navigator>
            <Stack.Screen 
              name="Details" 
              component={Detail} 
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        )
      } else {
        <Stack.Navigator>
          <Stack.Screen 
            name="Login" 
            component={Login} 
            options={{title: '登录'}}
          />
        </Stack.Navigator>
      }
    default:
      return null;
  }
}