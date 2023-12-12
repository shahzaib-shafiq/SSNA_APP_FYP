import * as React from "react";
import { Image } from "react-native";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const LOGINPAGE1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginPage1}>
      <Image
        style={[
          styles.unsplashTorT4qtpqIcon,
          styles.rectanglePressablePosition,
        ]}
        contentFit="cover"
        source={require("../assets/unsplashtor-t4qtpq.png")}
      />
      <View style={styles.loginPage1Child} />
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
      <Text style={[styles.signInNow, styles.signInNowTypo]}>SIGN IN NOW!</Text>
      <View style={[styles.loginPage1Item, styles.loginLayout]} />
      <Text style={[styles.f201234cfdnuedupk, styles.text1Typo]}>
        f201234@cfd.nu.edu.pk
      </Text>
      <View style={[styles.loginPage1Inner, styles.loginLayout]} />
      <Text style={[styles.text1, styles.text1Typo]}>*********</Text>
      <Text style={[styles.email, styles.emailTypo]}>EMAIL</Text>
      <Text style={[styles.password, styles.emailTypo]}>PASSWORD</Text>
      <View style={styles.rectangleView} />
      <Text style={[styles.signIn, styles.signInPosition]}>SIGN IN</Text>
      <Text style={[styles.resumeYourJourney, styles.signInNowTypo]}>
        RESUME YOUR JOURNEY
      </Text>
      <Image
        style={[styles.ssnaLogoIcon, styles.signInPosition]}
        contentFit="cover"
        source={require("../assets/ssna-logo.png")}
      />
      <Image
        style={[
          styles.arcticonshuaweiEmail1,
          styles.arcticonshuaweiEmail1Layout,
        ]}
        contentFit="cover"
        source={require("../assets/arcticonshuaweiemail.png")}
      />
      <Image
        style={[
          styles.mdipasswordOutlineIcon1,
          styles.arcticonshuaweiEmail1Layout,
        ]}
        contentFit="cover"
        source={require("../assets/mdipasswordoutline.png")}
      />
      <Text style={[styles.forgotPassword, styles.forgotPasswordPosition]}>
        Forgot Password?
      </Text>
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressablePosition]}
        onPress={() =>
          navigation.navigate("DrawerRoot", { screen: "MAINPAGE" })
        }
      />
      <View style={[styles.loginPage1Child1, styles.forgotPasswordPosition]} />
      <Text style={[styles.pleaseWait, styles.signInNowTypo]}>
        PLEASE WAIT ...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePressablePosition: {
    width: 430,
    top: 0,
    left: 0,
    position: "absolute",
  },
  studentSupportAnd1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_smi,
    color: Color.colorWhite,
    position: "absolute",
  },
  signInNowTypo: {
    fontFamily: FontFamily.akshar,
    textAlign: "center",
    position: "absolute",
  },
  loginLayout: {
    height: 39,
    width: 322,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_3xs,
    left: 54,
    position: "absolute",
  },
  text1Typo: {
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.akshar,
    position: "absolute",
  },
  emailTypo: {
    fontFamily: FontFamily.poppins,
    textAlign: "center",
    color: Color.colorWhite,
  },
  signInPosition: {
    left: 158,
    position: "absolute",
  },
  arcticonshuaweiEmail1Layout: {
    height: 24,
    width: 24,
    left: 65,
    position: "absolute",
    overflow: "hidden",
  },
  forgotPasswordPosition: {
    left: "50%",
    position: "absolute",
  },
  unsplashTorT4qtpqIcon: {
    height: 932,
  },
  loginPage1Child: {
    top: 141,
    left: 14,
    borderRadius: Border.br_6xl,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 398,
    height: 634,
    opacity: 0.1,
    position: "absolute",
    backgroundColor: Color.colorWhite,
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
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_smi,
  },
  yourCampusCompanion1: {
    top: 23,
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
    left: 83,
    fontSize: FontSize.size_29xl,
    width: 259,
    height: 58,
    textAlign: "center",
    color: Color.colorWhite,
  },
  loginPage1Item: {
    top: 442,
  },
  f201234cfdnuedupk: {
    top: 451,
    left: 126,
    color: Color.colorGray_500,
  },
  loginPage1Inner: {
    top: 549,
  },
  text1: {
    top: 563,
    left: 179,
    color: Color.colorGray_400,
  },
  email: {
    top: 418,
    fontSize: FontSize.size_base,
    left: 61,
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  password: {
    top: 525,
    fontSize: FontSize.size_base,
    left: 61,
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  rectangleView: {
    top: 672,
    left: 82,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorMediumspringgreen,
    width: 261,
    height: 50,
    position: "absolute",
  },
  signIn: {
    top: 675,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.poppins,
    textAlign: "center",
    color: Color.colorWhite,
    fontWeight: "500",
  },
  resumeYourJourney: {
    top: 329,
    left: 111,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    color: Color.colorWhite,
  },
  ssnaLogoIcon: {
    top: 87,
    borderRadius: Border.br_65xl_5,
    width: 110,
    height: 108,
  },
  arcticonshuaweiEmail1: {
    top: 450,
  },
  mdipasswordOutlineIcon1: {
    top: 557,
  },
  forgotPassword: {
    marginLeft: 20,
    top: 598,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.calibri,
    width: 171,
    height: 20,
    textAlign: "center",
    color: Color.colorWhite,
  },
  rectanglePressable: {
    backgroundColor: Color.colorGainsboro_600,
    height: 930,
  },
  loginPage1Child1: {
    marginTop: -219,
    marginLeft: -196,
    top: "50%",
    borderRadius: Border.br_27xl,
    backgroundColor: Color.colorGainsboro_200,
    width: 392,
    height: 438,
  },
  pleaseWait: {
    top: 444,
    left: 104,
    fontSize: FontSize.size_21xl,
    color: Color.colorBlack,
    textAlign: "center",
  },
  loginPage1: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 932,
    backgroundColor: Color.colorWhite,
  },
});

export default LOGINPAGE1;
