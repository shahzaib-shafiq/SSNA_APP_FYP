import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Filters1 = () => {
  return (
    <View style={styles.filters}>
      <View style={[styles.filters1, styles.filtersShadowBox1]}>
        <View style={styles.filtersShadowBox} />
        <Text style={[styles.all, styles.mostTypo]}>All</Text>
      </View>
      <View style={[styles.filters2, styles.filtersShadowBox1]}>
        <View style={styles.filtersShadowBox} />
        <Text style={[styles.mostUpvoted, styles.mostTypo]}>most upvoted</Text>
      </View>
      <View style={[styles.filters3, styles.filters3Position]}>
        <View style={styles.filtersShadowBox} />
        <Text style={[styles.mostDownvoted, styles.mostTypo]}>
          most downvoted
        </Text>
      </View>
      <View style={[styles.filters4, styles.filters4Position]}>
        <Image
          style={[styles.filter1Icon1, styles.filters3Position]}
          contentFit="cover"
          source={require("../assets/filter-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filtersShadowBox1: {
    shadowOpacity: 1,
    elevation: 5.1,
    shadowRadius: 5.1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
  },
  mostTypo: {
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.inter,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    top: "14.89%",
    position: "absolute",
  },
  filters3Position: {
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  filters4Position: {
    right: "0%",
    top: "0%",
  },
  filtersShadowBox: {
    elevation: 4.4,
    shadowRadius: 4.4,
    backgroundColor: Color.colorGray_800,
    borderRadius: Border.br_5xs,
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    left: "0%",
    position: "absolute",
  },
  all: {
    width: "42.91%",
    left: "28.54%",
    height: "70.21%",
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.inter,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    top: "14.89%",
  },
  filters1: {
    width: "13.42%",
    right: "86.58%",
    left: "0%",
    shadowOpacity: 1,
    elevation: 5.1,
    shadowRadius: 5.1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    bottom: "57.91%",
    top: "7.01%",
    height: "35.07%",
    position: "absolute",
  },
  mostUpvoted: {
    width: "78.61%",
    left: "11.64%",
    height: "70.21%",
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.inter,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    top: "14.89%",
  },
  filters2: {
    width: "32.91%",
    right: "50.49%",
    left: "16.6%",
    bottom: "57.91%",
    shadowOpacity: 1,
    elevation: 5.1,
    shadowRadius: 5.1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    position: "absolute",
    top: "7.01%",
    height: "35.07%",
  },
  mostDownvoted: {
    height: "74.89%",
    width: "83.61%",
    left: "9.83%",
  },
  filters3: {
    width: "38.97%",
    top: "64.93%",
    right: "61.03%",
    shadowOpacity: 1,
    elevation: 5.1,
    shadowRadius: 5.1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    bottom: "0%",
    height: "35.07%",
  },
  filter1Icon1: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    bottom: "0%",
  },
  filters4: {
    height: "42.09%",
    width: "7.66%",
    left: "92.34%",
    shadowOpacity: 1,
    elevation: 5.1,
    shadowRadius: 5.1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    bottom: "57.91%",
    position: "absolute",
  },
  filters: {
    top: 101,
    left: 33,
    width: 368,
    height: 67,
    position: "absolute",
  },
});

export default Filters1;
