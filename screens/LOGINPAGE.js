import * as React from "react";
import { Image , Animated,Dimensions} from "react-native";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

import Toast from 'react-native-toast-message';
const { width, height } = Dimensions.get("window");
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';



// Initialize GoogleSignin
GoogleSignin.configure({
  webClientId: '879576680646-imadre0ps3b4ot8a1gi4kfgmnqjjekec.apps.googleusercontent.com', // Replace with your Web Client ID
});

const LOGINPAGE = ({ route }) => {

  // const { userDetail } = route.params;

  const navigation = useNavigation();
  const fadeInAnim = React.useRef(new Animated.Value(0)).current;

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
  
      // Clear previous sign-in credentials
      await GoogleSignin.signOut();
  
      const userInfo = await GoogleSignin.signIn();
  
      if (userInfo.user.email.endsWith("@cfd.nu.edu.pk")) {
        // User email is valid, proceed to navigation
        console.log(userInfo.user);
  
        // Extract relevant user information
        const userDetail = {
          givenName: userInfo.user.givenName,
          familyName: userInfo.user.familyName,
          email: userInfo.user.email,
          photo: userInfo.user.photo,
          AuthorId:userInfo.user.id,
        };
  
        // Navigate to MAINPAGE with userDetail as a parameter
        navigation.navigate("MAINPAGE", { userDetail: userInfo.user });
      } else {
        // Display an error message or handle the invalid email case
        console.log('Invalid email domain. Please use an "@nu.edu.pk" email address.');
        // alert('Invalid email domain. Please use an "@nu.edu.pk" email address.');
        <Toast ref={(ref) => Toast.setRef(ref)} />
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Invalid email domain',
          text2: 'Please use an "@cfd.nu.edu.pk" email address.',
          visibilityTime: 3000, // 3 seconds
        });
      }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // User cancelled the sign-in
        console.log('Google Sign-In cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // Sign-in is in progress already
        console.log('Google Sign-In in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // Play services are not available or outdated
        console.log('Play services not available');
      } else if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // User needs to sign in again
        console.log('SIGN_IN_REQUIRED, asking for Google account');
        await GoogleSignin.signOut(); // Ensure user is signed out
        await GoogleSignin.signIn();
      } else {
        // Some other error occurred
        console.error('Error during Google Sign-In', error);
      }
    }
  };

  React.useEffect(() => {
    Animated.timing(fadeInAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeInAnim]);


  return (
    <Animated.View style={{ ...styles.loginPage, opacity: fadeInAnim }}>
      <View style={styles.loginPageContent}>
        <Image
          style={styles.unsplashTorT4qtpqIcon}
          contentFit="cover"
          source={require("../assets/unsplashtor-t4qtpq.png")}
        />
        <View style={styles.loginContainer} />
        

        {/* BOTTOM TEXT */}
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

        {/* SIGNIN BUTTON */}
        <Pressable
          style={({ pressed }) => [
            styles.rectanglePressable,
            pressed && styles.rectanglePressablePressed, // Add a style for pressed state if desired
          ]}
          onPress={handleGoogleSignIn}
          // onPress={() => navigation.navigate("MAINPAGE")}
        >
          <Text style={styles.signIn}>SIGN IN</Text>
        </Pressable>

        <Text style={[styles.resumeYourJourney, styles.signInNowFlexBox]}>
          RESUME YOUR JOURNEY
        </Text>
        <Image
          style={styles.ssnaLogoIcon}
          contentFit="cover"
          source={require("../assets/ssna-logo.png")}
        />
      </View>
    </Animated.View>
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
    left: width * 0.5 - 60, // Centered horizontally
    position: "absolute",
  },
  loginContainer: {
    top: height * 0.15,
    left: "5%",
    borderRadius: Border.br_6xl,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: "90%",
    height: height * 0.6,
    opacity: 0.1,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  registered_logo: {
    height: "24.62%",
    width: "3.99%",
    top: "-35%",
    left: "100.01%",
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
    left: "15%",
    fontWeight: "500",
  },
  bottomtext: {
    height: "4.18%",
    width: "55.95%",
    top: "88.84%",
    left: "22.09%",
    position: "absolute",
  },
  signInNow: {
    top: height * 0.3,
    left: "50%",
    transform: [{ translateX: -width * 0.35 }],
    fontSize: FontSize.size_29xl,
    width: "70%",
    height: 58,
    fontFamily: FontFamily.akshar,
    textAlign: "center",
  },
  rectanglePressable: {
    top: height * 0.46,
    left: "50%",
    transform: [{ translateX: -width * 0.33 }],
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorDodgerblue,
    width: "66%",
    height: 50,
    position: "absolute",
  },
  signIn: {
    top: "10%",
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.poppins,
    textAlign: "center",
    color: Color.colorWhite,
    fontWeight: "500",
    width: "100%",
  },
  resumeYourJourney: {
    top: height * 0.37,
    left: "50%",
    transform: [{ translateX: -width * 0.35 }],
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.akshar,
    textAlign: "center",
    width: "70%",
  },
  ssnaLogoIcon: {
    top: height * 0.1,
    borderRadius: Border.br_65xl_5,
    width: 120,
    height: 120,
    left: "50%",
    transform: [{ translateX: -60 }], // Centered horizontally
  },
  loginPage: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: "100%",
    backgroundColor: Color.colorWhite,
  },
  loginPageContent: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "relative",
  },
  unsplashTorT4qtpqIcon: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});

export default LOGINPAGE;