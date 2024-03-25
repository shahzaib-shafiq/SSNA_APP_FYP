import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import FormContainer from "../components/FormContainer";
import ContainerAnswerForm from "../components/ContainerAnswerForm";
import SectionForm from "../components/SectionForm";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import { Image } from "react-native";

const SeniorGuidanceScreenViewD = ({ route }) => {

  const { userDetail, query } = route.params; //user session
  const navigation = useNavigation(); //for stack navigation

  const numCharacters = query.Summary.length;
  const lineHeight = 30; // This should match the line height in your style.
  const charactersPerLine = 35; // Adjust based on your average character per line at the given style.
  const lines = Math.ceil(numCharacters / charactersPerLine);
  const minHeight = 100; // Adjust based on your needs.
  const dynamicHeight = Math.max(lines * lineHeight, minHeight);

  // Calculate marginTop dynamically based on the height of the summary text
  const marginTop = query.Summary ? Math.max(20, query.Summary.length * 10) : 0;

  return (
    <View style={styles.container}>
      {/* UPPER NAV BAR */}
      <View style={{ zIndex: 2 }}>
        <FormContainer route={route} userDetail={userDetail} query={query} />
      </View>

      {/* BOTTOM VOTING/ANSWER BAR */}
      <View style={{ zIndex: 1 }}>
        <SectionForm route={route} userDetail={userDetail} />
      </View>

      {/* FULL QUERY */}
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.content}>
          <View style={[styles.query, styles.queryLayout]}>

            <Text style={[styles.cs, styles.queryDptStyle]}>
              {query.Department}
            </Text>

            <Text style={[styles.queryTiteStyle, styles.queryDptStyle]}>
              {query.Title}
            </Text>

            <Text style={styles.authorStyle}>By {query.Author}</Text>

            <Image
              style={[styles.queryImgStyle, styles.queryLayout]}
              source={{ uri: query.img }}
            />

            <Text
              style={[
                styles.querySummaryStyle,
                { height: dynamicHeight } // Apply dynamic height inline
              ]}
            >
              {query.Summary}
            </Text>

            {/* Dynamically spaced text */}
            <Text style={styles.answersTextStyle}>
              Answers
            </Text>

            <ContainerAnswerForm route={route} userDetail={userDetail} />

          </View>
        </View>
      </ScrollView >
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  querySummaryStyle: {
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    width: 349,
    // height: "10%",
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.inter,
    left: "0%",
    top: "10%",
  },
  scrollContainer: {
    flex: 1,
  },
  content: {
    paddingTop: "220%", // Adjust this value based on the height of FormContainer
    paddingHorizontal: "0%",
  },
  queryLayout: {
    width: 375,
  },
  query: {
    top: "-103%",
    height: 873,
    left: "6%",
    width: 375,
  },
  queryImgStyle: {
    top: "7%",
    left: -8,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorMistyrose,
    height: "24%",
  },
  cs: {
    fontSize: FontSize.size_lg,
    width: "10%",
    top: "5%",
    height: "4%",
    color: Color.colorDimgray_200,
  },
  queryTiteStyle: {
    width: "100%",
    height: "auto",
    top: "4%",
    fontSize: 30,
    color: Color.colorDimgray_200,
  },
  queryDptStyle: {
    color: Color.colorDimgray_200,
    marginLeft: -157.15,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.inter,
    left: "41%",
  },
  authorStyle: {
    fontSize: 15,
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.inter,
    left: "0%",
    top: "4%",
  },
  answersTextStyle: {
    color: Color.colorGray_1200,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
    left: "0%",
    textAlign: "left",
    top:"10%",
    fontFamily: FontFamily.inter,
  },
});

export default SeniorGuidanceScreenViewD;
