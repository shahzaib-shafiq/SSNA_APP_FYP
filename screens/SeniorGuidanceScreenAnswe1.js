import * as React from "react";
import { StyleSheet, View } from "react-native";
import Component2 from "../components/Component2";
import ErrorMessage from "../components/ErrorMessage";
import { Color } from "../GlobalStyles";

const SeniorGuidanceScreenAnswe1 = () => {
  return (
    <View style={styles.seniorGuidanceScreenAnswe1}>
      <Component2 />
      <View style={styles.blurbg} />
      <ErrorMessage />
    </View>
  );
};

const styles = StyleSheet.create({
  blurbg: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: Color.colorGray_900,
    width: 430,
    height: 933,
  },
  seniorGuidanceScreenAnswe1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default SeniorGuidanceScreenAnswe1;
