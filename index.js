/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import newApp from './newApp';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => newApp);
