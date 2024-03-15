import {useEffect} from 'react' ;
import {View, Text} from 'react-native';
import firebase from '@react-native-firebase/database' ;
// import database from './firebase'; // Adjust the path based on your project structure
import database from '@react-native-firebase/database';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UpcomingEvents from "./screens/UpcomingEvents";
import MAINPAGE from './screens/MAINPAGE';
import FacultyInfo from './screens/FacultyInfo';
import LOGINPAGE from './screens/LOGINPAGE';
import LOCATION from './screens/LOCATION';
import BUSROUTES from './screens/BUSROUTES';
import FacultyInfoDetails from './screens/FacultyInfoDetails';
import Timetable from './screens/Timetable';
import SeniorGuidanceScreenMain from './screens/SeniorGuidanceScreenMain';
import UpcomingEventDetails from './screens/UpcomingEventsDetails';
import { GoogleSignin } from '@react-native-community/google-signin';
// import PushNotification from 'react-native-push-notification';
import Toast from 'react-native-toast-message';

//for drawer
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import SideDrawer from './screens/SideDrawer';
import UserProfile from './screens/UserProfile';
import AboutApp from './screens/AboutApp';
import CourseMaterial from './screens/CourseMaterial';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LOGINPAGE"
          screenOptions={{ headerShown: false }}
        >

          <Stack.Screen name="LOGINPAGE" component={LOGINPAGE} />

          <Stack.Screen name="MAINPAGE" component={MAINPAGE} />
          <Stack.Screen name="SideDrawer" component={SideDrawer} />
          <Stack.Screen name="UserProfile" component={UserProfile} />
          <Stack.Screen name="AboutApp" component={AboutApp} />

          <Stack.Screen name="UpcomingEvents" component={UpcomingEvents} />
          <Stack.Screen name="UpcomingEventsDetails" component={UpcomingEventDetails} />

          <Stack.Screen name="CourseMaterial" component={CourseMaterial} />

          <Stack.Screen name="FacultyInfo" component={FacultyInfo} />
          <Stack.Screen name="FacultyInfoDetails" component={FacultyInfoDetails} />      

          <Stack.Screen name="LOCATION" component={LOCATION} />

          <Stack.Screen name="BUSROUTES" component={BUSROUTES} />
          
          <Stack.Screen name="Timetable" component={Timetable} />    

          <Stack.Screen name="SeniorGuidanceScreenMain" component={SeniorGuidanceScreenMain} />
          
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default App;

