import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";


import LOGINPAGE from './screens/LOGINPAGE'

import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
function DrawerRoot({ navigation }) {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false, drawerStyle: { width: 430 } }}
      drawerContent={(props) => <DrawerMenu {...props} />}
      >
      <Drawer.Screen
        name="LOGINPAGE"
        component={LOGINPAGE}
        options={{ headerShown: false }}
      />
{/*       
      <Drawer.Screen
        name="MAINPAGE"
        component={MAINPAGE}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="AnnouncementsScreenMain"
        component={AnnouncementsScreenMain}
        options={(props) => ({
          headerShown: true,
          header: () => <Upper />,
        })}
      />
      <Drawer.Screen
        name="FacultyInfo"
        component={FacultyInfo}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="HOMESCREEN"
        component={HOMESCREEN}
        options={{ headerShown: false }}
      /> */}
    </Drawer.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      },
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="DrawerRoot" component={DrawerRoot} />

              <Stack.Screen
                name="LOCATION"
                component={LOCATION}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="BUSROUTES"
                component={BUSROUTES}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Timetable"
                component={Timetable}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CourseMaterial"
                component={CourseMaterial}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CourseMaterial1"
                component={CourseMaterial1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LOGINPAGE1"
                component={LOGINPAGE1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LOGINPAGE"
                component={LOGINPAGE}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="REGISTRARTION1"
                component={REGISTRARTION1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="REGISTRARTION"
                component={REGISTRARTION}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SeniorGuidanceScreenAnswerRejected"
                component={SeniorGuidanceScreenAnswe}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SeniorGuidanceScreenAnswerQuery"
                component={SeniorGuidanceScreenAnswe1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SeniorGuidanceScreenViewDetails"
                component={SeniorGuidanceScreenViewD}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SeniorGuidanceScreenMain"
                component={SeniorGuidanceScreenMain}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
