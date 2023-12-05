import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TimetableContainer from "../components/TimetableContainer";
import { Padding, Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const Timetable = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.timetable}>
      <TimetableContainer
        locationCoordinates={require("../assets/menus-1.png")}
        busRoutesImageUrl="Timetable"
        onMenus1Press={() => navigation.navigate("DrawerMenu")}
      />
      <View style={[styles.button, styles.buttonFlexBox]}>
        <Text style={styles.postQuestion}>View Timetable</Text>
      </View>
      <View style={[styles.button1, styles.buttonFlexBox]}>
        <Text style={styles.postQuestion}>Set Reminder</Text>
      </View>
      <View style={styles.timetableChild} />
      <Text style={styles.timetable1}>Timetable</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    padding: Padding.p_3xs,
    flexDirection: "row",
    height: 40,
    borderRadius: Border.br_31xl,
    top: 452,
    position: "absolute",
  },
  postQuestion: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.inter,
  },
  button: {
    left: 257,
    backgroundColor: Color.colorDodgerblue,
    width: 120,
  },
  button1: {
    left: 49,
    backgroundColor: "#ae0000",
    width: 121,
  },
  timetableChild: {
    top: 240,
    left: 47,
    borderRadius: 17,
    backgroundColor: Color.colorMistyrose,
    width: 332,
    height: 172,
    position: "absolute",
  },
  timetable1: {
    top: 312,
    left: 154,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    color: "rgba(255, 255, 255, 0.42)",
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  timetable: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Timetable;
