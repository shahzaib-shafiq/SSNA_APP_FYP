import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { Image,Animated,TextInput, FlatList,TouchableWithoutFeedback, Keyboard} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const allModules = [
  "Timetable",
  "Bus Schedule",
  "Announcements",
  "Senior Guidance",
  "Faculty Information",
  "Campus Map",
  "Upcoming Events",
];

const MAINPAGE = ({ route }) => {
  const navigation = useNavigation();
  const { userDetail } = route.params;

  const [searchTerm, setSearchTerm] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([]);

  const filterSuggestions = (text) => {
    const filteredSuggestions = allModules.filter((module) =>
      module.toLowerCase().includes(text.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };
  const handleDismissSuggestions = () => {
    setSuggestions([]); // Clear the suggestions
  };

  const handleSuggestionPress = (selectedSuggestion) => {
    
    // Define a mapping of displayed names to corresponding routes
    const routeMappings = {
      "Upcoming Events": "UpcomingEvents",
      "Bus Schedule": "BUSROUTES",
      "Timetable":"Timetable",
      "Announcements":"Timetable",
      "Senior Guidance":"SeniorGuidanceScreenMain",
      "Faculty Information":"FacultyInfo",
      "Campus Map":"LOCATION",
    };

    // Get the corresponding route from the mapping
    const routeName = routeMappings[selectedSuggestion];

    if (routeName) {
      // If a valid route is found, navigate to it
      navigation.navigate(routeName,{userDetail});
    }
    setSearchTerm("");
    setSuggestions([]);
  };

  //for page animation
  const slideAnimation = new Animated.Value(-300); // Initial position off-screen

  //data validation in log
  console.log('User Detail:', userDetail); // Make sure this prints the correct user details
  console.log('Route:', route);

  React.useEffect(() => {
    // Trigger the slide-in animation when the component mounts
    Animated.timing(slideAnimation, {
      toValue: 0, // Target value for the animation (slide in)
      duration: 300, // Animation duration in milliseconds
      useNativeDriver: false, // Set to true for better performance on native thread
    }).start();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={handleDismissSuggestions}>
      <Animated.View style={[styles.mainPage,{ left: slideAnimation }]}>
        <View style={styles.mainPage}>
          <LinearGradient
            style={[styles.bluebg, styles.bluebgPosition]}
            locations={[1, 1]}
            colors={["#4d7da9", "rgba(77, 142, 180, 0)"]}
          />
          
          <View style={[styles.mainPageItem, styles.pressableLayout]}>

              {/* GREETINGS */}
              <Text style={styles.usernameStyle}>Hi {userDetail.givenName}</Text>

              {/* BG ILLUSTRATION */}
              <Image
                style={[styles.pngtreecartoonSchoolSupplie1, styles.bluebgPosition]}
                contentFit="cover"
                source={require("../assets/pngtreecartoon-school-supplies-stationery-material-4369627-1.png")}
              />

              {/* QUICK ACCESS TEXT */}
              <Text style={styles.quickAccess1}>Quick Access</Text>

             {/* INFO BUTTON */}
            <View style={styles.appInfoButton} >
              <Pressable
                style={[styles.infoButtonIcon, styles.iconLayout1]}
                onPress={() => navigation.navigate("AboutApp", { userDetail })}
              >
                <Image
                  style={[styles.infoButtonIcon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/materialsymbolslighthelpoutline.png")}
                />
              </Pressable>
            </View>

            {/* SEARCH BAR */}
            <View style={styles.searchbar}>
                <TextInput
                style={styles.searchbarChild}
                placeholder=" What are you looking for?"
                onChangeText={(text) => {
                  setSearchTerm(text);
                  filterSuggestions(text);
                }}
                value={searchTerm}
              />
                {suggestions.length > 0 && (
                  <FlatList
                    style={styles.suggestionList}
                    data={suggestions}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                      <Pressable
                        style={styles.suggestionItem}
                        onPress={() => handleSuggestionPress(item)}
                      >
                        <Text style={styles.suggestionText}>{item}</Text>
                      </Pressable>
                    )}
                  />
                )}
              <View style={[styles.searchbarItem, styles.searchbarItemLayout]} />
              <Image
                style={styles.search1Icon1}
                contentFit="cover"
                source={require("../assets/search-11.png")}
              />
            </View>

              {/* PROFILE PHOTO */}
              <Pressable
                style={styles.userprofilePressable}
                onPress={() => navigation.navigate("UserProfile", { userDetail })}
              >
                <Image
                  style={styles.userprofilePhoto}
                  contentFit="cover"
                  source={{ uri: userDetail.photo }}
                />
              </Pressable>

              {/* MENU BUTTON */}
              <Pressable
                style={styles.mingcutemenuFillIcon1}
                onPress={() => navigation.navigate("SideDrawer", { userDetail })}
              >
                <Image
                  style={styles.menuButton}  // Adjusted this line
                  source={require("../assets/mingcutemenufill.png")}
                />
              </Pressable>
              
                                  {/* QUICK ACCESS BUTTONS */}

              {/* TIMETABLE BUTTON */}
              <LinearGradient
                style={[styles.timetableBOX, styles.wrapperLayout]}
                locations={[1, 1]}
                colors={["#4d7da9", "rgba(77, 142, 180, 0)"]}
              >
                <Pressable
                  style={[styles.pressable, styles.pressableLayout]}
                  onPress={() => navigation.navigate("Timetable",{userDetail})}
                >
                 {/* Timetable IMG */}
                  <Image
                    style={styles.timetable_icon}
                    contentFit="cover"
                    source={require("../assets/schedule-4253250-1.png")}
                  />
                    <Text style={[styles.viewTimetable, styles.allTextStyle]}>
                    View Timetable
                  </Text>
                 </Pressable>
              </LinearGradient>

              {/* GUIDANCE BUTTON */}
              <LinearGradient
                style={[styles.guidancePortalBOX, styles.wrapperLayout]}
                locations={[1, 1]}
                colors={["#4d7da9", "rgba(77, 142, 180, 0)"]}
              >
                <Pressable
                  style={[styles.pressable, styles.pressableLayout]}
                  onPress={() => navigation.navigate("SeniorGuidanceScreenMain",{userDetail})}
                >
                  {/* Guidance IMG */}
                  <Image
                    style={styles.guidance_icon}
                    contentFit="cover"
                    source={require("../assets/previewremovebgpreview-1.png")}
                  />
                     <Text style={[styles.guidancePortal, styles.allTextStyle]}>
                      Guidance Portal
                    </Text>
                </Pressable>
              </LinearGradient>

              {/* BUS ROUTE BUTTON */}
              <LinearGradient
                style={[styles.busRoutesBOX, styles.framePosition]}
                locations={[1, 1]}
              colors={["#4d7da9", "rgba(77, 142, 180, 0)"]}
              >
                <Pressable
                  style={[styles.pressable, styles.pressableLayout]}
                  onPress={() => navigation.navigate("BUSROUTES",{userDetail})}
                >
                   {/* BUS IMG */}
                  <Image
                    style={styles.buses_icon}
                    contentFit="cover"
                    source={require("../assets/screenshot-20231116-142906removebgpreview-1.png")}
                  />
                    <Text style={[styles.busRoutes, styles.allTextStyle]}>
                      Bus Routes
                    </Text>

                  </Pressable>
              </LinearGradient>

              {/* EVENTS BUTTON */}
              <LinearGradient
                style={[styles.upcomingEventTxtBOX, styles.framePosition]}
                locations={[1, 1]}
              colors={["#4d7da9", "rgba(77, 142, 180, 0)"]}
              >
                <Pressable
                  style={[styles.pressable, styles.pressableLayout]}
                  onPress={() =>
                    navigation.navigate("UpcomingEvents",{userDetail})
                  }
                >
                   {/* UpcomingEvents IMG */}
                  <Image
                    style={styles.upcomingEvent_icon}
                    contentFit="cover"
                    source={require("../assets/promotion-8629286-1.png")}
                  />
                    <Text style={[styles.upcomingEventTxt, styles.allTextStyle]}>
                    Upcoming Events
                  </Text>         
                </Pressable>
              </LinearGradient>

              {/* FAC INFO BUTTON */}
              <LinearGradient
                style={[styles.facultyInfoBOX, styles.wrapperLayout]}
                locations={[1, 0.5]}
                colors={["#4d7da9", "rgba(77, 142, 180, 1)"]}
              >
                <Pressable
                  style={[styles.pressable, styles.pressableLayout]}
                  onPress={() =>
                    navigation.navigate("FacultyInfo",{userDetail})
                  }
                >
                 {/* FAC-INFO IMG */}
                  <Image
                    style={styles.facInfo_icon}
                    contentFit="cover"
                    source={require("../assets/pngwing-1.png")}
                  />
                   <Text style={[styles.facultyInfo, styles.allTextStyle]}>
                    Faculty Info
                  </Text>
                </Pressable>
              </LinearGradient>

              {/* LOCATION BUTTON */}
              <LinearGradient
                style={[styles.locationBOX, styles.wrapperLayout]}
                locations={[1, 1]}
              colors={["#4d7da9", "rgba(77, 142, 180, 0)"]}
              >
                <Pressable
                  style={[styles.pressable, styles.pressableLayout]}
                  onPress={() => navigation.navigate("LOCATION",{userDetail})}
                >
                 {/* LOCATION IMG */}
                  <Image
                    style={styles.location_icon}
                    contentFit="cover"
                    source={require("../assets/google-maps-logo-2020-1.png")}
                  />
                   <Text style={[styles.location, styles.allTextStyle]}>
                    Location
                  </Text>
                </Pressable>
              </LinearGradient>
   

          </View>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  bluebgPosition: {
    top: "-1.5%",
    position: "absolute",
  },
  iconLayout1: {
    height:"80%",
    width:"80%",
    position: "absolute",
    overflow: "hidden",
  },
  menuButton: {
    top:"0%",
    left:"3%",
    width:"80%",
    height:"80%",
    position: "absolute",
    overflow: "hidden",
  },
  mingcutemenuFillIcon1: {
    top: "24%",
    left: "8%",
    // backgroundColor:"grey",
    height: "8%",
    width: "10%",
  },
  searchbarItemLayout: {
    width: 45,
    position: "absolute",
  },
  pressableLayout: {
    opacity: 1,
    
    borderRadius: 13,
  },
  wrapperLayout: {
    height: 120,
    elevation: 5, // Adjust the elevation value to control the shadow depth
    width: 170,
    borderRadius: 13,
    backgroundColor: 'rgba(0, 0, 0, 5)',
    position: "absolute",
  },
  framePosition: {
    top: 571,
    height: 120,
    width: 170,
    elevation: 5, 
    position: "absolute",
  },
  allTextStyle: {
    color: Color.colorWhite,
    textAlign:'center',
    fontWeight: "600",
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_base,
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
  suggestionList: {
    position: "absolute",
    top: "101%",
    left: "0%",
    height: 84,
    width: 307,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_4xs,
    elevation: 5,
    zIndex: 1,
  },
  suggestionItem: {
    padding: 9,
    borderBottomWidth: 0.4,
    borderBottomColor: Color.colorSteelblue,
  },
  suggestionText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.inter,
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
    width: 413,
    height: 329,
  },
  userprofilePressable: {
    top: "24.5%",
    left: "88%",
    // backgroundColor:"grey",
    width: 45, 
    height: 45, 
    position: "absolute",
  },
  userprofilePhoto: {
      width: 45,
      height: 45,
      borderRadius: 22.5, 
  },
  usernameStyle: {
    top: "45%",
    left: "7.5%",
    fontSize: 27,
    fontWeight: "700",
    fontFamily: FontFamily.poppins,
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  pngtreecartoonSchoolSupplie1: {
    width: 317,
    height: 145,
    left:200,
    opacity: 0.7,
  },
  appInfoButton: {
    top: "60.2%",
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
    top: "60%",
    left: "10%",
    height: 44,
    width: 307,
    position: "absolute",
  },
  quickAccess1: {
    top: "82%",
    left: "6%",
    color: "#111",
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.inter,
    textAlign: "center",
    opacity:0.6,
    position: "absolute",
  },
  mainPageItem: {
    top: -40,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    width: 389,
    height: 456,
    left: -7,
    borderRadius: Border.br_smi,
    borderWidth: 0,
    position: "absolute",
  },
  pressable: {
    height: "100%",
    backgroundColor: "transparent",
    borderRadius: 13,
    width: "100%",
  },
  timetableBOX: {
    top: 426,
    width: 170,
    left: 34,
  },
  guidancePortalBOX: {
    left: 225,
    top: 426,
    width: 170,
    borderRadius: 13,
  },
  busRoutesBOX: {
    left: 34,
    borderRadius: 13,
  },
  upcomingEventTxtBOX: {
    left: 225,
    borderRadius: 13,
    elevation: 5, // Adjust the elevation value to control the shadow depth
  },
  facultyInfoBOX: {
    top: 716,
    borderRadius: 13,
    left: 225,
    elevation: 5, // Adjust the elevation value to control the shadow depth
  },
  locationBOX: {
    top: 715,
    elevation: 5, // Adjust the elevation value to control the shadow depth
    borderRadius: 13,
    left: 34,
    backgroundColor: 'rgba(0, 0, 0, 1)', 
  },
  location: {
    top: "73.5%",
    left: "31%",
  },
  facultyInfo: {
    top: "73.5%",
    left: "25%",
  },
  viewTimetable: {
    top: "73.5%",
    left: "17.5%",
  },
  guidancePortal: {
    top: "74%",
    left: "17%",
  },
  busRoutes: {
    top: "74%",
    left: "26%",
  },
  upcomingEventTxt: {
    top: "74%",
    left: "14%",
  },
  location_icon: {
    top: "20.5%",
    left: "33%",
    borderRadius: Border.br_341xl_5,
    height: 58,
    width:58,
  },
  facInfo_icon: {
    top: "16.5%",
    left: "30%",
    width: 69,
    height: 69,
    position: "absolute",
  },
  buses_icon: {
    top: "20.5%",
    left: "33%",
    width: 54,
    height: 54,
    position: "absolute",
  },
  upcomingEvent_icon: {
    top: "15.5%",
    left: "30%",
    width: 67,
    height: 67,
    position: "absolute",
  },
  timetable_icon: {
    top: "20.5%",
    left: "32.5%",
    height: 61,
    opacity:1,
    width: 61,
    position: "absolute",
  },
  guidance_icon: {
    top: "20.5%",
    left: "33%",
    width: 54,
    height: 54,
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
  infoButtonIcon: {
    top: "10%",
    left: "10%",
  },
  mainPage: {
    flex: 1,
    height: "100%",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    width: "100%",
  },
});

export default MAINPAGE;
