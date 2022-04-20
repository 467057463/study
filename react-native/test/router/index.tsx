import {observer} from 'mobx-react-lite'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useStore } from '../hook/useStore';
import Login from '../views/Login';
import ForgetPassword from '../views/ForgetPassword';
import Detail from '../views/Detail';
import Splash from '../views/Splash';

const Stack = createNativeStackNavigator();

export default observer(() => {
  const { user } = useStore();
  user.init()

  return(
    <Stack.Navigator>
      {
        user.state === 'initing' 
        ? (
          <Stack.Screen 
            name='Splash' 
            component={Splash}
            options={{headerShown: false}}
          />
        )
        : user.state === 'logined' 
          ? (
            <Stack.Screen 
              name="Details" 
              component={Detail} 
              options={{headerShown: false}}
            />
          )
          : user.state === 'logout' 
            ? (
              <>
                <Stack.Screen 
                  name="Login" 
                  component={Login} 
                  options={{title: '登录'}}
                />
                <Stack.Screen
                  name="ForgetPassword"
                  component={ForgetPassword}
                  options={{title: '忘记密码'}}
                />
              </>
            ) 
            : null
      }
    </Stack.Navigator>
  )
})