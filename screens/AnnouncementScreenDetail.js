import * as React from "react";
import { Image, Linking, Alert, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const AnnouncementScreenDetail = ({ route }) => {

  const navigation = useNavigation(); //for stack navigation
  const { userDetail, events } = route.params; //for user session and data passed

  // const openURL = async (url) => {
  //     const isSupported = await Linking.canOpenURL(url);
  //     if (isSupported) {
  //         await Linking.openURL(url);
  //     } else {
  //         Alert.alert(`Can't open this link`);
  //     }
  //   }


  return (
    <View style={styles.upcomingeventdetails}>

       {/* EVENT DETAILS */}
       <View style={styles.apps}>
        <View style={styles.eventmodule}>
         
          <Text style={styles.eventtitle}>
            {events.Title}
          </Text>
         
          {/* DESCRIPTION */}
          <Text style={styles.eventdescription}>
            {events.description}
          </Text>


          {/* LINK */}
          {/* <View style={styles.buttonContainer}>
                <Button title="Open Url" onPress={() => {
                    Linking.openURL("https://www.google.com")
                }} color="steelblue" />

            </View> */}


          <Text style={styles.eventdate}>
            {events?.AnnouncementDate}
          </Text>

        </View>
      </View>

      {/* HEADER FUNCTIONALITY */}
      <View style={styles.upper}>
        <LinearGradient
          style={[styles.bluebg, styles.bluebgPosition]}
          locations={[0, 0.59]}
          colors={["rgba(77, 142, 169, 0)", "#4d7da9"]}
        />
        <Pressable
          style={styles.menus1}
          onPress={() => navigation.navigate("AnnouncementScreen",{userDetail})}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/epback.png")}
          />
        </Pressable>

        <Text style={[styles.guidancePortal, styles.textTypo]}>
          Announcement Detail
        </Text>
        {/* <View style={[styles.upperChild, styles.textPosition]} /> */}
      </View>


    </View>
  );
};

const styles = StyleSheet.create({

  // container: { flex: 1, justifyContent: "center", alignItems: "center" },
  // buttonContainer: {
  //     margin: 100
  // },

  link: {
    fontSize: FontSize.size_lg,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  

  bluebgPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },

  textTypo: {
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  // textPosition: {
  //   display: "none",
  //   position: "absolute",
  // },
  // screenmain: {
  //   backgroundColor: Color.colorWhite,
  //   bottom: "0%",
  //   right: "0%",
  //   top: "0%",
  // },
  
  // homeScreen: {
  //   top: "1%",
  //   left: "-20%",
  //   width: 375,
  //   position: "absolute",
  //   height: 812,
  // },

  // imagebox: {
  //   top: "7%",
  //   borderRadius: Border.br_mini,
  //   backgroundColor: Color.colorMistyrose,
  //   height: 195,
  //   width: 309,
  //   position: "absolute",
  // },
  eventtitle: {
    marginTop: -290,
    fontSize: FontSize.size_11xl,
    // lineHeight: 20,
    // color: Color.colorDimgray_100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    marginLeft: -154.5,
    textAlign: "left",
    left: "50%",
    top: "50%",
  },
  eventdescription: {
    fontSize: FontSize.size_lg,
    height: 371,
    lineHeight: 25,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: "0%",
    top: "51%",
    // backgroundColor:"grey",
    width: 309,
  },
  eventdate: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interRegular,
    // color: "#131313",
    left: "85%",
    top: "-4%",
    position: "absolute",
  },
  eventmodule: {
    top: 0,
    height: 619,
    // backgroundColor:"grey",
  },
  apps: {
    top: "15%",
    left: "12%",
    // backgroundColor:"grey",
    position: "absolute",
  },
  bluebg: {
    backgroundColor: "transparent",
  },
  // icon: {
  //   maxWidth: "100%",
  //   maxHeight: "100%",
  //   height: "90%",
  //   overflow: "hidden",
  //   width: "90%",
  // },
  menus1: {
    left: "5.59%",
    top: "78.8%",
    right: "84.01%",
    bottom: "7.08%",
    width: "10.39%",
    height: "14.12%",
    position: "absolute",
  },
  guidancePortal: {
    height: "19.04%",
    width: "57.33%",
    top: "79.03%",
    left: "21.86%",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  // upperChild: {
  //   height: "13.39%",
  //   width: "9.61%",
  //   top: "79.57%",
  //   right: "5.34%",
  //   bottom: "7.04%",
  //   left: "85.06%",
  //   borderRadius: Border.br_xs,
  //   backgroundColor: Color.colorGray_1100,
  //   shadowColor: "rgba(0, 0, 0, 0.15)",
  //   shadowOffset: {
  //     width: 0,
  //     height: 4,
  //   },
  //   shadowRadius: 6.1,
  //   elevation: 6.1,
  //   shadowOpacity: 1,
  // },

  // text: {
  //   height: "23.61%",
  //   width: "6.94%",
  //   top: "74.68%",
  //   left: "86.66%",
  //   fontSize: FontSize.size_21xl,
  //   color: Color.colorWhite,
  //   textAlign: "left",
  //   fontFamily: FontFamily.interSemiBold,
  //   fontWeight: "600",
  // },

  upper: {
    bottom: "92%",
    width: 431,
    height: 233,
    position: "absolute",
  },

  upcomingeventdetails: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 812,
    backgroundColor: Color.colorWhite,
  },
});

export default AnnouncementScreenDetail;
