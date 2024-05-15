// import React, { useEffect } from 'react';
// import { View, Text, Alert } from 'react-native';
// import messaging from '@react-native-firebase/messaging';

// const App = () => {
//   useEffect(() => {
//     const requestUserPermission = async () => {
//       const authStatus = await messaging().requestPermission();
//       const enabled =
//         authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//         authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//       if (enabled) {
//         console.log('Authorization status:', authStatus);
//       }
//     };

//     const initializeFirebaseMessaging = async () => {
//       await requestUserPermission();

//       messaging()
//         .getToken()
//         .then((token) => {
//           console.log('FCM Token:', token);
//           // Send this token to your server to associate it with the user
//         });

//       messaging().onMessage(async (remoteMessage) => {
//         Alert.alert(
//           'Notification',
//           remoteMessage.notification.body,
//           [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
//           { cancelable: false }
//         );
//       });
//     };

//     initializeFirebaseMessaging();

//     return () => {
//       // Clean up listeners when component unmounts
//       messaging().onTokenRefresh(() => {});
//     };
//   }, []);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Welcome to My App</Text>
//     </View>
//   );
// };

// export default App;


// import React, { useEffect, useState } from 'react';
// import { View, Text, Alert } from 'react-native';
// import messaging from '@react-native-firebase/messaging';

// const App = () => {
//   const [notification, setNotification] = useState(null);

//   useEffect(() => {
//     const requestUserPermission = async () => {
//       const authStatus = await messaging().requestPermission();
//       const enabled =
//         authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//         authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//       if (enabled) {
//         console.log('Authorization status:', authStatus);
//       }
//     };

//     const initializeFirebaseMessaging = async () => {
//       await requestUserPermission();

//       messaging()
//         .getToken()
//         .then((token) => {
//           console.log('FCM Token:', token);
//           // Send this token to your server to associate it with the user
//         });

//       // Handle incoming messages while app is in foreground
//       messaging().onMessage(async (remoteMessage) => {
//         console.log('Foreground Message:', remoteMessage);

//         // Extract notification body and title from remoteMessage
//         const { notification } = remoteMessage;

//         // Set the notification state to trigger a re-render
//         setNotification(notification);

//         // Show alert with notification message
//         Alert.alert(
//           notification.title || 'Notification',
//           notification.body || '',
//           [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
//           { cancelable: false }
//         );
//       });
//     };

//     initializeFirebaseMessaging();

//     return () => {
//       // Clean up listeners when component unmounts
//       messaging().onTokenRefresh(() => {});
//     };
//   }, []);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Welcome to My App</Text>
//       {notification && (
//         <View style={{ marginTop: 20 }}>
//           <Text style={{ fontWeight: 'bold' }}>{notification.title}</Text>
//           <Text>{notification.body}</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// export default App;
