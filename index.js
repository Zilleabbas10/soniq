/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import enableDevTool from './debugger';

//For debugging API calls
enableDevTool();

AppRegistry.registerComponent(appName, () => App);
