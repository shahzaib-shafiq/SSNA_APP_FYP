import * as React from "react";
import { Image } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Query = () => {
  return (

    <View style={styles.queriesBoxMAIN}>

      <View style={styles.query1}>
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
        <Text style={[styles.arduinoProgramming, styles.eeTypo]}>
          Arduino programming
        </Text>
        <Text style={[styles.ee, styles.eeTypo]}>EE</Text>
        <View style={styles.queryItem} />
        <View style={[styles.queryInner, styles.queryInnerLayout]} />
        <View style={[styles.rectangleView, styles.queryInnerLayout]} />
        <Text style={styles.answer}>ANSWER</Text>
        <Image
          style={[styles.upArrow1Icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/uparrow-12.png")}
        />
        <Image
          style={[styles.upArrow2Icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/uparrow-24.png")}
        />
        <Text style={[styles.text2, styles.textTypo]}>34</Text>
        <Text style={[styles.text3, styles.textTypo]}>14</Text>
      </View>

      <View style={styles.query2}>
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
        <Text style={[styles.arduinoProgramming, styles.eeTypo]}>
          Game Development
        </Text>
        <Text style={[styles.ee, styles.eeTypo]}>CS</Text>
        <View style={styles.queryItem} />
        <View style={[styles.queryInner, styles.queryInnerLayout]} />
        <View style={[styles.rectangleView, styles.queryInnerLayout]} />
        <Text style={styles.answer}>ANSWER</Text>
        <Image
          style={[styles.upArrow1Icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/uparrow-12.png")}
        />
        <Image
          style={[styles.upArrow2Icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/uparrow-24.png")}
        />
        <Text style={[styles.text2, styles.textTypo]}>34</Text>
        <Text style={[styles.text3, styles.textTypo]}>14</Text>
      </View>

    </View>

    
    
    
  );
};

const styles = StyleSheet.create({
  daysAgoTypo: {
    lineHeight: 11,
    fontSize: FontSize.size_2xs,
    top: "60.65%",
    height: "7.08%",
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  eeTypo: {
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
    height: "16.76%",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_sm,
    top: "85.14%",
    width: "6.41%",
    height: "9.03%",
    color: Color.colorWhite,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  queryChild: {
    height: "52.92%",
    width: "39.65%",
    top: "17.41%",
    right: "60.35%",
    bottom: "29.68%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorMistyrose,
    left: "0%",
    position: "absolute",
  },
  iWantTo1: {
    height: "34.22%",
    width: "54.28%",
    top: "24.54%",
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
    height: "7.08%",
  },
  arduinoProgramming: {
    height: "17.41%",
    width: "59.14%",
    left: "0.3%",
  },
  ee: {
    height: "14.86%",
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
    height: "9.19%",
    width: "16.96%",
    top: "85.41%",
    left: "69.37%",
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  upArrow1Icon1: {
    top: "81.3%",
    right: "82.03%",
    bottom: "1.95%",
    left: "10.05%",
  },
  upArrow2Icon1: {
    top: "82.59%",
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
  query1: {
    top: "0%",
    left: "0%",
    width: 395,
    height: 185,
    position: "absolute",
  },
  query2: {
    top: "40%",
    left: "0%",
    width: 395,
    height: 185,
    position: "absolute",
  },
  queriesBoxMAIN: {
    top: "25%",
    left: "4%",
    width: "92%",
    // backgroundColor:"grey",
    height: "70%",
    position: "absolute",
  },
});

export default Query;
