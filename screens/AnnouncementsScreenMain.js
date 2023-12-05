import * as React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Icon } from "@ui-kitten/components";
import Component1 from "../components/Component1";
import Filters from "../components/Filters";
import { Color } from "../GlobalStyles";

const AnnouncementsScreenMain = () => {
  return (
    <View style={[styles.announcementsScreenMain1, styles.screenmainLayout]}>
      <View style={styles.homeScreen}>
        <View style={[styles.screenmain, styles.viewPosition]} />
      </View>
      <Component1 />
      <Filters />
    </View>
  );
};

const styles = StyleSheet.create({
  screenmainLayout: {
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  viewPosition: {
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  screenmain: {
    height: "100%",
    bottom: "0%",
    left: "0%",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  homeScreen: {
    top: 14,
    left: -2,
    width: 375,
    height: 812,
    position: "absolute",
  },
  announcementsScreenMain1: {
    flex: 1,
    height: 932,
    overflow: "hidden",
  },
});

export default AnnouncementsScreenMain;
