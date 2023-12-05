import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Query2 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.query}
      onPress={() => navigation.navigate("SeniorGuidanceScreenViewDetails")}
    >
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
      <Text style={[styles.dependencyIssue, styles.csTypo]}>
        Dependency Issue
      </Text>
      <Text style={[styles.cs, styles.csTypo]}>CS</Text>
      <View style={styles.queryItem} />
      <View style={[styles.queryInner, styles.queryInnerLayout]} />
      <View style={[styles.rectangleView, styles.queryInnerLayout]} />
      <Text style={styles.answer}>ANSWER</Text>
      <Image
        style={[styles.upArrow1Icon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/uparrow-1.png")}
      />
      <Image
        style={[styles.upArrow2Icon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/uparrow-221.png")}
      />
      <Text style={[styles.text2, styles.textTypo]}>34</Text>
      <Text style={[styles.text3, styles.textTypo]}>14</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  daysAgoTypo: {
    lineHeight: 11,
    fontSize: FontSize.size_2xs,
    top: "60.64%",
    height: "7.11%",
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  csTypo: {
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
    height: "16.79%",
    position: "absolute",
  },
  textTypo: {
    top: "85.19%",
    width: "6.41%",
    height: "9.04%",
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  queryChild: {
    height: "52.89%",
    width: "39.65%",
    top: "17.43%",
    right: "60.35%",
    bottom: "29.68%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorMistyrose,
    left: "0%",
    position: "absolute",
  },
  iWantTo1: {
    height: "34.17%",
    width: "54.28%",
    top: "24.49%",
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
    top: "60.64%",
    height: "7.11%",
  },
  dependencyIssue: {
    height: "17.43%",
    width: "50%",
    left: "0.3%",
  },
  cs: {
    height: "14.81%",
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
    height: "9.09%",
    width: "15.7%",
    top: "85.03%",
    left: "70.13%",
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  upArrow1Icon1: {
    top: "81.28%",
    right: "82.03%",
    bottom: "1.93%",
    left: "10.05%",
  },
  upArrow2Icon1: {
    top: "82.57%",
    right: "58.23%",
    bottom: "0.64%",
    left: "33.85%",
  },
  text2: {
    left: "5.8%",
  },
  text3: {
    left: "29.87%",
  },
  query: {
    top: 199,
    left: 23,
    width: 395,
    height: 187,
    position: "absolute",
  },
});

export default Query2;
