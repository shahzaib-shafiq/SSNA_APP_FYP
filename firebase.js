// firebase.js
import { initializeApp } from '@react-native-firebase/app';

const firebaseConfig = {    
  apiKey: 'AIzaSyANlK--8RteXUvVVc6TumEPpGQP0DMJ7G4',
  authDomain: '<ssna-admin>.firebaseapp.com',
  databaseURL: 'https://ssna-admin-default-rtdb.firebaseio.com/',
  projectId: 'ssna-admin',
  storageBucket: 'ssna-admin.appspot.com',
  messagingSenderId: '879576680646',
  appId: '1:879576680646:android:3016d153f7a53e9e1e6fc7',
};

const app = initializeApp(firebaseConfig);

export default app;
