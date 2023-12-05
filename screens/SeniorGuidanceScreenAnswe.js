import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import FormContainer from "../components/FormContainer";
import SectionCard from "../components/SectionCard";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const SeniorGuidanceScreenAnswe = () => {
  return (
    <View style={[styles.seniorGuidanceScreenAnswe1, styles.screenmainLayout]}>
      <View style={styles.homeScreen}>
        <View style={[styles.screenmain, styles.screenmainLayout]} />
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
        <Text style={[styles.dependencyIssue, styles.csPosition]}>
          Dependency Issue
        </Text>
        <Text style={[styles.cs, styles.csPosition]}>CS</Text>
      </View>
      <FormContainer menus1={require("../assets/menus-111.png")} />
      <SectionCard />
      <View style={[styles.blurbg, styles.blurbgPosition]} />
      <View style={[styles.errormessage, styles.errormessageLayout]}>
        <View style={[styles.errormessageChild, styles.errormessageLayout]} />
        <Text style={[styles.sorry, styles.sorryClr]}>Sorry!</Text>
        <Text style={[styles.youMustBe1, styles.youMustBe1Typo]}>
          You must be a registered senior in order to answer a query
        </Text>
      </View>
      <View style={styles.button}>
        <Text style={[styles.postQuestion, styles.youMustBe1Typo]}>Okay</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenmainLayout: {
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  daysAgoTypo: {
    height: 11,
    lineHeight: 10,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.inter,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  csPosition: {
    color: Color.colorDimgray_200,
    marginLeft: -158.8,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.inter,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  blurbgPosition: {
    top: 0,
    left: 0,
  },
  errormessageLayout: {
    height: 171,
    width: 264,
    position: "absolute",
  },
  sorryClr: {
    color: Color.colorGray_1000,
    position: "absolute",
  },
  youMustBe1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.inter,
  },
  screenmain: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  homeScreen: {
    top: 14,
    left: -2,
    width: 375,
    position: "absolute",
    height: 812,
  },
  queryChild: {
    top: 84,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorMistyrose,
    width: 336,
    height: 173,
    left: 0,
    position: "absolute",
  },
  iWantTo1: {
    marginTop: -55.55,
    marginLeft: -157,
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    width: 318,
    height: 388,
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.inter,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  daysAgo: {
    marginTop: -298.85,
    marginLeft: 123.3,
    width: 65,
  },
  byAnasNaveed1: {
    marginTop: -278.75,
    marginLeft: -156.8,
    width: 94,
  },
  dependencyIssue: {
    marginTop: -310.35,
    width: 243,
    height: 26,
    fontSize: FontSize.size_5xl,
    color: Color.colorDimgray_200,
    marginLeft: -158.8,
  },
  cs: {
    marginTop: -332.45,
    width: 31,
    height: 22,
    fontSize: FontSize.size_lg,
    color: Color.colorDimgray_200,
    marginLeft: -158.8,
  },
  query: {
    top: 95,
    left: 29,
    width: 376,
    height: 665,
    position: "absolute",
  },
  blurbg: {
    backgroundColor: Color.colorGray_900,
    width: 430,
    position: "absolute",
    height: 812,
  },
  errormessageChild: {
    borderRadius: Border.br_11xl,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: -1,
      height: 6,
    },
    shadowRadius: 12.3,
    elevation: 12.3,
    shadowOpacity: 1,
    top: 0,
    left: 0,
    backgroundColor: Color.colorWhite,
    height: 171,
    width: 264,
  },
  sorry: {
    top: 36,
    left: 97,
    width: 71,
    fontWeight: "600",
    color: Color.colorGray_1000,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  youMustBe1: {
    top: 71,
    left: 32,
    fontSize: FontSize.size_xs,
    width: 202,
    color: Color.colorGray_1000,
    position: "absolute",
  },
  errormessage: {
    top: 308,
    left: 83,
  },
  postQuestion: {
    fontWeight: "500",
    color: Color.colorWhite,
    fontSize: FontSize.size_lg,
  },
  button: {
    marginLeft: -45,
    top: 429,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorDodgerblue,
    width: 91,
    height: 34,
    flexDirection: "row",
    padding: Padding.p_3xs,
    alignItems: "center",
    justifyContent: "center",
    left: "50%",
    position: "absolute",
  },
  seniorGuidanceScreenAnswe1: {
    flex: 1,
    overflow: "hidden",
    height: 812,
  },
});

export default SeniorGuidanceScreenAnswe;
