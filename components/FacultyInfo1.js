import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const FacultyInfo1 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("FacultyInfo")}>
      <Text style={styles.facultyInfo2}>Faculty Info</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  facultyInfo2: {
    fontSize: FontSize.size_5xl,
    lineHeight: 24,
    fontFamily: FontFamily.poppins,
    color: Color.colorWhite,
    textAlign: "left",
    width: 247,
    height: 33,
  },
});

export default FacultyInfo1;
