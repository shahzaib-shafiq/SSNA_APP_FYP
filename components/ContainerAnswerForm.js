import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ContainerAnswerForm = ({
  productCode,
  propTop,
  propLeft,
  propWidth,
  propLeft1,
  propLeft2,
}) => {
  const answerStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
      ...getStyleValue("width", propWidth),
    };
  }, [propLeft, propWidth]);

  const bxsupArrowIconStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft1),
    };
  }, [propLeft1]);

  const bxsupArrowIcon1Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft2),
    };
  }, [propLeft2]);

  return (
    <View style={[styles.answer, styles.answerLayout1, answerStyle]}>
      <View style={[styles.answerChild, styles.answerLayout1]} />
      <Text style={[styles.dayAgo, styles.dayAgoTypo]}>1 day ago</Text>
      <Text style={[styles.byAnasNaveed1, styles.dayAgoTypo]}>
        By Anas Naveed
      </Text>
      <Text
        style={styles.iThinkI1}
      >{`I think I might know whats the problem. I also faced this same problem in my time. 

You need to go to
settings >> preferences >> modules >> enable extras

This somehow fixed the issue on my pc, I hope it does on yours.`}</Text>
      <Text style={styles.enableExtras}>Enable extras</Text>
      <View
        style={[styles.answerItem, styles.answerLayout, rectangleViewStyle]}
      />
      <View style={[styles.answerInner, styles.answerLayout]} />
      <Image
        style={[
          styles.bxsupArrowIcon2,
          styles.bxsupIconLayout,
          bxsupArrowIconStyle,
        ]}
        contentFit="cover"
        source={productCode}
      />
      <Image
        style={[
          styles.bxsupArrowIcon3,
          styles.bxsupIconLayout,
          bxsupArrowIcon1Style,
        ]}
        contentFit="cover"
        source={require("../assets/bxsuparrow1.png")}
      />
      <Text style={[styles.text2, styles.textTypo]}>34</Text>
      <Text style={[styles.text3, styles.textTypo]}>12</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  answerLayout1: {
    height: 171,
    width: 363,
    position: "absolute",
  },
  dayAgoTypo: {
    height: 11,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.inter,
    lineHeight: 10,
    fontSize: FontSize.size_3xs,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  answerLayout: {
    height: 20,
    width: 52,
    backgroundColor: Color.colorGainsboro_500,
    borderRadius: Border.br_6xs,
    top: 143,
    position: "absolute",
  },
  bxsupIconLayout: {
    opacity: 0.4,
    overflow: "hidden",
    height: 14,
    width: 14,
    position: "absolute",
  },
  textTypo: {
    width: 21,
    color: Color.colorGray_200,
    fontSize: FontSize.size_xs,
    marginTop: 60.5,
    height: 14,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.inter,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  answerChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_base,
    backgroundColor: Color.colorGainsboro_400,
  },
  dayAgo: {
    marginTop: -65.5,
    marginLeft: 109.5,
    width: 53,
  },
  byAnasNaveed1: {
    marginTop: 61.5,
    marginLeft: -144.5,
    width: 91,
  },
  iThinkI1: {
    marginTop: -37.5,
    marginLeft: -166.5,
    width: 329,
    height: 79,
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.inter,
    lineHeight: 10,
    fontSize: FontSize.size_3xs,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  enableExtras: {
    top: 16,
    left: 9,
    fontSize: FontSize.size_base,
    color: Color.colorGray_1200,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  answerItem: {
    left: 272,
  },
  answerInner: {
    left: 210,
  },
  bxsupArrowIcon2: {
    top: 146,
    left: 282,
  },
  bxsupArrowIcon3: {
    top: 147,
    left: 222,
  },
  text2: {
    marginLeft: 114.5,
  },
  text3: {
    marginLeft: 54.5,
  },
  answer: {
    top: 788,
    left: 37,
  },
});

export default ContainerAnswerForm;
