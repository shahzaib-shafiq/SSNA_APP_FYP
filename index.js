/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from 'react-native-push-notification';

// Create a channel
PushNotification.createChannel({
    channelId: 'default-channel-id', // id for Android
    channelName: 'Default Channel',
  });

AppRegistry.registerComponent(appName, () => App);
