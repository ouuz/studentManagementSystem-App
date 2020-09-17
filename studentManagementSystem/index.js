/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './android/app/src/pages';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
