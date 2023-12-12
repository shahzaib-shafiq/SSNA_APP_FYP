import React, { useState } from "react";
import Announcements from "./Announcements";
import Home from "./Home";
import FacultyInfo1 from "./FacultyInfo1";
import Logout from "./Logout";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const DrawerMenu = ({ state, navigation }) => {
  const [drawerItemsNormal] = useState([
    <Announcements />,
    <Home />,
    <FacultyInfo1 />,
    <Logout />,
  ]);
  const [drawerItemsActive] = useState([
    <Announcements />,
    <Home />,
    <FacultyInfo1 />,
    <Logout />,
  ]);
  const stateIndex = !state ? 0 : state.index;

  return (
    <SafeAreaView style={styles.drawerMenu}>
      <View style={styles.view}>
        <LinearGradient
          style={styles.bluebg}
          locations={[0, 0.59]}
          colors={["rgba(77, 142, 169, 0)", "#4d7da9"]}
        />
        <Image
          style={styles.mingcutemenuFillIcon1}
          contentFit="cover"
          source={require("../assets/mingcutemenufill1.png")}
        />
        <Image
          style={styles.maskGroupIcon1}
          contentFit="cover"
          source={require("../assets/mask-group.png")}
        />
        <Text style={styles.hiTipu}>Hi, Tipu!</Text>
        <Image
          style={styles.pngtreecartoonSchoolSupplie1}
          contentFit="cover"
          source={require("../assets/pngtreecartoon-school-supplies-stationery-material-4369627-11.png")}
        />
        <View style={[styles.child, styles.childLayout2]} />
        <View style={[styles.item, styles.itemLayout]} />
        <View style={styles.inner} />
        <Image
          style={styles.information1Icon1}
          contentFit="cover"
          source={require("../assets/information-1.png")}
        />
        <Text style={styles.findingSomethingCan1}>
          Finding something, can I help?
        </Text>
        <Image
          style={styles.search1Icon1}
          contentFit="cover"
          source={require("../assets/search-1.png")}
        />
        <Text style={styles.quickAccess1}>Quick Access !</Text>
        <View style={styles.rectangleView} />
        <LinearGradient
          style={[styles.rectangleLineargradient, styles.child1Layout]}
          locations={[0, 1, 1]}
          colors={["#0086ff", "rgba(0, 0, 0, 0)", "#0087ff"]}
        />
        <LinearGradient
          style={[styles.child1, styles.child1Layout]}
          locations={[0, 1, 1]}
          colors={["#0086ff", "rgba(0, 0, 0, 0)", "#0087ff"]}
        />
        <LinearGradient
          style={[styles.child2, styles.childLayout1]}
          locations={[0, 1, 1]}
          colors={["#0086ff", "rgba(0, 0, 0, 0)", "#0087ff"]}
        />
        <LinearGradient
          style={[styles.child3, styles.childLayout1]}
          locations={[0, 1, 1]}
          colors={["#0086ff", "rgba(0, 0, 0, 0)", "#0087ff"]}
        />
        <LinearGradient
          style={[styles.child4, styles.childLayout]}
          locations={[0, 1, 1]}
          colors={["#0086ff", "rgba(0, 0, 0, 0)", "#0087ff"]}
        />
        <LinearGradient
          style={[styles.child5, styles.childLayout]}
          locations={[0, 1, 1]}
          colors={["#0086ff", "rgba(0, 0, 0, 0)", "#0087ff"]}
        />
        <Text style={[styles.location, styles.exploreTypo]}>Location</Text>
        <Text style={[styles.facultyInfo, styles.exploreTypo]}>
          Faculty Info
        </Text>
        <Text style={[styles.viewTimetable, styles.viewTimetableTypo]}>
          View Timetable
        </Text>
        <Text style={[styles.guidancePortal, styles.viewTimetableTypo]}>
          Guidance Portal
        </Text>
        <Text style={[styles.busRoutes, styles.busRoutesTypo]}>Bus Routes</Text>
        <Text style={[styles.announcements, styles.busRoutesTypo]}>
          Announcements
        </Text>
        <Image
          style={[styles.googleMapsLogo20201Icon, styles.itemLayout]}
          contentFit="cover"
          source={require("../assets/google-maps-logo-2020-1.png")}
        />
        <Image
          style={styles.pngwing1Icon}
          contentFit="cover"
          source={require("../assets/pngwing-1.png")}
        />
        <Image
          style={styles.screenshot20231116142906RIcon}
          contentFit="cover"
          source={require("../assets/screenshot-20231116-142906removebgpreview-1.png")}
        />
        <Image
          style={styles.promotion86292861Icon}
          contentFit="cover"
          source={require("../assets/promotion-8629286-1.png")}
        />
        <Image
          style={styles.schedule42532501Icon}
          contentFit="cover"
          source={require("../assets/schedule-4253250-1.png")}
        />
        <Image
          style={styles.previewRemovebgPreview1Icon}
          contentFit="cover"
          source={require("../assets/previewremovebgpreview-1.png")}
        />
        <Image
          style={[styles.child6, styles.childLayout2]}
          contentFit="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <Image
          style={[styles.child6, styles.childLayout2]}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={[styles.clarityhomeLineIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/clarityhomeline.png")}
        />
        <View style={[styles.bluebg1, styles.bluebgPosition]} />
        <Image
          style={styles.bluebgPosition}
          contentFit="cover"
          source={require("../assets/bluebg.png")}
        />
        <Text style={[styles.explore, styles.exploreTypo]}>Explore</Text>
        <View style={styles.baritems}>
          <Pressable
            style={[styles.timetable, styles.mapPosition]}
            onPress={() => navigation.navigate("Timetable")}
          >
            <Text style={[styles.timetable1, styles.logout1Typo]}>
              Timetable
            </Text>
            <View style={[styles.timetableChild, styles.childBorder1]} />
          </Pressable>
          <Pressable
            style={[styles.home, styles.mapPosition]}
            onPress={() =>
              navigation.navigate("MAINPAGE")
            }
          >
            {stateIndex === 1 ? drawerItemsActive[1] : drawerItemsNormal[1]}
            <View style={[styles.timetableChild, styles.childBorder1]} />
          </Pressable>
          <Pressable
            style={[styles.busSchedule, styles.mapPosition]}
            onPress={() => navigation.navigate("BUSROUTES")}
          >
            <Text style={[styles.busSchedule1, styles.logout1Typo]}>
              Bus Schedule
            </Text>
            <View style={[styles.busScheduleChild, styles.childBorder1]} />
          </Pressable>
          <Pressable
            style={[styles.announcements1, styles.mapPosition]}
            onPress={() =>
              navigation.navigate("UpcomingEvents")
            }
          >
            {stateIndex === 0 ? drawerItemsActive[0] : drawerItemsNormal[0]}
            <View style={[styles.announcementsChild, styles.childBorder]} />
          </Pressable>
          <Pressable
            style={[styles.seniorGuidance, styles.mapPosition]}
            onPress={() => navigation.navigate("SeniorGuidanceScreenMain")}
          >
            <Text style={[styles.seniorGuidance1, styles.logout1Typo]}>
              Senior Guidance
            </Text>
            <View style={[styles.seniorGuidanceChild, styles.childBorder1]} />
          </Pressable>
          <Pressable
            style={[styles.facultyInfo1, styles.mapPosition]}
            onPress={() =>
              navigation.navigate("FacultyInfo")
            }
          >
            {stateIndex === 2 ? drawerItemsActive[2] : drawerItemsNormal[2]}
            <View style={[styles.facultyInfoChild, styles.childBorder1]} />
          </Pressable>
          <Pressable
            style={[styles.map, styles.mapPosition]}
            onPress={() => navigation.navigate("LOCATION")}
          >
            <Text style={[styles.seniorGuidance1, styles.logout1Typo]}>
              Campus Map
            </Text>
            <View style={[styles.mapChild, styles.childBorder]} />
          </Pressable>
          <View style={[styles.upcomingEvents, styles.mapPosition]}>
            <Text style={[styles.seniorGuidance1, styles.logout1Typo]}>
              Upcoming Events
            </Text>
            <View style={[styles.upcomingEventsChild, styles.childBorder1]} />
          </View>
          <Pressable
            style={[styles.courseMaterial, styles.mapPosition]}
            onPress={() => navigation.navigate("CourseMaterial")}
          >
            <Text style={[styles.seniorGuidance1, styles.logout1Typo]}>
              Course Material
            </Text>
            <View style={[styles.seniorGuidanceChild, styles.childBorder1]} />
          </Pressable>
        </View>
        {stateIndex === 3 ? drawerItemsActive[3] : drawerItemsNormal[3]}
        <Pressable
          style={styles.epback}
          onPress={() =>
            navigation.navigate("MAINPAGE")
          }
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/epback.png")}
          />
        </Pressable>
        <Image
          style={[styles.uilsettingIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/uilsetting.png")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  drawerMenu: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  childLayout2: {
    height: 44,
    position: "absolute",
  },
  itemLayout: {
    width: 45,
    position: "absolute",
  },
  child1Layout: {
    height: 120,
    width: 170,
    top: 365,
    opacity: 0.1,
    borderRadius: Border.br_smi,
    backgroundColor: "transparent",
    position: "absolute",
  },
  childLayout1: {
    top: 510,
    height: 120,
    width: 170,
    opacity: 0.1,
    borderRadius: Border.br_smi,
    backgroundColor: "transparent",
    position: "absolute",
  },
  childLayout: {
    top: 655,
    height: 120,
    width: 170,
    opacity: 0.1,
    borderRadius: Border.br_smi,
    backgroundColor: "transparent",
    position: "absolute",
  },
  exploreTypo: {
    textAlign: "left",
    fontWeight: "600",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  viewTimetableTypo: {
    top: 457,
    textAlign: "left",
    color: Color.colorGray_300,
    fontWeight: "600",
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  busRoutesTypo: {
    top: 602,
    textAlign: "left",
    color: Color.colorGray_300,
    fontWeight: "600",
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  iconLayout: {
    height: 36,
    width: 36,
    position: "absolute",
    overflow: "hidden",
  },
  bluebgPosition: {
    bottom: 0,
    left: "50%",
    marginLeft: -215,
    position: "absolute",
    height: 932,
    width: 430,
  },
  mapPosition: {
    left: 0,
    position: "absolute",
  },
  logout1Typo: {
    lineHeight: 24,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.calibri,
    fontSize: FontSize.size_5xl,
  },
  childBorder1: {
    marginTop: 3,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
  },
  childBorder: {
    marginTop: 2,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
  },
  bluebg: {
    bottom: 662,
    height: 270,
    backgroundColor: "transparent",
    marginLeft: -215,
    borderBottomLeftRadius: Border.br_6xl,
    borderBottomRightRadius: Border.br_6xl,
    left: "50%",
    position: "absolute",
    width: 430,
  },
  mingcutemenuFillIcon1: {
    left: 20,
    height: 24,
    width: 24,
    top: 40,
    position: "absolute",
    overflow: "hidden",
  },
  maskGroupIcon1: {
    width: 31,
    height: 31,
    left: 378,
    top: 40,
    position: "absolute",
  },
  hiTipu: {
    top: 119,
    textAlign: "center",
    fontFamily: FontFamily.calibri,
    fontSize: FontSize.size_5xl,
    left: 22,
    color: Color.colorWhite,
    fontWeight: "700",
    position: "absolute",
  },
  pngtreecartoonSchoolSupplie1: {
    marginLeft: 35,
    bottom: 707,
    width: 246,
    height: 225,
    opacity: 0.3,
    left: "50%",
    position: "absolute",
  },
  child: {
    backgroundColor: Color.colorGainsboro_600,
    width: 307,
    borderRadius: Border.br_3xs,
    top: 194,
    height: 44,
    left: 22,
  },
  item: {
    backgroundColor: Color.colorSteelblue,
    borderColor: "rgba(255, 255, 255, 0.15)",
    borderWidth: 1,
    borderStyle: "solid",
    width: 45,
    left: 284,
    height: 44,
    borderRadius: Border.br_3xs,
    top: 194,
  },
  inner: {
    top: 196,
    left: 369,
    backgroundColor: "rgba(217, 217, 217, 0.15)",
    width: 41,
    height: 40,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  information1Icon1: {
    top: 204,
    opacity: 0.5,
    left: 378,
    height: 24,
    width: 24,
    position: "absolute",
  },
  findingSomethingCan1: {
    fontWeight: "300",
    width: 199,
    height: 19,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_sm,
    left: 34,
    top: 206,
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  search1Icon1: {
    left: 297,
    width: 20,
    height: 20,
    top: 206,
    opacity: 0.5,
    position: "absolute",
  },
  quickAccess1: {
    top: 297,
    color: "rgba(0, 0, 0, 0.68)",
    fontWeight: "600",
    left: 21,
    fontFamily: FontFamily.inter,
    textAlign: "center",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  rectangleView: {
    top: 343,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderColor: "#000",
    width: 389,
    height: 456,
    opacity: 0.1,
    borderRadius: Border.br_smi,
    left: 21,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  rectangleLineargradient: {
    left: 34,
  },
  child1: {
    left: 225,
  },
  child2: {
    left: 34,
  },
  child3: {
    left: 225,
  },
  child4: {
    left: 225,
  },
  child5: {
    left: 34,
  },
  location: {
    left: 89,
    color: Color.colorGray_300,
    top: 747,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  facultyInfo: {
    left: 270,
    color: Color.colorGray_300,
    top: 747,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  viewTimetable: {
    left: 66,
  },
  guidancePortal: {
    left: 256,
  },
  busRoutes: {
    left: 80,
  },
  announcements: {
    left: 254,
  },
  googleMapsLogo20201Icon: {
    top: 687,
    left: 97,
    borderRadius: Border.br_341xl_5,
    height: 55,
  },
  pngwing1Icon: {
    top: 675,
    left: 272,
    width: 76,
    height: 76,
    position: "absolute",
  },
  screenshot20231116142906RIcon: {
    top: 519,
    left: 55,
    width: 127,
    height: 83,
    position: "absolute",
  },
  promotion86292861Icon: {
    top: 527,
    width: 67,
    height: 67,
    left: 284,
    position: "absolute",
  },
  schedule42532501Icon: {
    top: 380,
    left: 88,
    width: 61,
    height: 61,
    position: "absolute",
  },
  previewRemovebgPreview1Icon: {
    top: 370,
    width: 87,
    height: 87,
    left: 266,
    position: "absolute",
  },
  child6: {
    top: 871,
    left: 189,
    width: 44,
  },
  clarityhomeLineIcon1: {
    top: 873,
    left: 193,
  },
  bluebg1: {
    borderBottomLeftRadius: Border.br_6xl,
    borderBottomRightRadius: Border.br_6xl,
    bottom: 0,
    backgroundColor: Color.colorWhite,
  },
  explore: {
    top: 143,
    left: 35,
    fontSize: FontSize.size_13xl,
    lineHeight: 32,
    textAlign: "left",
    color: Color.colorWhite,
  },
  timetable1: {
    width: 150,
    height: 33,
  },
  timetableChild: {
    width: 131,
  },
  timetable: {
    top: 54,
  },
  home: {
    top: 0,
  },
  busSchedule1: {
    width: 204,
    height: 33,
  },
  busScheduleChild: {
    width: 171,
  },
  busSchedule: {
    top: 108,
  },
  announcementsChild: {
    width: 208,
  },
  announcements1: {
    top: 164,
  },
  seniorGuidance1: {
    height: 33,
    width: 247,
  },
  seniorGuidanceChild: {
    width: 208,
  },
  seniorGuidance: {
    top: 221,
  },
  facultyInfoChild: {
    width: 151,
  },
  facultyInfo1: {
    top: 278,
  },
  mapChild: {
    width: 181,
  },
  map: {
    top: 335,
  },
  upcomingEventsChild: {
    width: 221,
  },
  upcomingEvents: {
    top: 391,
  },
  courseMaterial: {
    top: 448,
  },
  baritems: {
    top: 251,
    left: 31,
    height: 484,
    width: 247,
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  epback: {
    left: 15,
    top: 35,
    width: 38,
    height: 33,
    position: "absolute",
  },
  uilsettingIcon1: {
    top: 862,
    left: 266,
  },
  view: {
    overflow: "hidden",
    height: 932,
    width: 430,
    backgroundColor: Color.colorWhite,
  },
});

export default DrawerMenu;
