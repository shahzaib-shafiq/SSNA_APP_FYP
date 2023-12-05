import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Component2 = () => {
  return (
    <View style={styles.component2}>
      <View style={styles.homeScreen}>
        <View style={[styles.screenmain, styles.bluebgPosition]} />
      </View>
      <View style={styles.query}>
        <View style={styles.queryChild} />
        <Text style={styles.iWantTo1}>
          I want to run a snakes and ladders game on my visual studio console
          but it seems like the IDE is not working properly. I have tried
          reinstalling it but to no use. I also tried running it on a different
          machine but still no use. Can anyone help me on this? I have my lab
          exam in a week and need assistance urgently. Thanks!
        </Text>
        <Text style={[styles.daysAgo, styles.daysAgoTypo]}>3 days ago</Text>
        <Text style={[styles.byAnasNaveed1, styles.daysAgoTypo]}>
          By Anas Naveed
        </Text>
        <Text style={[styles.dependencyIssue, styles.csTypo]}>
          Dependency Issue
        </Text>
        <Text style={[styles.cs, styles.csTypo]}>CS</Text>
      </View>
      <View style={styles.upper}>
        <LinearGradient
          style={[styles.bluebg, styles.bluebgPosition]}
          locations={[0, 0.59]}
          colors={["rgba(77, 142, 169, 0)", "#4d7da9"]}
        />
        <Image
          style={styles.menus1Icon1}
          contentFit="cover"
          source={require("../assets/menus-13.png")}
        />
        <Text style={[styles.guidancePortal, styles.text3Typo]}>
          Guidance Portal
        </Text>
        <View style={[styles.upperChild, styles.bgdownShadowBox]} />
        <Text style={[styles.text3, styles.text3Typo]}>+</Text>
      </View>
      <View style={[styles.bgdown, styles.bgdownShadowBox]} />
      <View style={styles.respond}>
        <View style={styles.respondChild} />
        <View style={[styles.respondItem, styles.respondLayout]} />
        <View style={[styles.respondInner, styles.respondLayout]} />
        <Text style={styles.answer}>ANSWER</Text>
        <Image
          style={[styles.upArrow1Icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/uparrow-13.png")}
        />
        <Image
          style={[styles.upArrow2Icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/uparrow-25.png")}
        />
        <Text style={[styles.text4, styles.textTypo]}>34</Text>
        <Text style={[styles.text5, styles.textTypo]}>14</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bluebgPosition: {
    width: "100%",
    height: "100%",
    right: "0%",
    top: "0%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
  daysAgoTypo: {
    lineHeight: 10,
    fontSize: FontSize.size_3xs,
    height: "1.64%",
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  csTypo: {
    color: Color.colorDimgray_200,
    fontWeight: "600",
    left: "0.29%",
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  text3Typo: {
    color: Color.colorWhite,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  bgdownShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  respondLayout: {
    width: "22.94%",
    borderRadius: Border.br_6xs,
    top: "0%",
    height: "100%",
    bottom: "0%",
    position: "absolute",
  },
  iconLayout: {
    width: "8.18%",
    height: "83.67%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  textTypo: {
    width: "6.61%",
    fontSize: FontSize.size_sm,
    top: "25.79%",
    height: "44.99%",
    color: Color.colorWhite,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  screenmain: {
    backgroundColor: Color.colorWhite,
    right: "0%",
    top: "0%",
  },
  homeScreen: {
    height: "82.1%",
    top: "17.9%",
    right: "0.53%",
    left: "0%",
    bottom: "0%",
    width: "99.47%",
    position: "absolute",
  },
  queryChild: {
    height: "26.79%",
    width: "96.66%",
    top: "13.09%",
    right: "3.34%",
    bottom: "60.12%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorMistyrose,
    left: "0%",
    position: "absolute",
  },
  iWantTo1: {
    height: "57.74%",
    width: "95.17%",
    top: "42.26%",
    left: "1.2%",
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  daysAgo: {
    width: "18.59%",
    top: "5.21%",
    left: "81.41%",
  },
  byAnasNaveed1: {
    width: "27.14%",
    top: "8.34%",
    left: "0.89%",
  },
  dependencyIssue: {
    height: "4.02%",
    width: "69.78%",
    top: "3.43%",
    fontSize: FontSize.size_5xl,
  },
  cs: {
    height: "3.43%",
    width: "8.83%",
    fontSize: FontSize.size_lg,
    top: "0%",
  },
  query: {
    height: "67.95%",
    width: "88.63%",
    top: "26.69%",
    right: "4.47%",
    bottom: "5.36%",
    left: "6.9%",
    position: "absolute",
  },
  bluebg: {
    backgroundColor: "transparent",
    right: "0%",
    top: "0%",
  },
  menus1Icon1: {
    height: "14.12%",
    width: "10.4%",
    top: "78.82%",
    right: "83.99%",
    left: "5.61%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "7.06%",
    position: "absolute",
  },
  guidancePortal: {
    height: "10.04%",
    width: "57.34%",
    top: "81.03%",
    left: "21.88%",
    fontSize: FontSize.size_5xl,
  },
  upperChild: {
    height: "13.4%",
    width: "9.61%",
    top: "79.54%",
    right: "5.33%",
    left: "85.06%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGray_1100,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowRadius: 6.1,
    elevation: 6.1,
    bottom: "7.06%",
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  text3: {
    height: "23.59%",
    width: "6.94%",
    top: "74.66%",
    left: "86.67%",
    fontSize: FontSize.size_21xl,
  },
  upper: {
    height: "23.56%",
    right: "0.28%",
    bottom: "76.44%",
    left: "0.25%",
    top: "0%",
    width: "99.47%",
    position: "absolute",
  },
  bgdown: {
    height: "5.96%",
    width: "98.94%",
    top: "92.62%",
    bottom: "1.42%",
    left: "1.06%",
    backgroundColor: Color.colorSteelblue,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    right: "0%",
  },
  respondChild: {
    width: "39%",
    left: "61%",
    backgroundColor: Color.colorSkyblue,
    borderRadius: Border.br_6xs,
    right: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    position: "absolute",
  },
  respondItem: {
    right: "77.06%",
    backgroundColor: Color.colorDarkseagreen,
    left: "0%",
  },
  respondInner: {
    right: "52.22%",
    left: "24.84%",
    backgroundColor: Color.colorSalmon,
  },
  answer: {
    width: "20.44%",
    left: "70.44%",
    fontSize: FontSize.size_sm,
    top: "25.79%",
    height: "44.99%",
    color: Color.colorWhite,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  upArrow1Icon1: {
    top: "6.3%",
    right: "81.45%",
    bottom: "10.03%",
    left: "10.37%",
  },
  upArrow2Icon1: {
    top: "12.89%",
    right: "56.92%",
    bottom: "3.44%",
    left: "34.91%",
  },
  text4: {
    left: "5.98%",
  },
  text5: {
    left: "30.82%",
  },
  respond: {
    height: "3.14%",
    width: "84.35%",
    top: "94.04%",
    right: "7.43%",
    bottom: "2.82%",
    left: "8.22%",
    position: "absolute",
  },
  component2: {
    top: -163,
    left: -2,
    width: 432,
    height: 1112,
    position: "absolute",
  },
});

export default Component2;
