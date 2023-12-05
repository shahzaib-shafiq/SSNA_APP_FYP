const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LOCATION from "./screens/LOCATION";
import BUSROUTES from "./screens/BUSROUTES";
import Timetable from "./screens/Timetable";
import CourseMaterial from "./screens/CourseMaterial";
import CourseMaterial1 from "./screens/CourseMaterial1";
import LOGINPAGE1 from "./screens/LOGINPAGE1";
import LOGINPAGE from "./screens/LOGINPAGE";
import REGISTRARTION1 from "./screens/REGISTRARTION1";
import REGISTRARTION from "./screens/REGISTRARTION";
import HOMESCREEN from "./screens/HOMESCREEN";
import SeniorGuidanceScreenAnswe from "./screens/SeniorGuidanceScreenAnswe";
import SeniorGuidanceScreenAnswe1 from "./screens/SeniorGuidanceScreenAnswe1";
import SeniorGuidanceScreenViewD from "./screens/SeniorGuidanceScreenViewD";
import SeniorGuidanceScreenMain from "./screens/SeniorGuidanceScreenMain";
import FacultyInfo from "./screens/FacultyInfo";
import MAINPAGE from "./screens/MAINPAGE";
import DrawerMenu from "./components/DrawerMenu";
import AnnouncementsScreenMain from "./screens/AnnouncementsScreenMain";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import Upper from "./components/Upper";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

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
      {/* <Drawer.Screen
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
