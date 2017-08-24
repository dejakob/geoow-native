import { AppRegistry } from 'react-native';
import App from './app/index';

console.disableYellowBox = true;
// console.log = () => {};

AppRegistry.registerComponent('GeoowNative', () => App);
