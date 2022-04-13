import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import {Text} from 'react-native';
import {useStore} from '../hook/useStore';

export default observer(() => {
  const {name} = useStore();
  return <Text>{name}</Text>;
});
