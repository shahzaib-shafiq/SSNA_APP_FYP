import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const HOMESCREEN = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeScreen}>
      <Image
        style={styles.unsplashTorT4qtpqIcon}
        contentFit="cover"
        source={require("../assets/unsplashtor-t4qtpq.png")}
      />
      <View style={styles.homeScreenChild} />
      <Text style={styles.letsGetStarted}>{`LETS GET
STARTED`}</Text>
      <View style={styles.title}>
        <Text style={styles.welcome}>WELCOME</Text>
      </View>
      <Pressable
        style={[styles.loginButton, styles.loginLayout]}
        onPress={() => navigation.navigate("LOGINPAGE")}
      >
        <View style={[styles.loginButtonChild, styles.buttonChildShadowBox]} />
        <Text style={[styles.signInNow, styles.orLayout]}>SIGN IN NOW!</Text>
      </Pressable>
      <Pressable
        style={[styles.registerButton, styles.registerLayout]}
        onPress={() => navigation.navigate("REGISTRARTION")}
      >
        <View style={[styles.registerButtonChild, styles.registerLayout]} />
        <Text style={[styles.registerNow, styles.nowTypo]}>REGISTER NOW!</Text>
      </Pressable>
      <View style={[styles.orSection, styles.orLayout]}>
        <View style={[styles.orSectionChild, styles.sectionLayout]} />
        <View style={[styles.orSectionItem, styles.sectionLayout]} />
        <Text style={[styles.or, styles.orLayout]}>OR</Text>
      </View>
      <Image
        style={styles.ssnaLogoIcon}
        contentFit="cover"
        source={require("../assets/ssna-logo.png")}
      />
      <Text style={[styles.alreadyHaveAn1, styles.createANew1Typo]}>
        Already have an account.
      </Text>
      <Text style={[styles.createANew1, styles.createANew1Typo]}>
        Create a new account.
      </Text>
      <View style={styles.bottomtext}>
        <Image
          style={styles.vectorIcon1}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Text
          style={[styles.studentSupportAnd1, styles.studentSupportAnd1Typo]}
        >
          Student Support and Navigation App
        </Text>
        <Text
          style={[styles.yourCampusCompanion1, styles.studentSupportAnd1Typo]}
        >
          Your Campus Companion
        </Text>
      </View>
      <Image
        style={styles.cfdBuildingDrawingV21}
        contentFit="cover"
        source={require("../assets/cfd-building-drawing-v2-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginLayout: {
    height: 47,
    width: 296,
    left: "50%",
    position: "absolute",
  },
  buttonChildShadowBox: {
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    top: 0,
  },
  orLayout: {
    height: 35,
    position: "absolute",
  },
  registerLayout: {
    height: 51,
    width: 296,
    position: "absolute",
  },
  nowTypo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppins,
    textAlign: "center",
    color: Color.colorWhite,
  },
  sectionLayout: {
    height: 1,
    width: 146,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  createANew1Typo: {
    fontFamily: FontFamily.calibri,
    fontSize: FontSize.size_sm,
    left: "50%",
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  studentSupportAnd1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_smi,
    color: Color.colorWhite,
    position: "absolute",
  },
  unsplashTorT4qtpqIcon: {
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
    height: 932,
  },
  homeScreenChild: {
    top: 300,
    left: 16,
    borderRadius: Border.br_smi,
    width: 398,
    height: 513,
    opacity: 0.1,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  letsGetStarted: {
    top: 387,
    left: 131,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.exo,
    width: 166,
    height: 101,
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  welcome: {
    marginLeft: -104.5,
    fontSize: 36,
    fontFamily: FontFamily.poppins,
    height: 63,
    width: 209,
    left: "50%",
    textAlign: "center",
    color: Color.colorWhite,
    top: 0,
    position: "absolute",
  },
  title: {
    marginLeft: -105,
    top: 97,
    height: 63,
    width: 209,
    left: "50%",
    position: "absolute",
  },
  loginButtonChild: {
    marginLeft: -148.1,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderColor: "#4b4b4b",
    height: 47,
    width: 296,
    left: "50%",
    position: "absolute",
  },
  signInNow: {
    top: 10,
    left: 66,
    width: 162,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppins,
    textAlign: "center",
    color: Color.colorWhite,
  },
  loginButton: {
    marginLeft: -147,
    top: 529,
  },
  registerButtonChild: {
    backgroundColor: "rgba(167, 0, 0, 0.4)",
    borderColor: "#000",
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
  },
  registerNow: {
    top: 11,
    left: 55,
    width: 185,
    height: 31,
    fontWeight: "600",
    position: "absolute",
  },
  registerButton: {
    top: 694,
    left: 67,
  },
  orSectionChild: {
    top: 18,
    left: 0,
  },
  orSectionItem: {
    top: 16,
    left: 209,
  },
  or: {
    left: 161,
    width: 33,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppins,
    textAlign: "center",
    color: Color.colorWhite,
    top: 0,
  },
  orSection: {
    top: 631,
    left: 37,
    width: 355,
  },
  ssnaLogoIcon: {
    top: 246,
    left: 160,
    borderRadius: Border.br_65xl_5,
    width: 110,
    height: 108,
    position: "absolute",
  },
  alreadyHaveAn1: {
    marginLeft: -86,
    top: 589,
    width: 171,
    height: 20,
  },
  createANew1: {
    marginLeft: -75,
    top: 753,
    width: 151,
    height: 19,
  },
  vectorIcon1: {
    height: "24.62%",
    width: "3.99%",
    top: "0%",
    right: "0%",
    bottom: "75.38%",
    left: "96.01%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  studentSupportAnd1: {
    top: 7,
    fontWeight: "600",
    left: 0,
  },
  yourCampusCompanion1: {
    top: 23,
    left: 35,
    fontWeight: "500",
  },
  bottomtext: {
    height: "4.18%",
    width: "55.95%",
    top: "91.85%",
    right: "22.19%",
    bottom: "3.97%",
    left: "21.86%",
    position: "absolute",
  },
  cfdBuildingDrawingV21: {
    marginLeft: -200,
    top: 147,
    width: 400,
    height: 95,
    left: "50%",
    position: "absolute",
  },
  homeScreen: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 932,
    backgroundColor: Color.colorWhite,
  },
});

export default HOMESCREEN;
