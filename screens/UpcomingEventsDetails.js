import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const UpcomingEventDetails = ({ route }) => {
  const navigation = useNavigation();
  const { events } = route.params;

  return (
    <View style={styles.upcomingeventdetails}>
      <View style={styles.homeScreen}>
        <View style={[styles.screenmain, styles.bluebgPosition]} />
      </View>


      <View style={styles.apps}>
        <View style={[styles.eventmodule, styles.imageboxPosition]}>
          <View style={[styles.imagebox, styles.imageboxPosition]} />
          <Text style={[styles.eventtitle, styles.eventdatePosition]}>
            {events.Title}
          </Text>
          <Text style={[styles.eventdescription, styles.eventdatePosition]}>
            EventDescription
          </Text>
          <Text style={[styles.eventdate, styles.eventdatePosition]}>
            March, 2024
          </Text>
        </View>
      </View>


      <View style={styles.upper}>
        <LinearGradient
          style={[styles.bluebg, styles.bluebgPosition]}
          locations={[0, 0.59]}
          colors={["rgba(77, 142, 169, 0)", "#4d7da9"]}
        />
        <Pressable
          style={styles.menus1}
          onPress={() => navigation.navigate("UpcomingEvents")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/epback.png")}
          />
        </Pressable>

        <Text style={[styles.guidancePortal, styles.textTypo]}>
          Events Details
        </Text>
        <View style={[styles.upperChild, styles.textPosition]} />
        <Text style={[styles.text, styles.textPosition]}>+</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bluebgPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  imageboxPosition: {
    left: 0,
    width: 309,
    position: "absolute",
  },
  eventdatePosition: {
    textAlign: "left",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textTypo: {
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  textPosition: {
    display: "none",
    position: "absolute",
  },
  screenmain: {
    backgroundColor: Color.colorWhite,
    bottom: "0%",
    right: "0%",
    top: "0%",
  },
  homeScreen: {
    top: 14,
    left: -2,
    width: 375,
    position: "absolute",
    height: 812,
  },
  imagebox: {
    top: 30,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorMistyrose,
    height: 195,
  },
  eventtitle: {
    marginTop: -309.5,
    fontSize: FontSize.size_xl,
    lineHeight: 20,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    marginLeft: -154.5,
    textAlign: "left",
    left: "50%",
    top: "50%",
  },
  eventdescription: {
    marginTop: -61.5,
    fontSize: FontSize.size_base,
    lineHeight: 16,
    height: 371,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    marginLeft: -154.5,
    textAlign: "left",
    left: "50%",
    top: "50%",
    width: 309,
  },
  eventdate: {
    marginTop: -305.5,
    marginLeft: 76.5,
    fontSize: FontSize.size_smi,
    lineHeight: 13,
    fontFamily: FontFamily.interRegular,
    color: "#131313",
    width: 78,
    height: 11,
    textAlign: "left",
    left: "50%",
    top: "50%",
  },
  eventmodule: {
    top: 0,
    height: 619,
  },
  apps: {
    top: 123,
    left: 50,
    height: 619,
    width: 309,
    position: "absolute",
  },
  bluebg: {
    backgroundColor: "transparent",
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "90%",
    overflow: "hidden",
    width: "90%",
  },
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
  upperChild: {
    height: "13.39%",
    width: "9.61%",
    top: "79.57%",
    right: "5.34%",
    bottom: "7.04%",
    left: "85.06%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGray_1100,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 6.1,
    elevation: 6.1,
    shadowOpacity: 1,
  },
  text: {
    height: "23.61%",
    width: "6.94%",
    top: "74.68%",
    left: "86.66%",
    fontSize: FontSize.size_21xl,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  upper: {
    top: -163,
    left: -1,
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

export default UpcomingEventDetails;
