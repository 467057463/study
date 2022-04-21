import {observer} from 'mobx-react-lite'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useStore } from '../hook/useStore';
import Login from '../views/Login';
import ForgetPassword from '../views/ForgetPassword';
import ChangePassword from '../views/ChangePassword';
import Detail from '../views/Detail';
import Splash from '../views/Splash';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();

export default observer(() => {
  const { user } = useStore();

  useEffect(() =>{
    user.init()
  }, [])

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
                <Stack.Screen
                  name="ChangePassword"
                  component={ChangePassword}
                  options={{title: '修改密码'}}
                />
              </>
            ) 
            : null
      }
    </Stack.Navigator>
  )
})