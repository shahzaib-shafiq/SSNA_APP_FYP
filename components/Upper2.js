import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Upper2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.upper}>
      <LinearGradient
        style={[styles.bluebg, styles.iconLayout]}
        locations={[0, 0.59]}
        colors={["rgba(77, 142, 169, 0)", "#4d7da9"]}
      />
      <Pressable
        style={styles.menus1}
        onPress={() => navigation.navigate("DrawerMenu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/menus-121.png")}
        />
      </Pressable>
      <Text style={[styles.guidancePortal, styles.text1Typo]}>
        Guidance Portal
      </Text>
      <View style={styles.upperChild} />
      <Text style={[styles.text1, styles.text1Typo]}>+</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    height: "100%",
  },
  text1Typo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inter,
    fontWeight: "600",
    position: "absolute",
  },
  bluebg: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "transparent",
    position: "absolute",
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
    bottom: "7.08%",
    width: "10.39%",
    height: "14.12%",
    position: "absolute",
  },
  guidancePortal: {
    height: "10.04%",
    width: "57.33%",
    top: "81.03%",
    left: "21.86%",
    fontSize: FontSize.size_5xl,
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
    position: "absolute",
  },
  text1: {
    height: "23.61%",
    width: "6.94%",
    top: "74.68%",
    left: "86.66%",
    fontSize: FontSize.size_21xl,
  },
  upper: {
    top: -163,
    left: -1,
    width: 431,
    height: 233,
    position: "absolute",
  },
});

export default Upper2;
