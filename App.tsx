import {useEffect} from 'react' ;
import {View, Text} from 'react-native';
import firebase from '@react-native-firebase/database' ;
// import database from './firebase'; // Adjust the path based on your project structure
import database from '@react-native-firebase/database';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UpcomingEvents from "./screens/UpcomingEvents";
import { ApplicationProvider, Layout } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import MAINPAGE from './screens/MAINPAGE';
import FacultyInfo from './screens/FacultyInfo';
import LOGINPAGE from './screens/LOGINPAGE';
import LOCATION from './screens/LOCATION';
import BUSROUTES from './screens/BUSROUTES';
import FacultyInfo11 from './screens/FacultyInfoDetails';
import FacultyInfoDetails from './screens/FacultyInfoDetails';
import Timetable from './screens/Timetable';
import SeniorGuidanceScreenAnswe from './screens/SeniorGuidanceScreenAnswe';
import SeniorGuidanceScreenMain from './screens/SeniorGuidanceScreenMain';
import UpcomingEventDetails from './screens/UpcomingEventsDetails';
import { GoogleSignin } from '@react-native-community/google-signin';
// import PushNotification from 'react-native-push-notification';

const Stack = createStackNavigator();

// Create a channel
// PushNotification.createChannel({
//   channelId: 'default-channel-id', // id for Android
//   channelName: 'Default Channel',
// });

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UpcomingEvents"
        screenOptions={{ headerShown: false }}
      >

        <Stack.Screen name="MAINPAGE" component={MAINPAGE} />

        <Stack.Screen name="UpcomingEvents" component={UpcomingEvents} />
        <Stack.Screen name="UpcomingEventsDetails" component={UpcomingEventDetails} />

        <Stack.Screen name="FacultyInfo" component={FacultyInfo} />
        <Stack.Screen name="FacultyInfoDetails" component={FacultyInfoDetails} />      

        <Stack.Screen name="LOCATION" component={LOCATION} />

        <Stack.Screen name="BUSROUTES" component={BUSROUTES} />
        
        <Stack.Screen name="Timetable" component={Timetable} />    

        <Stack.Screen name="SeniorGuidanceScreenMain" component={SeniorGuidanceScreenMain} />

        <Stack.Screen name="LOGINPAGE" component={LOGINPAGE} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

