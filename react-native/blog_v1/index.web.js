import {AppRegistry} from 'react-native';
import {name as appName} from './package.json';
import App from './src/App';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('root'),
});
