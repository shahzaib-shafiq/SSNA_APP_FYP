import * as React from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "react-native-linear-gradient";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { StyleSheet, Pressable, Text, View } from "react-native";

const AboutApp = ({ route }) => {

  const navigation = useNavigation();   //for stack navigation
  const { userDetail } = route.params;  //user session

  return (
    <View style={[styles.AboutApp, styles.iconLayout]}>
      
      {/* HEADER */}
      <LinearGradient
        style={styles.upper}
        locations={[0, 0]}
        colors={["rgba(77, 142, 169, 0)", "#4d7da9"]}
      >
        <Pressable
          style={styles.epback}
          onPress={() =>
            navigation.navigate("MAINPAGE",{userDetail})
          }
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/epback.png")}
          />
        </Pressable>
        <Text style={styles.AboutAppTXT}>About the app</Text>
      </LinearGradient>

        {/* SSNA LOGO */}
        <Image
            style={styles.ssnaLogoStyle}
            contentFit="cover"
            source={require("../assets/ssna-logo.png")}
            />

        {/* App Name */}
        <Text style={styles.appNameStyle}>
            Student Support And Navigation App
        </Text>

        {/* OBJECTIVE  */}
        <Text style={styles.objectiveTitle}>
            Objective
        </Text>
        <Text style={styles.paraStyleObjective}>
        Our comprehensive university mobile app project encompasses a wide range of features and functionalities, all designed to empower students with the tools they need to succeed in their academic pursuits and thrive in the campus environment.
        </Text>

         {/* Developers */}
         <Text style={styles.developerTitle}>
            Developers
        </Text>
        <Text style={styles.paraStyleDeveloper}>
            Ashar Zafar [20F-0240] {"\n"}
            Shahzaib Shafique [20F-0317] {"\n"}
            Ehsan Akhtar [20F-0312]
        </Text>


   
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  paraStyleObjective: {
    textAlign: "left",
    top: "50%",
    left: "8%",
    width:"85%",
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "300",
    position: "absolute",
    fontSize: FontSize.size_xl,
  },
  paraStyleDeveloper: {
    textAlign: "left",
    lineHeight:26,
    top: "77%",
    left: "8%",
    width:"85%",
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "300",
    position: "absolute",
    fontSize: FontSize.size_xl,
  },
  icon: {
    height: "100%",
    top:"8%",
    left:"-80%",
  },
  epback: {
    left: "13%",
    top: "30%",
    width: 38,
    height: 33,
    position: "absolute",
  },
  AboutApp: {
    top: "33%",
    left: "21%",
    color: Color.colorWhite,
    width: 154,
    height: 58,
    justifyContent: "center",
    display: "flex",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  upper: {
    left: "-0%",
    width: "100%",
    height: "8%",
    backgroundColor: "transparent",
    top: "-1%",
    position: "absolute",
  },
  objectiveTitle: {
    top: "45%",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    left: "8%",
    width:"90%",
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "500",
    position: "absolute",
  },
  developerTitle: {
    top: "72%",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    left: "8%",
    width:"90%",
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "500",
    position: "absolute",
  },
  AboutApp: {
    // backgroundColor: Color.colorWhite,
    flex: 1,
    fontWeight: "600",
    color: Color.colorWhite,
    fontSize:25,
    height: "100%",
  },
  ssnaLogoStyle: {
    top: "13%",
    borderColor:"black",
    left: "32.5%",
    width: "31.5%",
    height: "16%",
    position: "absolute",
  },
  appNameStyle: {
    left: "6%",
    top: "30%",
    fontSize: 25,
    width: 348,
    height: "29%",
    color: Color.colorDimgray_200,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  AboutAppTXT: {
    // backgroundColor: Color.colorWhite,
    flex: 1,
    top:"30%",
    left:"20%",
    fontWeight: "600",
    color: Color.colorWhite,
    fontSize:25,
    height: "100%",
  },
});

export default AboutApp;
