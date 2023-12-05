import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import FormContainer from "../components/FormContainer";
import ContainerAnswerForm from "../components/ContainerAnswerForm";
import SectionForm from "../components/SectionForm";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const SeniorGuidanceScreenViewD = () => {
  return (
    <View style={styles.seniorGuidanceScreenViewd}>
      <Text style={[styles.daysAgo, styles.anasTypo]}>3 days ago</Text>
      <Text style={[styles.byAnasNaveed2, styles.anasTypo]}>
        By Anas Naveed
      </Text>
      <View style={[styles.query, styles.queryLayout]}>
        <View style={[styles.queryChild, styles.queryLayout]} />
        <Text style={styles.iWantTo1}>
          I want to run a snakes and ladders game on my visual studio console
          but it seems like the IDE is not working properly. I have tried
          reinstalling it but to no use. I also tried running it on a different
          machine but still no use. Can anyone help me on this? I have my lab
          exam in a week and need assistance urgently. Thanks!
        </Text>
        <Text style={[styles.byAnasNaveed3, styles.anasTypo]}>
          By Anas Naveed
        </Text>
        <Text style={[styles.dependencyIssue, styles.csPosition]}>
          Dependency Issue
        </Text>
        <Text style={[styles.cs, styles.csPosition]}>CS</Text>
      </View>
      <FormContainer
        menus1={require("../assets/menus-14.png")}
        propMarginLeft={-217.1}
        propBottom={1215}
      />
      <ContainerAnswerForm productCode={require("../assets/bxsuparrow.png")} />
      <ContainerAnswerForm
        productCode={require("../assets/bxsuparrow2.png")}
        propTop={999}
        propLeft={275}
        propWidth={48}
        propLeft1={284}
        propLeft2={223}
      />
      <SectionForm />
      <Text style={styles.answers}>Answers</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  anasTypo: {
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
  queryLayout: {
    width: 375,
    position: "absolute",
  },
  csPosition: {
    color: Color.colorDimgray_200,
    marginLeft: -157.15,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.inter,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  daysAgo: {
    marginTop: -607.5,
    marginLeft: 84,
    width: 62,
  },
  byAnasNaveed2: {
    marginTop: -586.5,
    marginLeft: -185,
    width: 91,
  },
  queryChild: {
    top: 86,
    left: 0,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorMistyrose,
    height: 180,
  },
  iWantTo1: {
    marginTop: -51.5,
    marginLeft: -171.45,
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    width: 349,
    height: 388,
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.inter,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  byAnasNaveed3: {
    marginTop: -280.5,
    marginLeft: -154.85,
    width: 106,
  },
  dependencyIssue: {
    marginTop: -313.5,
    width: 272,
    height: 27,
    fontSize: FontSize.size_5xl,
    color: Color.colorDimgray_200,
    marginLeft: -157.15,
  },
  cs: {
    marginTop: -336.5,
    fontSize: FontSize.size_lg,
    width: 34,
    height: 23,
    color: Color.colorDimgray_200,
    marginLeft: -157.15,
  },
  query: {
    top: 101,
    height: 673,
    left: 26,
    width: 375,
  },
  answers: {
    top: 738,
    color: Color.colorGray_1200,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
    left: 26,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  seniorGuidanceScreenViewd: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 1285,
    overflow: "hidden",
  },
});

export default SeniorGuidanceScreenViewD;
