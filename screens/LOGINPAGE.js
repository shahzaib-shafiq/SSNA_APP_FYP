import * as React from "react";
import { Image } from "react-native";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LOGINPAGE = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginPage}>
      <Image
        style={styles.unsplashTorT4qtpqIcon}
        contentFit="cover"
        source={require("../assets/unsplashtor-t4qtpq.png")}
      />
      <View style={styles.loginContainer} />
      <View style={styles.bottomtext}>
        <Image
          style={styles.registered_logo}
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
      <Text style={[styles.signInNow, styles.signInNowFlexBox]}>
        SIGN IN NOW!
      </Text>

      <Pressable
          style={({ pressed }) => [
            styles.rectanglePressable,
            pressed && styles.rectanglePressablePressed, // Add a style for pressed state if desired
          ]}
          onPress={() => navigation.navigate("MAINPAGE")}
        >
          <Text style={styles.signIn}>SIGN IN</Text>
        </Pressable>
      <Text style={[styles.resumeYourJourney, styles.signInNowFlexBox]}>
        RESUME YOUR JOURNEY
      </Text>
      <Image
        style={[styles.ssnaLogoIcon, styles.signInPosition]}
        contentFit="cover"
        source={require("../assets/ssna-logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  studentSupportAnd1Typo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  signInNowFlexBox: {
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  signInPosition: {
    bottom: 20, 
    left: 158,
    position: "absolute",
  },
  loginContainer: {
    top: 141,
    left: 6,
    borderRadius: Border.br_6xl,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 398,
    height: 534,
    opacity: 0.1,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  registered_logo: {
    height: "24.62%",
    width: "3.99%",
    top: "-25%",
    right: "0%",
    bottom: "55.38%",
    left: "96.01%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  studentSupportAnd1: {
    top: -10,
    fontWeight: "600",
    left: 0,
  },
  yourCampusCompanion1: {
    top: 10,
    left: 35,
    fontWeight: "500",
  },
  bottomtext: {
    height: "4.18%",
    width: "55.95%",
    top: "88.84%",
    right: "21.95%",
    bottom: "6.97%",
    left: "22.09%",
    position: "absolute",
  },
  signInNow: {
    top: 275,
    left: 73,
    fontSize: FontSize.size_29xl,
    width: 259,
    height: 58,
    fontFamily: FontFamily.akshar,
    textAlign: "center",
  },
  loginPageItem: {
    top: 442,
  },
  f201234cfdnuedupk: {
    top: 451,
    left: 126,
    color: Color.colorGray_500,
  },
  loginPageInner: {
    top: 549,
  },
  text1: {
    top: 563,
    left: 179,
    color: Color.colorGray_400,
  },
  rectanglePressable: {
    top: 400,
    left: 82,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorDodgerblue,
    width: 261,
    height: 50,
    position: "absolute",
  },
  signIn: {
    top: 4,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.poppins,
    textAlign: "center",
    color: Color.colorWhite,
    fontWeight: "500",
  },
  resumeYourJourney: {
    top: 329,
    left: 70,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.akshar,
    textAlign: "center",
  },
  ssnaLogoIcon: {
    top: 87,
    borderRadius: Border.br_65xl_5,
    width: 120,
    height: 120,
  },
  loginPage: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 932,
    backgroundColor: Color.colorWhite,
  },
});

export default LOGINPAGE;
