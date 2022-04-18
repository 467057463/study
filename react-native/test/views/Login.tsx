

import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ucRequest, setStorage, getStorage } from '../utils';

export default function HomeScreen({navigation}) {
  const [account, setAccount ] = useState('');
  const [password, setPassword ] = useState('');

  async function submit(){
    console.log(account, password)
    // navigation.navigate('Details');
    try {
      const res = await ucRequest.post('/api/v2/user/login', {
        account, 
        password
      })
      await setStorage('user', JSON.stringify(res.dataMeta));
      console.log(res.dataMeta);
    } catch (error) {
      console.log(error)
    }
  }

  async function get(){
    try {
      const value = await getStorage('user');
      console.log(value)
    } catch (error) {
      console.log(error)      
    }
  }
  return (
    <SafeAreaView style={styles.container}>      
      <Input placeholder='用户名/手机号' 
        value={account} 
        onChangeText={(value) => setAccount(value)}
      />
      <Input 
        placeholder='密码' 
        value={password} 
        onChangeText={(value) => setPassword(value)}
        secureTextEntry={true}
      />
      <View style={styles.buttonContainer}>
        <Button 
          title="登录"
          onPress={submit}
        />

        <Button type="clear" title="忘记密码" onPress={get}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  buttonContainer: {
    paddingHorizontal: 10
  } 
});