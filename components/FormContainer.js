import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FormContainer = ({ menus1, propMarginLeft, propBottom }) => {
  const upperStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
      ...getStyleValue("bottom", propBottom),
    };
  }, [propMarginLeft, propBottom]);

  return (
    <View style={[styles.upper, styles.upperLayout, upperStyle]}>
      <LinearGradient
        style={[styles.bluebg, styles.upperLayout]}
        locations={[0, 0.59]}
        colors={["rgba(77, 142, 169, 0)", "#4d7da9"]}
      />
      <Image style={styles.menus1Icon1} contentFit="cover" source={menus1} />
      <Text style={[styles.guidancePortal, styles.text1Typo]}>
        Guidance Portal
      </Text>
      <View style={styles.upperChild} />
      <Text style={[styles.text1, styles.text1Typo]}>+</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  upperLayout: {
    height: 233,
    width: 432,
    left: "50%",
    position: "absolute",
  },
  text1Typo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inter,
    fontWeight: "600",
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  bluebg: {
    marginLeft: -216.05,
    bottom: 0,
    backgroundColor: "transparent",
  },
  menus1Icon1: {
    top: 184,
    left: 17,
    width: 45,
    height: 33,
    position: "absolute",
  },
  guidancePortal: {
    marginTop: 69.5,
    marginLeft: -138.95,
    fontSize: FontSize.size_5xl,
    width: 248,
    height: 23,
  },
  upperChild: {
    top: 185,
    left: 357,
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
    width: 42,
    height: 31,
    position: "absolute",
  },
  text1: {
    marginTop: 56.5,
    marginLeft: 147.05,
    fontSize: FontSize.size_21xl,
    width: 30,
    height: 55,
  },
  upper: {
    marginLeft: -215,
    bottom: 744,
  },
});

export default FormContainer;
