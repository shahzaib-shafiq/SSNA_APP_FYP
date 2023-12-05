import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const MAINPAGE = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainPage}>
      <LinearGradient
        style={[styles.bluebg, styles.bluebgPosition]}
        locations={[0.38, 1]}
        colors={["#0086ff", "rgba(77, 142, 169, 0)"]}
      />
      <Image
        style={[styles.mingcutemenuFillIcon1, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/mingcutemenufill.png")}
      />
      <Image
        style={styles.maskGroupIcon1}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
      <Text style={styles.usernameStyle}>Hi, Tahir!</Text>
      <Image
        style={[styles.pngtreecartoonSchoolSupplie1, styles.bluebgPosition]}
        contentFit="cover"
        source={require("../assets/pngtreecartoon-school-supplies-stationery-material-4369627-1.png")}
      />
      <View style={styles.mainPageChild} />
      <View style={styles.searchbar}>
        <View style={styles.searchbarChild} />
        <View style={[styles.searchbarItem, styles.searchbarItemLayout]} />
        <Text style={styles.findingSomethingCan1}>
          Finding something, can I help?
        </Text>
        <Image
          style={styles.search1Icon1}
          contentFit="cover"
          source={require("../assets/search-11.png")}
        />
      </View>
      <Text style={styles.quickAccess1}>Quick Access !</Text>
      <View style={[styles.mainPageItem, styles.pressableLayout]} />
      <LinearGradient
        style={[styles.wrapper, styles.wrapperLayout]}
        locations={[0, 1, 1]}
        colors={["#0086ff", "rgba(0, 0, 0, 0)", "#0087ff"]}
      >
        <Pressable
          style={[styles.pressable, styles.pressableLayout]}
          onPress={() => navigation.navigate("Timetable")}
        />
      </LinearGradient>
      <LinearGradient
        style={[styles.container, styles.wrapperLayout]}
        locations={[0, 1, 1]}
        colors={["#0086ff", "rgba(0, 0, 0, 0)", "#0087ff"]}
      >
        <Pressable
          style={[styles.pressable, styles.pressableLayout]}
          onPress={() => navigation.navigate("SeniorGuidanceScreenMain")}
        />
      </LinearGradient>
      <LinearGradient
        style={[styles.frame, styles.framePosition]}
        locations={[0, 1, 1]}
        colors={["#0086ff", "rgba(0, 0, 0, 0)", "#0087ff"]}
      >
        <Pressable
          style={[styles.pressable, styles.pressableLayout]}
          onPress={() => navigation.navigate("BUSROUTES")}
        />
      </LinearGradient>
      <LinearGradient
        style={[styles.rectangleLineargradient, styles.framePosition]}
        locations={[0, 1, 1]}
        colors={["#0086ff", "rgba(0, 0, 0, 0)", "#0087ff"]}
      >
        <Pressable
          style={[styles.pressable, styles.pressableLayout]}
          onPress={() =>
            navigation.navigate("DrawerRoot", {
              screen: "AnnouncementsScreenMain",
            })
          }
        />
      </LinearGradient>
      <LinearGradient
        style={[styles.wrapper1, styles.wrapperLayout]}
        locations={[0, 1, 1]}
        colors={["#0086ff", "rgba(0, 0, 0, 0)", "#0087ff"]}
      >
        <Pressable
          style={[styles.pressable, styles.pressableLayout]}
          onPress={() =>
            navigation.navigate("DrawerRoot", { screen: "FacultyInfo" })
          }
        />
      </LinearGradient>
      <LinearGradient
        style={[styles.wrapper2, styles.wrapperLayout]}
        locations={[0, 1, 1]}
        colors={["#0086ff", "rgba(0, 0, 0, 0)", "#0087ff"]}
      >
        <Pressable
          style={[styles.pressable, styles.pressableLayout]}
          onPress={() => navigation.navigate("LOCATION")}
        />
      </LinearGradient>
      <Text style={[styles.location, styles.locationTypo]}>Location</Text>
      <Text style={[styles.facultyInfo, styles.locationTypo]}>
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
        style={[styles.googleMapsLogo20201Icon, styles.searchbarItemLayout]}
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
      <View style={styles.upcomingEvents}>
        <View style={[styles.upcomingEventsChild, styles.upcomingLayout]} />
        <View style={[styles.upcomingEventsItem, styles.upcomingLayout]} />
        <View style={[styles.upcomingEventsInner, styles.upcomingLayout]} />
        <Text style={[styles.daira2024, styles.daira2024Typo]}>Daira 2024</Text>
        <Text style={[styles.convocation2025, styles.daira2024Typo]}>
          CONVOCATION 2025
        </Text>
        <Text style={[styles.homecoming2025, styles.daira2024Typo]}>
          HOMECOMING 2025
        </Text>
        <Text
          style={[
            styles.biggestNationalOlympiad1,
            styles.alumniGatheringPosition,
          ]}
        >
          Biggest National Olympiad of Pakistan.
        </Text>
        <Text
          style={[
            styles.ceremonyForGraduating1,
            styles.alumniGatheringPosition,
          ]}
        >
          Ceremony for graduating batch
        </Text>
        <Text style={[styles.alumniGathering, styles.alumniGatheringPosition]}>
          Alumni gathering
        </Text>
        <Text style={[styles.march2024, styles.march2024Position]}>
          March, 2024
        </Text>
        <Text style={[styles.october2025, styles.march2024Position]}>
          October, 2025
        </Text>
        <Text style={[styles.november2025, styles.march2024Position]}>
          November, 2025
        </Text>
        <Image
          style={[styles.calendar1Icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/calendar-1.png")}
        />
        <Image
          style={[styles.calendar2Icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/calendar-1.png")}
        />
        <Image
          style={[styles.calendar3Icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/calendar-1.png")}
        />
        <Text style={styles.upcomingEvents1}>Upcoming Events</Text>
      </View>
      <Image
        style={[styles.materialSymbolsLighthelpOuIcon1, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/materialsymbolslighthelpoutline.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bluebgPosition: {
    right: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout1: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  searchbarItemLayout: {
    width: 45,
    position: "absolute",
  },
  pressableLayout: {
    opacity: 0.1,
    borderRadius: Border.br_smi,
  },
  wrapperLayout: {
    height: 120,
    width: 170,
    position: "absolute",
  },
  framePosition: {
    top: 571,
    height: 120,
    width: 170,
    position: "absolute",
  },
  locationTypo: {
    textAlign: "left",
    color: Color.colorGray_300,
    top: 808,
    fontWeight: "600",
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  viewTimetableTypo: {
    top: 518,
    textAlign: "left",
    color: Color.colorGray_300,
    fontWeight: "600",
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  busRoutesTypo: {
    top: 663,
    textAlign: "left",
    color: Color.colorGray_300,
    fontWeight: "600",
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  upcomingLayout: {
    height: 82,
    width: 179,
    backgroundColor: Color.colorMistyrose,
    borderRadius: Border.br_mini,
    left: 0,
    position: "absolute",
  },
  daira2024Typo: {
    lineHeight: 15,
    fontSize: FontSize.size_mini,
    marginLeft: 17,
    left: "50%",
    top: "50%",
    textAlign: "left",
    fontWeight: "600",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  alumniGatheringPosition: {
    height: 22,
    lineHeight: 10,
    fontSize: FontSize.size_3xs,
    marginLeft: 19,
    left: "50%",
    top: "50%",
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  march2024Position: {
    height: 11,
    marginLeft: 31,
    lineHeight: 10,
    fontSize: FontSize.size_3xs,
    left: "50%",
    top: "50%",
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  iconLayout: {
    height: 12,
    width: 12,
    left: 189,
    position: "absolute",
  },
  bluebg: {
    borderBottomRightRadius: Border.br_6xl,
    borderBottomLeftRadius: Border.br_6xl,
    width: 430,
    height: 309,
    backgroundColor: "transparent",
  },
  mingcutemenuFillIcon1: {
    top: 79,
    left: 20,
    height: 24,
    width: 24,
  },
  maskGroupIcon1: {
    top: 80,
    left: 378,
    width: 31,
    height: 31,
    position: "absolute",
  },
  usernameStyle: {
    top: 167,
    fontSize: 27,
    fontWeight: "700",
    fontFamily: FontFamily.poppins,
    color: Color.colorWhite,
    textAlign: "center",
    left: 20,
    position: "absolute",
  },
  pngtreecartoonSchoolSupplie1: {
    width: 217,
    height: 245,
    opacity: 0.2,
  },
  mainPageChild: {
    top: 235,
    left: 358,
    width: 41,
    height: 40,
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  searchbarChild: {
    left: 0,
    height: 44,
    width: 307,
    borderRadius: Border.br_3xs,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  searchbarItem: {
    left: 262,
    backgroundColor: Color.colorSteelblue,
    borderColor: "rgba(255, 255, 255, 0.15)",
    borderWidth: 1,
    borderStyle: "solid",
    width: 45,
    height: 44,
    borderRadius: Border.br_3xs,
    top: 0,
  },
  findingSomethingCan1: {
    top: 13,
    left: 12,
    fontWeight: "300",
    width: 199,
    height: 19,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    position: "absolute",
  },
  search1Icon1: {
    top: 12,
    left: 275,
    width: 20,
    height: 20,
    position: "absolute",
  },
  searchbar: {
    top: 233,
    left: 32,
    height: 44,
    width: 307,
    position: "absolute",
  },
  quickAccess1: {
    top: 364,
    color: "#222",
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
    left: 21,
    fontFamily: FontFamily.inter,
    textAlign: "center",
    position: "absolute",
  },
  mainPageItem: {
    top: 404,
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
    left: 21,
    borderRadius: Border.br_smi,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  pressable: {
    height: "100%",
    backgroundColor: "transparent",
    borderRadius: Border.br_smi,
    width: "100%",
  },
  wrapper: {
    top: 426,
    width: 170,
    left: 34,
  },
  container: {
    left: 225,
    top: 426,
    width: 170,
  },
  frame: {
    left: 34,
  },
  rectangleLineargradient: {
    left: 225,
  },
  wrapper1: {
    top: 716,
    left: 225,
  },
  wrapper2: {
    top: 715,
    left: 34,
  },
  location: {
    left: 89,
  },
  facultyInfo: {
    left: 270,
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
    top: 748,
    left: 97,
    borderRadius: Border.br_341xl_5,
    height: 55,
  },
  pngwing1Icon: {
    top: 736,
    left: 272,
    width: 76,
    height: 76,
    position: "absolute",
  },
  screenshot20231116142906RIcon: {
    top: 580,
    left: 55,
    width: 127,
    height: 83,
    position: "absolute",
  },
  promotion86292861Icon: {
    top: 588,
    left: 284,
    width: 67,
    height: 67,
    position: "absolute",
  },
  schedule42532501Icon: {
    top: 441,
    left: 88,
    height: 61,
    width: 61,
    position: "absolute",
  },
  previewRemovebgPreview1Icon: {
    top: 431,
    left: 266,
    width: 87,
    height: 87,
    position: "absolute",
  },
  upcomingEventsChild: {
    top: 182,
  },
  upcomingEventsItem: {
    top: 297,
  },
  upcomingEventsInner: {
    top: 412,
  },
  daira2024: {
    marginTop: -195,
  },
  convocation2025: {
    marginTop: -80,
  },
  homecoming2025: {
    marginTop: 35,
  },
  biggestNationalOlympiad1: {
    marginTop: -159,
    width: 122,
    height: 22,
    lineHeight: 10,
    fontSize: FontSize.size_3xs,
    marginLeft: 19,
  },
  ceremonyForGraduating1: {
    marginTop: -45,
    width: 149,
    height: 22,
    lineHeight: 10,
    fontSize: FontSize.size_3xs,
    marginLeft: 19,
  },
  alumniGathering: {
    marginTop: 70,
    width: 122,
    height: 22,
    lineHeight: 10,
    fontSize: FontSize.size_3xs,
    marginLeft: 19,
  },
  march2024: {
    marginTop: -174,
    width: 61,
  },
  october2025: {
    marginTop: -59,
    width: 74,
  },
  november2025: {
    marginTop: 56,
    width: 84,
  },
  calendar1Icon1: {
    top: 206,
  },
  calendar2Icon1: {
    top: 321,
  },
  calendar3Icon1: {
    top: 436,
  },
  upcomingEvents1: {
    marginTop: -247,
    marginLeft: -166,
    color: Color.colorDimgray_200,
    width: 221,
    height: 27,
    left: "50%",
    top: "50%",
    textAlign: "left",
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  upcomingEvents: {
    top: 844,
    left: 43,
    width: 344,
    height: 494,
    display: "none",
    position: "absolute",
  },
  materialSymbolsLighthelpOuIcon1: {
    top: 243,
    left: 367,
  },
  mainPage: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    width: "100%",
  },
});

export default MAINPAGE;
