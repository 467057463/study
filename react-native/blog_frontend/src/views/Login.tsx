import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native-web';
import {Button} from '@rneui/themed';
import { Divider } from "@rneui/themed";
import { Badge, Icon, withBadge  } from "@rneui/themed";
import { BottomSheet } from "@rneui/themed";
import { Card } from "@rneui/themed";

const BadgedIcon = withBadge(15)(Icon);

export default function Login({navigation}){
  const [isVisible, setIsVisible] = useState(false);

  return(
    <View style={styles.view}>
      <Button 
        title="聊天" 
        onPress={() => navigation.navigate('Home', {
          screen: 'Settings',
        })
        }/>
      {/* @ts-ignore */}
      <BadgedIcon type="ionicon" name="ios-chatbubbles" />
      <Text>divider</Text>
      <Divider color='red' width={2}/>
      <Button
        title="忘记密码"
        onPress={() => navigation.navigate('ForgetPassword')}
      />
      <Button
        title="Open Bottom Sheet"
        onPress={() => setIsVisible(true)}
      />
      {/* @ts-ignore */}
      <BottomSheet modalProps={{}} isVisible={isVisible} onBackdropPress={() => setIsVisible(false)}>
        <Text>ABCDEFG</Text>
      </BottomSheet>
      {/* @ts-ignore */}
      <Card>
        <Card.Title>CARD TITLE</Card.Title>
        <Card.Divider/>
        <Card.Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }}
        />
        <Text>Test</Text>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});
