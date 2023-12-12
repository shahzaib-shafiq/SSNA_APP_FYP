/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from 'react-native-push-notification';
import { GoogleSignin } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';

// Create a channel
PushNotification.createChannel({
    channelId: 'default-channel-id', // id for Android
    channelName: 'Default Channel',
  });

  // Initialize GoogleSignin
GoogleSignin.configure({
  webClientId: '879576680646-imadre0ps3b4ot8a1gi4kfgmnqjjekec.apps.googleusercontent.com', // Replace with your Web Client ID
});

AppRegistry.registerComponent(appName, () => App);
