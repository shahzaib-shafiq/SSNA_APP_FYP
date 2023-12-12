import * as React from "react";
import { Image } from "react-native";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const REGISTRARTION1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.registrartion1}>
      <Image
        style={[
          styles.unsplashTorT4qtpqIcon,
          styles.unsplashTorT4qtpqIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/unsplashtor-t4qtpq.png")}
      />
      <View style={styles.registrartion1Child} />
      <View style={styles.bottomtext}>
        <Image
          style={[styles.vectorIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Text
          style={[styles.studentSupportAnd1, styles.studentSupportAnd1Typo]}
        >
          Student Support and Navigation App
        </Text>
        <Text style={[styles.yourCampusCompanion1, styles.registerNowTypo]}>
          Your Campus Companion
        </Text>
      </View>
      <Text style={[styles.signUpNow, styles.signUpNowTypo]}>SIGN UP NOW!</Text>
      <View
        style={[styles.registrartion1Item, styles.registrartion1ChildLayout3]}
      />
      <View style={[styles.registrartion1Inner, styles.registrartion1Layout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View
        style={[styles.registrartion1Child1, styles.registrartion1ChildLayout2]}
      />
      <View
        style={[styles.registrartion1Child2, styles.registrartion1ChildLayout1]}
      />
      <View
        style={[styles.registrartion1Child3, styles.registrartion1ChildLayout1]}
      />
      <View
        style={[styles.registrartion1Child4, styles.registrartion1ChildLayout2]}
      />
      <View
        style={[styles.registrartion1Child5, styles.registrartion1ChildLayout]}
      />
      <View
        style={[styles.registrartion1Child6, styles.registrartion1ChildLayout3]}
      />
      <View
        style={[styles.registrartion1Child7, styles.registrartion1ChildLayout]}
      />
      <View
        style={[styles.registrartion1Child8, styles.registrartion1Layout]}
      />
      <View style={[styles.registrartion1Child9, styles.rectangleViewLayout]} />
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
        style={[
          styles.registrartion1Child10,
          styles.registrartion1ChildLayout3,
        ]}
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
      <View style={styles.registrartion1Child11} />
      <Text style={[styles.registerNow, styles.okayTypo1]}>REGISTER NOW!</Text>
      <Text style={[styles.startYourJourney, styles.okayTypo]}>
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
      <View
        style={[
          styles.registrartion1Child12,
          styles.registrartion1ChildPosition,
        ]}
      />
      <View
        style={[
          styles.registrartion1Child13,
          styles.registrartion1ChildPosition,
        ]}
      />
      <Text
        style={[styles.youCanGet1, styles.okayTypo]}
      >{`You can get your email and password from the admin office of your campus. 
OR
Wait for verification.`}</Text>
      <Text style={[styles.pleaseWait, styles.signUpNowTypo]}>
        PLEASE WAIT ...
      </Text>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("LOGINPAGE")}
      />
      <Text style={[styles.okay, styles.okayTypo]}>OKAY!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  unsplashTorT4qtpqIconLayout: {
    width: 430,
    marginLeft: -215,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  studentSupportAnd1Typo: {
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inter,
  },
  registerNowTypo: {
    fontWeight: "500",
    position: "absolute",
  },
  signUpNowTypo: {
    fontFamily: FontFamily.akshar,
    textAlign: "center",
  },
  registrartion1ChildLayout3: {
    height: 35,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  registrartion1Layout: {
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
  registrartion1ChildLayout2: {
    top: 465,
    height: 35,
    width: 180,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  registrartion1ChildLayout1: {
    top: 521,
    height: 35,
    width: 180,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  registrartion1ChildLayout: {
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
  okayTypo1: {
    fontFamily: FontFamily.poppins,
    color: Color.colorWhite,
  },
  okayTypo: {
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  registrartion1ChildPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  unsplashTorT4qtpqIcon: {
    top: 0,
    left: "50%",
    position: "absolute",
    height: 932,
  },
  registrartion1Child: {
    top: 103,
    left: 14,
    borderRadius: Border.br_6xl,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 398,
    height: 634,
    opacity: 0.1,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
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
    left: 0,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  yourCampusCompanion1: {
    top: 23,
    left: 35,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_smi,
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
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  registrartion1Item: {
    width: 180,
    top: 297,
    height: 35,
    backgroundColor: Color.colorGainsboro_100,
    left: 24,
  },
  registrartion1Inner: {
    left: 24,
  },
  rectangleView: {
    left: 24,
  },
  registrartion1Child1: {
    left: 24,
  },
  registrartion1Child2: {
    left: 24,
  },
  registrartion1Child3: {
    left: 216,
  },
  registrartion1Child4: {
    left: 216,
  },
  registrartion1Child5: {
    left: 24,
  },
  registrartion1Child6: {
    top: 636,
    width: 372,
    height: 35,
    backgroundColor: Color.colorGainsboro_100,
    left: 24,
  },
  registrartion1Child7: {
    left: 216,
  },
  registrartion1Child8: {
    left: 216,
  },
  registrartion1Child9: {
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
  registrartion1Child10: {
    left: 216,
    width: 180,
    top: 297,
    height: 35,
    backgroundColor: Color.colorGainsboro_100,
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
  registrartion1Child11: {
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
    textAlign: "center",
    fontWeight: "500",
    position: "absolute",
  },
  startYourJourney: {
    top: 227,
    left: 118,
    textAlign: "center",
    fontFamily: FontFamily.akshar,
    color: Color.colorWhite,
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
  registrartion1Child12: {
    marginTop: -465,
    backgroundColor: "rgba(217, 217, 217, 0.6)",
    height: 930,
    width: 430,
    marginLeft: -215,
  },
  registrartion1Child13: {
    marginTop: -236,
    marginLeft: -196,
    borderRadius: Border.br_27xl,
    backgroundColor: Color.colorGainsboro_200,
    width: 392,
    height: 460,
  },
  youCanGet1: {
    top: 379,
    left: 55,
    color: Color.colorGray_500,
    width: 320,
    height: 100,
    textAlign: "center",
    fontFamily: FontFamily.inter,
  },
  pleaseWait: {
    top: 286,
    left: 104,
    fontSize: FontSize.size_21xl,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  rectanglePressable: {
    top: 580,
    left: 130,
    backgroundColor: "#00d1ff",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    width: 170,
    height: 56,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  okay: {
    top: 590,
    left: 176,
    fontWeight: "700",
    fontFamily: FontFamily.poppins,
    color: Color.colorWhite,
    textAlign: "left",
  },
  registrartion1: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 932,
    backgroundColor: Color.colorWhite,
  },
});

export default REGISTRARTION1;
