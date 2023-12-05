import * as React from "react";
import { StyleSheet, View } from "react-native";
import Query2 from "../components/Query2";
import Query1 from "../components/Query1";
import Query from "../components/Query";
import Upper2 from "../components/Upper2";
import Filters1 from "../components/Filters1";
import { Color } from "../GlobalStyles";

const SeniorGuidanceScreenMain = () => {
  return (
    <View style={[styles.seniorGuidanceScreenMain1, styles.screenmainLayout]}>
      <View style={styles.homeScreen}>
        <View style={[styles.screenmain, styles.screenmainLayout]} />
      </View>
      <Query2 />
      <Query1 />
      <Query />
      <Upper2 />
      <Filters1 />
    </View>
  );
};

const styles = StyleSheet.create({
  screenmainLayout: {
    width: "100%",
    backgroundColor: Color.colorWhite,
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
    height: 812,
    position: "absolute",
  },
  seniorGuidanceScreenMain1: {
    flex: 1,
    height: 932,
    overflow: "hidden",
  },
});

export default SeniorGuidanceScreenMain;
