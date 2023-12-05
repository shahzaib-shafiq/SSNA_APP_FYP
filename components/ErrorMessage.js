import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const ErrorMessage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.errormessage}>
      <View style={[styles.errormessageChild, styles.errormessageShadowBox]} />
      <Text style={[styles.answerToAnas1, styles.publicTypo]}>
        Answer to Anas
      </Text>
      <Text style={[styles.public, styles.publicTypo]}>Public</Text>
      <Pressable
        style={[styles.errormessageItem, styles.errormessageShadowBox]}
        onPress={() =>
          navigation.navigate("SeniorGuidanceScreenAnswerRejected")
        }
      />
      <Text style={styles.postAnswer}>Post Answer</Text>
      <Image
        style={[styles.fontistoworldOIcon1, styles.errormessageInnerPosition]}
        contentFit="cover"
        source={require("../assets/fontistoworldo.png")}
      />
      <View
        style={[styles.errormessageInner, styles.errormessageInnerPosition]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  errormessageShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: -1,
      height: 6,
    },
    position: "absolute",
  },
  publicTypo: {
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  errormessageInnerPosition: {
    left: "4.4%",
    position: "absolute",
  },
  errormessageChild: {
    height: "89.77%",
    width: "100%",
    top: "6.87%",
    right: "0%",
    bottom: "3.36%",
    left: "0%",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 12.3,
    elevation: 12.3,
  },
  answerToAnas1: {
    height: "5.1%",
    width: "57.99%",
    top: "10.38%",
    left: "3.75%",
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    color: Color.colorGray_1000,
  },
  public: {
    height: "2.65%",
    width: "12.21%",
    top: "15.5%",
    left: "8.78%",
    fontSize: FontSize.size_xs,
    color: Color.colorGray_700,
  },
  errormessageItem: {
    height: "5.85%",
    width: "41.15%",
    top: "87.87%",
    right: "6.25%",
    bottom: "6.29%",
    left: "52.6%",
    borderRadius: Border.br_4xs,
    backgroundColor: Color.colorLimegreen,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 4,
    elevation: 4,
  },
  postAnswer: {
    height: "3.17%",
    width: "29.48%",
    top: "89.77%",
    left: "58.33%",
    fontSize: FontSize.size_base,
    fontWeight: "700",
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  fontistoworldOIcon1: {
    height: "2.12%",
    width: "3.75%",
    top: "15.85%",
    right: "91.85%",
    bottom: "82.03%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0.4,
  },
  errormessageInner: {
    height: "66.02%",
    width: "90.91%",
    top: "19.2%",
    right: "4.69%",
    bottom: "14.78%",
    borderRadius: Border.br_2xl,
    backgroundColor: Color.colorGainsboro_300,
  },
  errormessage: {
    top: 111,
    left: 22,
    width: 384,
    height: 684,
    position: "absolute",
  },
});

export default ErrorMessage;
