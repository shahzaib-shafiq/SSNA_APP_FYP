import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Animated, { Easing } from 'react-native-reanimated';

const DrawerContent = ({ navigation }) => {
    return (
      <View>
        {/* Drawer items */}
        <Pressable onPress={() => navigation.navigate('MAINPAGE')}>
          <Text>Main Page</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('UpcomingEvents')}>
          <Text>Upcoming Events</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('FacultyInfo')}>
          <Text>Faculty Info</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('LOCATION')}>
          <Text>Location</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('BUSROUTES')}>
          <Text>Bus Routes</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Timetable')}>
          <Text>Timetable</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('SeniorGuidanceScreenMain')}>
          <Text>Senior Guidance</Text>
        </Pressable>
      </View>
    );
  };

  export default DrawerContent;
