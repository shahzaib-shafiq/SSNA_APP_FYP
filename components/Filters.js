import * as React from "react";
import { Button } from "@ui-kitten/components";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Filters = () => {
  return (
    <View style={styles.filters}>
      <Button
        style={styles.buttonShadowBox}
        title="All"
        size="small"
        status="basic"
        appearance="ghost"
        color="rgba(255, 255, 255, 0.44)"
        textStyle={styles.buttonAllText}
        onPress={() => {}}
      >
        All
      </Button>
      <Button
        style={styles.buttonShadowBox}
        title="All"
        size="small"
        status="basic"
        appearance="ghost"
        color="rgba(255, 255, 255, 0.44)"
        textStyle={styles.buttonOldestText}
        onPress={() => {}}
      >
        oldest
      </Button>
      <Button
        style={styles.buttonShadowBox}
        title="All"
        size="small"
        status="basic"
        appearance="ghost"
        color="rgba(255, 255, 255, 0.44)"
        textStyle={styles.buttonLatestText}
        onPress={() => {}}
      >
        latest
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonAllText: {
    fontWeight: "600",
    fontFamily: "Inter",
  },
  buttonOldestText: {
    fontWeight: "600",
    fontFamily: "Inter",
  },
  buttonLatestText: {
    fontWeight: "600",
    fontFamily: "Inter",
  },
  allTypo: {
    textAlign: "center",
    color: Color.colorGray_100,
    fontFamily: FontFamily.inter,
    fontWeight: "600",
    fontSize: FontSize.size_smi,
  },
  buttonAll1: {
    width: 10,
    justifyContent: "center",
    paddingVertical: 2,
    paddingHorizontal: Padding.p_base,
    height: 27,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: Border.br_3xs,
    alignItems: "center",
    flexDirection: "row",
  },
  buttonShadowBox: {
    marginLeft: 14,
    width: 91,
    justifyContent: "center",
    height: 47,
    shadowOpacity: 5,
    elevation: 10,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: Border.br_3xs,
    alignItems: "center",
    flexDirection: "row",
  },
  filters: {
    position: "absolute",
    top: 30,
    left: 20,
    width: 222,
    height: 23,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Filters;
