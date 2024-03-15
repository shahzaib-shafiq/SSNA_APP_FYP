import * as React from "react";
import { Image,Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";
import { StyleSheet, Text, View, Pressable } from "react-native";

const SideDrawer = ({route}) => {

  const navigation = useNavigation();
  const { userDetail } = route.params;
  const slideAnimation = new Animated.Value(-300); // Initial position off-screen

  //for animation
  React.useEffect(() => {
    // Trigger the slide-in animation when the component mounts
    Animated.timing(slideAnimation, {
      toValue: 0, // Target value for the animation (slide in)
      duration: 300, // Animation duration in milliseconds
      useNativeDriver: false, // Set to true for better performance on native thread
    }).start();
  }, []);


  return (
    <Animated.View style={[styles.SideDrawer, styles.iconLayout, { left: slideAnimation }]}>
        <View style={[styles.SideDrawer, styles.iconLayout]}>
            <Image
                style={[styles.bgblurimageIcon, styles.courseMaterialPosition]}
                contentFit="cover"
                source={require("../assets/bgblurimage.png")}
            />
            <View style={[styles.sidebar, styles.logoutFlexBox]}>
                <Image
                style={styles.sidebarBlueIcon}
                contentFit="cover"
                source={require("../assets/Sidebar-Blue.png")}
                />
                <Text style={styles.exploretxt}>Explore</Text>
                
                <View style={styles.baritems}>
                
                <Pressable    //HOME
                    style={styles.home}
                    onPress={() => navigation.navigate("MAINPAGE",{userDetail})}
                >
                    <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
                    <View style={[styles.homeChild, styles.childBorder1]} />
                </Pressable>
                

                <Pressable    //TIMETABLE
                    style={styles.timetable}
                    onPress={() => navigation.navigate("Timetable",{userDetail})}
                >
                    <Text style={[styles.home1, styles.home1Typo]}>Timetable</Text>
                    <View style={[styles.homeChild, styles.childBorder1]} />
                </Pressable>


                <Pressable //BUS SCHEDULE
                    style={styles.busSchedule}
                    onPress={() => navigation.navigate("BUSROUTES")}
                >
                    <Text style={[styles.busSchedule1, styles.home1Typo]}>
                    Bus Schedule
                    </Text>
                    <View style={[styles.busScheduleChild, styles.childBorder1]} />
                </Pressable>


                <Pressable //ANNOUNCEMENTS
                    style={styles.announcements}
                    // onPress={() =>navigation.navigate("AnnouncementsScreenMain")
                    onPress={() => navigation.navigate("BUSROUTES")
                    }
                >
                    <Text style={[styles.busSchedule1, styles.home1Typo]}>
                    Announcements
                    </Text>
                    <View style={[styles.announcementsChild, styles.childBorder]} />
                </Pressable>


                <Pressable    //SENIOR GUIDANCE
                    style={styles.seniorGuidance}
                    onPress={() => navigation.navigate("SeniorGuidanceScreenMain")}
                >
                    <Text style={[styles.seniorGuidance1, styles.home1Typo]}>
                    Senior Guidance
                    </Text>
                    <View style={[styles.seniorGuidanceChild, styles.childBorder1]} />
                </Pressable>



                <Pressable //FACULTY INFO
                    style={styles.facultyInfo}
                    onPress={() =>
                    navigation.navigate("FacultyInfo",{userDetail})
                    }
                >
                    <Text style={[styles.seniorGuidance1, styles.home1Typo]}>
                    Faculty Information
                    </Text>
                    <View style={[styles.facultyInfoChild, styles.childBorder1]} />
                </Pressable>


                <Pressable  //CAMPUS MAP
                    style={styles.map}
                    onPress={() => navigation.navigate("LOCATION")}
                >
                    <Text style={[styles.seniorGuidance1, styles.home1Typo]}>
                    Campus Map
                    </Text>
                    <View style={[styles.mapChild, styles.childBorder]} />
                </Pressable>


                <Pressable  //UPCOMING EVENTS
                    style={styles.upcomingEvents}
                    onPress={() => navigation.navigate("UpcomingEvents",{userDetail})}
                >
                    <Text style={[styles.seniorGuidance1, styles.home1Typo]}>
                    Upcoming Events
                    </Text>
                    <View style={[styles.upcomingEventsChild, styles.childBorder1]} />
                </Pressable>


                <Pressable
                    style={[styles.courseMaterial, styles.courseMaterialPosition]}
                    onPress={() => navigation.navigate("CourseMaterial",{userDetail})}
                >
                    <Text style={[styles.seniorGuidance1, styles.home1Typo]}>
                    Course Material
                    </Text>
                    <View style={[styles.seniorGuidanceChild, styles.childBorder1]} />
                </Pressable>
                </View>


                <Pressable  //backBUTTON
                style={styles.epback}
                onPress={() => navigation.navigate("MAINPAGE",{userDetail})}
                >
                <Image
                    style={[styles.icon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/epback.png")}
                />
                </Pressable>
                
                <Pressable
                    style={[styles.logout_st, styles.courseMaterialPosition]}
                    onPress={() => navigation.navigate("LOGINPAGE")}
                >
                    <Text style={ styles.logout_position}>
                    Logout
                    </Text>
                    <Image
                        style={styles.logoutIcon}
                        contentFit="cover"
                        source={require("../assets/poweroff-1.png")}
                    />
                </Pressable>

                <Image
                style={styles.uilsettingIcon}
                contentFit="cover"
                source={require("../assets/uilsetting.png")}
                />
            </View>
        </View>
    </Animated.View>

  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  courseMaterialPosition: {
    left: 0,
    position: "absolute",
  },
  logoutFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  home1Typo: {
    fontFamily: FontFamily.poppinsRegular,
    height: 33,
    lineHeight: 24,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorWhite,
  },
  logout_position: {
    fontFamily: FontFamily.poppinsRegular,
    height: 33,
    top:"80%",
    left:"45%",
    lineHeight: 24,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorWhite,
  },
  childBorder1: {
    marginTop: 3,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
  },
  childBorder: {
    marginTop: 2,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
  },
  bgblurimageIcon: {
    top: 0,
    width: "100%",
    height: "100%",
  },
  sidebarBlueIcon: {
    width: "93%",
    // height:837,
    zIndex: 0,
    // height: "30%",
  },
  exploretxt: {
    top: "13%",
    left: 25,
    fontSize: FontSize.size_13xl,
    lineHeight: 32,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    zIndex: 1,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  homeChild: {
    width: 131,
  },
  home: {
    zIndex: 0,
  },
  home1: {
    width: 150,
    height: 33,
  },
  timetable: {
    marginTop: 20,
    zIndex: 1,
  },
  busSchedule1: {
    width: 204,
    height: 33,
  },
  busScheduleChild: {
    width: 171,
  },
  busSchedule: {
    marginTop: 20,
    zIndex: 2,
  },
  announcementsChild: {
    width: 208,
  },
  announcements: {
    zIndex: 3,
    marginTop: 20,
  },
  seniorGuidance1: {
    width: 247,
    height: 33,
  },
  logout_st: {
    width: "40%",
    top: "83%",
    left: "19%",
    // backgroundColor:'grey',
    zIndex: 8,
    height: "1%",
  },
  seniorGuidanceChild: {
    width: 208,
  },
  seniorGuidance: {
    zIndex: 4,
    marginTop: 20,
  },
  facultyInfoChild: {
    width: 151,
  },
  facultyInfo: {
    zIndex: 5,
    marginTop: 20,
  },
  mapChild: {
    width: 181,
  },
  map: {
    zIndex: 6,
    marginTop: 20,
  },
  upcomingEventsChild: {
    width: 221,
  },
  upcomingEvents: {
    zIndex: 7,
    marginTop: 20,
  },
  courseMaterial: {
    top: 448,
    zIndex: 8,
  },
  baritems: {
    top: "23.2%",
    left: "2%",
    justifyContent: "center",
    zIndex: 2,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  epback: {
    left: 5,
    top: 36,
    width: 38,
    zIndex: 4,
    height: 33,
    position: "absolute",
  },
  uilsettingIcon: {
    top: "83%",
    left: "73%",
    width: "10%",
    height: "4%",
    zIndex: 5,
    position: "absolute",
    overflow: "hidden",
  },
  logoutIcon: {
    top: "50%",
    left: "20%",
    zIndex: 5,
    position: "absolute",
    overflow: "hidden",
  },
  sidebar: {
    top: "0%",
    left: "0%",
  },
  SideDrawer: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    overflow: "hidden",
  },
});

export default SideDrawer;
