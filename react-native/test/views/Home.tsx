

import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-ui-lib';

export default function HomeScreen({navigation}) {

  return (
    <View style={styles.container}>      
      <Button label="hahaha fuck" onPress={() => navigation.navigate('Details')}/>
    </View>
  );
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