import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Filters = () => {
  return (
    <View style={styles.filters}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {}}
      >
        <Text style={styles.buttonText}>All</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {}}
      >
        <Text style={styles.buttonText}>Oldest</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {}}
      >
        <Text style={styles.buttonText}>Latest</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: "600",
    fontFamily: "Inter",
    color: "rgba(255, 255, 255, 0.44)",
  },
  button: {
    marginLeft: 14,
    width: 91,
    justifyContent: "center",
    height: 47,
    borderRadius: Border.br_3xs,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "transparent", // Set your desired background color
    borderWidth: 1, // Add a border if needed
    borderColor: "rgba(255, 255, 255, 0.44)", // Adjust border color
  },
  filters: {
    position: "absolute",
    top: 30,
    left: 20,
    flexDirection: "row",
  },
});

export default Filters;
