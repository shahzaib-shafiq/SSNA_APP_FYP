import * as React from "react";
import { Image } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Filters1 = () => {
  return (
    <View style={styles.filtersMainStyle}>

      <View style={[styles.allStyle, styles.filtersShadowBox1]}>
        <View style={styles.filtersShadowBoxMain}>
          <Text style={[styles.allTxtStyle, styles.mostTypo]}>All</Text>
        </View>
      </View>

      <View style={[styles.mostUpvotedStyle, styles.filtersShadowBox1]}>
        <View style={styles.filtersShadowBoxMain}>
          <Text style={[styles.mostUpvotedTxtStyle, styles.mostTypo]}>most upvoted</Text>
        </View>

      </View>

      <View style={[styles.mostDownvoteStyle, styles.filtersShadowBox1]}>
        <View style={styles.filtersShadowBoxMain} >
          <Text style={[styles.mostDownvotedTxtStyle, styles.mostTypo]}>
            most downvoted
          </Text>
        </View>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  filtersMainStyle: {
    flexDirection: 'row',
    // alignContent: "center",
    // top: "25%",
    // left: "4%",
    // width: "90%",
    height: "80%",
    backgroundColor: "black",
  },
  filtersShadowBox1: {
    shadowRadius: 5.1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.5)",
  },
  mostTypo: {
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.inter,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    top: "10%",
  },
  filtersShadowBoxMain: {
    borderRadius: Border.br_5xs,
    backgroundColor: "white",
    elevation: 2,
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "85%",
    height: "100%",
    left: "0%",
  },
  allTxtStyle: {
    width: "42.91%",
    left: "28.54%",
    height: "80.21%",
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.inter,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    top: "14.89%",
  },
  mostUpvotedTxtStyle: {
    width: "78.61%",
    left: "11.64%",
    height: "70.21%",
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.inter,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
  },
  mostDownvotedTxtStyle: {
    height: "74.89%",
    width: "83.61%",
    left: "9.83%",
  },
  mostDownvotePosition: {
    left: "50%",
  },
  mostUpvotedStyle: {
    width: "32.91%",
    left: "16.6%",
    bottom: "57.91%",
    top: "0%",
    height: "35.07%",
  },
  allStyle: {
    width: "13.42%",
    right: "86.58%",
    left: "0%",
    top: "0%",
    height: "35.07%",
  },
  mostDownvoteStyle: {
    width: "38.97%",
    top: "0%",
    shadowOpacity: 1,
    elevation: 5.1,
    shadowRadius: 5.1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    left: "20%",
    shadowColor: "rgba(0, 0, 0, 0.15)",
    // bottom: "0%",
    height: "35%",
  },
});

export default Filters1;
