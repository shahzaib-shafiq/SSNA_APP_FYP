import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const SectionForm = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.answerbuttonParent}>
      <View style={styles.bgdownPosition}>
        <View style={[styles.bgdown, styles.bgdownPosition]} />
        <Pressable
          style={[styles.answerbuttonChild, styles.respondPosition]}
          onPress={() => navigation.navigate("SeniorGuidanceScreenAnswerQuery")}
        />
        <Text style={styles.answer}>ANSWER</Text>
      </View>
      <View style={[styles.respond, styles.respondPosition]}>
        <View style={[styles.respondChild, styles.respondLayout]} />
        <View style={[styles.respondItem, styles.respondLayout]} />
        <Image
          style={[styles.upArrow2Icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/uparrow-22.png")}
        />
        <Image
          style={[styles.upArrow3Icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/uparrow-3.png")}
        />
        <Text style={[styles.text2, styles.textPosition]}>14</Text>
        <Text style={[styles.text3, styles.textPosition]}>30</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgdownPosition: {
    top: 0,
    height: 56,
    width: 430,
    left: 0,
    position: "absolute",
  },
  respondPosition: {
    height: 31,
    top: 12,
    position: "absolute",
  },
  respondLayout: {
    width: 84,
    height: 31,
    borderRadius: Border.br_6xs,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 26,
    width: 30,
    position: "absolute",
  },
  textPosition: {
    width: 24,
    marginTop: -7.5,
    height: 14,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inter,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  bgdown: {
    backgroundColor: Color.colorSteelblue,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  answerbuttonChild: {
    left: 257,
    backgroundColor: Color.colorSkyblue,
    width: 143,
    borderRadius: Border.br_6xs,
    height: 31,
    top: 12,
  },
  answer: {
    marginTop: -8,
    marginLeft: 81.7,
    width: 75,
    height: 14,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inter,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  respondChild: {
    backgroundColor: Color.colorDarkseagreen,
    left: 0,
    width: 84,
  },
  respondItem: {
    left: 92,
    backgroundColor: Color.colorSalmon,
  },
  upArrow2Icon1: {
    top: 5,
    left: 111,
  },
  upArrow3Icon1: {
    top: 2,
    left: 16,
  },
  text2: {
    marginLeft: 46.4,
  },
  text3: {
    marginLeft: -45.9,
  },
  respond: {
    left: 29,
    width: 176,
    height: 31,
    top: 12,
  },
  answerbuttonParent: {
    top: 1229,
    height: 56,
    width: 430,
    position: "absolute",
    left: 0,
  },
});

export default SectionForm;
