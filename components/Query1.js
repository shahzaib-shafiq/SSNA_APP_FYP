import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Query1 = () => {
  return (
    <View style={styles.query}>
      <View style={styles.queryChild} />
      <Text style={styles.iWantTo1}>
        I want to run a snakes and ladders game on my visual studio console but
        it seems like the IDE is not working properly. I have tried reinstalling
        it but to no use. I also tried...
      </Text>
      <Text style={[styles.daysAgo, styles.daysAgoTypo]}>3 days ago</Text>
      <Text style={[styles.byAnasNaveed1, styles.daysAgoTypo]}>
        By Anas Naveed
      </Text>
      <Text style={[styles.helpWithDiagram1, styles.seTypo]}>
        Help with diagram
      </Text>
      <Text style={[styles.se, styles.seTypo]}>SE</Text>
      <View style={styles.queryItem} />
      <View style={[styles.queryInner, styles.queryInnerLayout]} />
      <View style={[styles.rectangleView, styles.queryInnerLayout]} />
      <Text style={styles.answer}>ANSWER</Text>
      <Image
        style={[styles.upArrow1Icon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/uparrow-11.png")}
      />
      <Image
        style={[styles.upArrow2Icon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/uparrow-23.png")}
      />
      <Text style={[styles.text2, styles.textTypo]}>34</Text>
      <Text style={[styles.text3, styles.textTypo]}>14</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  daysAgoTypo: {
    lineHeight: 11,
    fontSize: FontSize.size_2xs,
    top: "60.65%",
    height: "7.1%",
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  seTypo: {
    color: Color.colorDimgray_200,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    top: "0%",
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  queryInnerLayout: {
    width: "22.25%",
    borderRadius: Border.br_6xs,
    bottom: "0%",
    top: "80%",
    height: "20%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    width: "7.92%",
    height: "16.77%",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_sm,
    top: "85.16%",
    width: "6.41%",
    height: "9.03%",
    color: Color.colorWhite,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  queryChild: {
    height: "52.9%",
    width: "39.65%",
    top: "17.42%",
    right: "60.35%",
    bottom: "29.68%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorMistyrose,
    left: "0%",
    position: "absolute",
  },
  iWantTo1: {
    height: "34.19%",
    width: "54.28%",
    top: "24.52%",
    fontSize: FontSize.size_xs,
    lineHeight: 12,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.inter,
    left: "42.99%",
    position: "absolute",
  },
  daysAgo: {
    width: "18.61%",
    left: "81.39%",
  },
  byAnasNaveed1: {
    width: "27.14%",
    left: "42.99%",
    lineHeight: 11,
    fontSize: FontSize.size_2xs,
    top: "60.65%",
    height: "7.1%",
  },
  helpWithDiagram1: {
    height: "17.42%",
    width: "50%",
    left: "0.3%",
  },
  se: {
    height: "14.84%",
    width: "8.84%",
    left: "89.65%",
  },
  queryItem: {
    width: "37.8%",
    right: "3.06%",
    left: "59.14%",
    backgroundColor: Color.colorSkyblue,
    borderRadius: Border.br_6xs,
    bottom: "0%",
    top: "80%",
    height: "20%",
    position: "absolute",
  },
  queryInner: {
    right: "77.75%",
    backgroundColor: Color.colorDarkseagreen,
    left: "0%",
  },
  rectangleView: {
    right: "53.67%",
    left: "24.08%",
    backgroundColor: Color.colorSalmon,
  },
  answer: {
    height: "9.14%",
    width: "16.96%",
    top: "86.02%",
    left: "69.37%",
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  upArrow1Icon1: {
    top: "81.29%",
    right: "82.03%",
    bottom: "1.94%",
    left: "10.05%",
  },
  upArrow2Icon1: {
    top: "82.58%",
    right: "58.23%",
    bottom: "0.65%",
    left: "33.85%",
  },
  text2: {
    left: "5.8%",
  },
  text3: {
    left: "29.87%",
  },
  query: {
    top: 445,
    left: 23,
    width: 395,
    height: 186,
    position: "absolute",
  },
});

export default Query1;
