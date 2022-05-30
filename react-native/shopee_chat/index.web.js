import App from './App';
import {AppRegistry} from 'react-native';
console.log('abcdefg');
// register the app
AppRegistry.registerComponent('App', () => App);

// web enterance
AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('react-app'),
});
