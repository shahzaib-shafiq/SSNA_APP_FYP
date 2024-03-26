import * as React from "react";
import { Image } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Pressable, Text, Modal } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import ErrorMessage from "../components/ErrorMessage";

const Upper2 = ({ route, userDetail }) => {

  const navigation = useNavigation();

  console.log('UPPER2-User Detail:', userDetail); // Make sure this prints the correct user details
  console.log('UPPER2-Route:', route);

  // State to manage the visibility of ErrorMessage component
  const [showError, setShowError] = React.useState(false);

  // Function to toggle the visibility of the ErrorMessage
  const handlePressPlus = () => {
    setShowError(true);
  };

  return (
    <View style={styles.upper}>
      <LinearGradient
        style={[styles.bluebg, styles.iconLayout]}
        locations={[0, 0.59]}
        colors={["rgba(77, 142, 169, 0)", "#4d7da9"]}
      >
        <Pressable
          style={styles.menus1}
          onPress={() => navigation.navigate("MAINPAGE", { userDetail, route })}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/epback.png")}
          />
        </Pressable>

        <Text style={[styles.guidancePortalStyle, styles.text1Typo]}>
          Guidance Portal
        </Text>

        {/* Handle click on the + button */}
        <Pressable onPress={handlePressPlus} style={styles.plusButtonGB}>
          <Text style={[styles.plusSign, styles.text1Typo]}>+</Text>
        </Pressable>

        {/* Conditionally render ErrorMessage component */}
        {showError && (
          <Modal transparent={true} animationType="slide" visible={showError} onRequestClose={() => setShowError(false)}>
            <View style={styles.centeredView}>
              <Pressable style={styles.blurbg} onPress={() => setShowError(false)} />
              <ErrorMessage onClose={() => setShowError(false)} userDetail={userDetail} />
            </View>
          </Modal>
        )}
      </LinearGradient>

    </View>

  );
};

const styles = StyleSheet.create({
  upper: {
    top: "-20%",
    width: "105%",
    height: "28%",
  },
  iconLayout: {
    width: "100%",
    height: "100%",
  },
  blurbg: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
    top: 0,
    left: 0,
    width: 430,
    height: 933,
  },
  text1Typo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.inter,
    fontWeight: "700",
  },
  bluebg: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "transparent",
  },
  icon: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  menus1: {
    left: "5.59%",
    top: "78.8%",
    right: "84.01%",
    width: "10.39%",
    height: "14.12%",
  },
  guidancePortalStyle: {
    height: "12.5%",
    width: "40.33%",
    top: "65%",
    left: "18%",
    fontSize: FontSize.size_5xl,
  },
  plusButtonGB: {
    height: "13.39%",
    width: "9.61%",
    top: "53%",
    bottom: "7.04%",
    left: "81.06%",
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
  plusSign: {
    height: "500%",
    width: "50%",
    top: "-42%",
    left: "25%",
    fontSize: FontSize.size_21xl,
  },
});

export default Upper2;
