import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const REGISTRARTION = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.registrartion}>
      <Image
        style={styles.pheyeIcon}
        contentFit="cover"
        source={require("../assets/pheye.png")}
      />
      <Image
        style={styles.simpleLineIconscalender}
        contentFit="cover"
        source={require("../assets/simplelineiconscalender.png")}
      />
      <Image
        style={styles.unsplashTorT4qtpqIcon}
        contentFit="cover"
        source={require("../assets/unsplashtor-t4qtpq.png")}
      />
      <View style={styles.registrartionChild} />
      <View style={styles.bottomtext}>
        <Image
          style={[styles.vectorIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={styles.studentSupportAnd1}>
          Student Support and Navigation App
        </Text>
        <Text style={styles.yourCampusCompanion1}>Your Campus Companion</Text>
      </View>
      <Text style={[styles.signUpNow, styles.signUpNowTypo]}>SIGN UP NOW!</Text>
      <View
        style={[styles.registrartionItem, styles.registrartionChildLayout3]}
      />
      <View style={[styles.registrartionInner, styles.registrartionLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View
        style={[styles.registrartionChild1, styles.registrartionChildLayout2]}
      />
      <View
        style={[styles.registrartionChild2, styles.registrartionChildLayout1]}
      />
      <View
        style={[styles.registrartionChild3, styles.registrartionChildLayout1]}
      />
      <View
        style={[styles.registrartionChild4, styles.registrartionChildLayout2]}
      />
      <View
        style={[styles.registrartionChild5, styles.registrartionChildLayout]}
      />
      <View
        style={[styles.registrartionChild6, styles.registrartionChildLayout3]}
      />
      <View
        style={[styles.registrartionChild7, styles.registrartionChildLayout]}
      />
      <View style={[styles.registrartionChild8, styles.registrartionLayout]} />
      <View style={[styles.registrartionChild9, styles.rectangleViewLayout]} />
      <Image
        style={[
          styles.vuesaxlineararrowDownIcon4,
          styles.vuesaxlineararrowIconPosition,
        ]}
        contentFit="cover"
        source={require("../assets/vuesaxlineararrowdown.png")}
      />
      <Image
        style={[
          styles.vuesaxlineararrowDownIcon5,
          styles.vuesaxlineararrowIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/vuesaxlineararrowdown.png")}
      />
      <Image
        style={[
          styles.vuesaxlineararrowDownIcon6,
          styles.vuesaxlineararrowIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/vuesaxlineararrowdown.png")}
      />
      <Image
        style={[styles.vuesaxlineararrowDownIcon7, styles.iconoireye1Layout]}
        contentFit="cover"
        source={require("../assets/vuesaxlineararrowdown1.png")}
      />
      <View
        style={[styles.registrartionChild10, styles.registrartionChildLayout3]}
      />
      <Text style={[styles.firstName, styles.nameTypo]}>FIRST NAME</Text>
      <Text style={[styles.rollNo, styles.rollNoPosition]}>ROLL NO.</Text>
      <Text style={[styles.degree, styles.deptPosition]}>DEGREE</Text>
      <Text style={[styles.semester, styles.sectionPosition]}>SEMESTER</Text>
      <Text style={[styles.gender, styles.nameTypo]}>GENDER</Text>
      <Text style={[styles.dob, styles.nameTypo]}>DOB</Text>
      <Text style={[styles.section, styles.sectionPosition]}>SECTION</Text>
      <Text style={[styles.phoneNo, styles.nameTypo]}>PHONE NO.</Text>
      <Text style={[styles.password, styles.passwordPosition]}>PASSWORD</Text>
      <Text style={[styles.uploadProfilePic, styles.nameTypo]}>
        UPLOAD PROFILE PIC
      </Text>
      <Image
        style={[styles.vuesaxlineargalleryIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vuesaxlineargallery.png")}
      />
      <Text style={[styles.emailId, styles.rollNoPosition]}>EMAIL ID</Text>
      <Text style={[styles.dept, styles.deptPosition]}>DEPT</Text>
      <Text style={[styles.lastName, styles.nameTypo]}>LAST NAME</Text>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("REGISTRARTION1")}
      />
      <Text style={styles.registerNow}>REGISTER NOW!</Text>
      <Text style={[styles.startYourJourney, styles.signUpNowTypo]}>
        START YOUR JOURNEY
      </Text>
      <Image
        style={styles.ssnaLogoIcon}
        contentFit="cover"
        source={require("../assets/ssna-logo.png")}
      />
      <Image
        style={[styles.iconoireye1, styles.passwordPosition]}
        contentFit="cover"
        source={require("../assets/iconoireye.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  signUpNowTypo: {
    textAlign: "center",
    fontFamily: FontFamily.akshar,
    color: Color.colorWhite,
    position: "absolute",
  },
  registrartionChildLayout3: {
    height: 35,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  registrartionLayout: {
    top: 353,
    height: 35,
    width: 180,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  rectangleViewLayout: {
    top: 409,
    height: 35,
    width: 180,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  registrartionChildLayout2: {
    top: 465,
    height: 35,
    width: 180,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  registrartionChildLayout1: {
    top: 521,
    height: 35,
    width: 180,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  registrartionChildLayout: {
    top: 577,
    height: 35,
    width: 180,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  vuesaxlineararrowIconPosition: {
    bottom: "53%",
    top: "44.42%",
  },
  vuesaxlineararrowIconLayout: {
    left: "40.47%",
    right: "53.95%",
    width: "5.58%",
    height: "2.58%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconoireye1Layout: {
    height: 24,
    width: 24,
  },
  nameTypo: {
    color: Color.colorDimgray_300,
    fontFamily: FontFamily.poppins,
    textAlign: "center",
  },
  rollNoPosition: {
    top: 358,
    color: Color.colorDimgray_300,
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_base,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  deptPosition: {
    top: 414,
    color: Color.colorDimgray_300,
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_base,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  sectionPosition: {
    top: 470,
    color: Color.colorDimgray_300,
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_base,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  passwordPosition: {
    top: 642,
    position: "absolute",
  },
  pheyeIcon: {
    top: 338,
    left: 87,
    width: 256,
    height: 256,
    position: "absolute",
    overflow: "hidden",
  },
  simpleLineIconscalender: {
    width: 1024,
    height: 1024,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  unsplashTorT4qtpqIcon: {
    marginLeft: -215,
    width: 430,
    left: "50%",
    top: 0,
    position: "absolute",
    height: 932,
  },
  registrartionChild: {
    top: 103,
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
  },
  studentSupportAnd1: {
    top: 7,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_smi,
    left: 0,
    position: "absolute",
  },
  yourCampusCompanion1: {
    top: 23,
    left: 35,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_smi,
    position: "absolute",
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
  signUpNow: {
    top: 173,
    left: 83,
    fontSize: FontSize.size_29xl,
    width: 259,
    height: 58,
  },
  registrartionItem: {
    width: 180,
    top: 297,
    height: 35,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_3xs,
    left: 24,
  },
  registrartionInner: {
    left: 24,
  },
  rectangleView: {
    left: 24,
  },
  registrartionChild1: {
    left: 24,
  },
  registrartionChild2: {
    left: 24,
  },
  registrartionChild3: {
    left: 216,
  },
  registrartionChild4: {
    left: 216,
  },
  registrartionChild5: {
    left: 24,
  },
  registrartionChild6: {
    top: 636,
    width: 372,
    height: 35,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_3xs,
    left: 24,
  },
  registrartionChild7: {
    left: 216,
  },
  registrartionChild8: {
    left: 216,
  },
  registrartionChild9: {
    left: 216,
  },
  vuesaxlineararrowDownIcon4: {
    right: "9.3%",
    left: "85.12%",
    width: "5.58%",
    height: "2.58%",
    bottom: "53%",
    top: "44.42%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vuesaxlineararrowDownIcon5: {
    bottom: "53%",
    top: "44.42%",
  },
  vuesaxlineararrowDownIcon6: {
    top: "50.43%",
    bottom: "47%",
  },
  vuesaxlineararrowDownIcon7: {
    left: 366,
    top: 527,
    position: "absolute",
  },
  registrartionChild10: {
    left: 216,
    width: 180,
    top: 297,
    height: 35,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_3xs,
  },
  firstName: {
    marginLeft: -145,
    top: 304,
    fontSize: FontSize.size_base,
    color: Color.colorDimgray_300,
    left: "50%",
    position: "absolute",
  },
  rollNo: {
    marginLeft: -135,
  },
  degree: {
    marginLeft: -130,
  },
  semester: {
    marginLeft: -139,
  },
  gender: {
    marginLeft: -132,
    fontSize: FontSize.size_base,
    color: Color.colorDimgray_300,
    top: 527,
    position: "absolute",
    left: "50%",
  },
  dob: {
    marginLeft: 70,
    top: 526,
    fontSize: FontSize.size_base,
    color: Color.colorDimgray_300,
    left: "50%",
    position: "absolute",
  },
  section: {
    marginLeft: 54,
  },
  phoneNo: {
    marginLeft: -143,
    top: 583,
    fontSize: FontSize.size_base,
    color: Color.colorDimgray_300,
    left: "50%",
    position: "absolute",
  },
  password: {
    marginLeft: -49,
    color: Color.colorDimgray_300,
    fontFamily: FontFamily.poppins,
    textAlign: "center",
    fontSize: FontSize.size_base,
    left: "50%",
  },
  uploadProfilePic: {
    marginLeft: 9,
    top: 585,
    fontSize: FontSize.size_sm,
    left: "50%",
    position: "absolute",
  },
  vuesaxlineargalleryIcon1: {
    height: "2.15%",
    width: "4.65%",
    top: "62.77%",
    right: "9.77%",
    bottom: "35.09%",
    left: "85.58%",
  },
  emailId: {
    marginLeft: 59,
  },
  dept: {
    marginLeft: 68,
  },
  lastName: {
    top: 302,
    left: 264,
    fontSize: FontSize.size_base,
    color: Color.colorDimgray_300,
    position: "absolute",
  },
  rectanglePressable: {
    marginLeft: -154,
    top: 712,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorSeagreen,
    width: 309,
    height: 50,
    left: "50%",
    position: "absolute",
  },
  registerNow: {
    top: 715,
    left: 101,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.poppins,
    textAlign: "center",
    fontWeight: "500",
    color: Color.colorWhite,
    position: "absolute",
  },
  startYourJourney: {
    top: 227,
    left: 118,
    fontSize: FontSize.size_5xl,
  },
  ssnaLogoIcon: {
    top: 49,
    left: 158,
    borderRadius: Border.br_65xl_5,
    width: 110,
    height: 108,
    position: "absolute",
  },
  iconoireye1: {
    left: 360,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  registrartion: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 932,
    backgroundColor: Color.colorWhite,
  },
});

export default REGISTRARTION;
