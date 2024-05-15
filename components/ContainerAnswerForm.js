import { Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import database from '@react-native-firebase/database'; //for firebase connection


const ContainerAnswerForm = ({ route, userDetail }) => {

  const navigation = useNavigation();

  const { query, udTemp, rTemp } = route.params;

  console.log('CAF-User Detail:', userDetail); // Make sure this prints the correct user details
  console.log('CAF-Route:', route);
  console.log('CAF-Query:', query);

  const [answers, setAnswers] = useState([]);

  // Function to fetch answers from Firebase
  const fetchAnswers = () => {
    const dbRef = database().ref(`/Guidance/${query.id}/Answers`);
    dbRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert object to array of answers
        const answersArray = Object.values(data);
        setAnswers(answersArray);
      } else {
        setAnswers([]); // Reset answers if there are none
      }
    });
  };

  useEffect(() => {
    fetchAnswers();
    // Unsubscribe from Firebase on component unmount
  }, [query.id]);

  return (
    <View style={styles.answer}>
    {answers.map((answer, index) => (
      <View style={styles.answerChild} key={index}>
        <Text style={styles.answerTxtStyle}>
          {answer.Answer}
        </Text>
  
        <View style={styles.metaInfo}>
          <Text style={styles.dateTxtStyle}>
            {answer.Date}
          </Text>
  
          <Text style={styles.authorTxtStyle}>
            By {answer.Author}
          </Text>
        </View>
      </View>
    ))}
  
  </View>
  
  );
};

const styles = StyleSheet.create({
  answerLayout1: {
    height: "30%",
    width: 363,
    // position: "absolute",
  },
  answer: {
    top: "12%",
    left: "0%",
  },
  answerChild: {
    width: "96%", // Adjust width as necessary
    borderRadius: Border.br_base,
    backgroundColor: Color.colorGainsboro_400,
    padding: 10, // Add padding to create space inside the box
    marginBottom: 10, // Add margin bottom to separate between entries
  },
  answerTxtStyle: {
    top:"10%",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.inter,
    fontSize: 15,
    // Remove fixed width and height to allow dynamic size
  },
  metaInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: 10, // Add margin top to create space between answer and meta info
  },
  dateTxtStyle: {
    top:"20%",

    fontWeight: "500",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_3xs,
  },
  authorTxtStyle: {
    fontWeight: "700",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.inter,
    fontSize: 10,
    width: 363,
  },
  txtStyle: {
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
  dayAgo: {
    marginTop: -65.5,
    marginLeft: 109.5,
    width: 53,
  },
  authorTxtStyle: {
    marginTop: 61.5,
    marginLeft: -144.5,
    width: 91,
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
});

export default ContainerAnswerForm;
