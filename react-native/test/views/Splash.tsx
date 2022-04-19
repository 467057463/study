import { View, StyleSheet } from 'react-native';
import { Image } from '@rneui/themed';
import splash from '../assets/splash.png';

export default function Splash() {
  return (
    <View style={styles.container}>
      {/* <Image
        source={splash}
        style={{width: 580, height: 274}}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
})