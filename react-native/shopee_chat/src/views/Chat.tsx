import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function ConverstationList() {
  return <Text>test</Text>;
}

function ChatList({navigation}) {
  return (
    <View style={styles.view}>
      <Text>Chat</Text>
      <Button
        title="更新标题"
        onPress={() => navigation.setOptions({title: 'cw'})}
      />
    </View>
  );
}

export default () => {
  return (
    <Drawer.Navigator drawerContent={_ => <ConverstationList />}>
      <Drawer.Screen
        name="ChatList"
        component={ChatList}
        options={{title: '聊天'}}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
