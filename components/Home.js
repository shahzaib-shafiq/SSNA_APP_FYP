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

const Home = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("MAINPAGE")}>
      <Text style={styles.home2}>Home</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  home2: {
    fontSize: FontSize.size_5xl,
    lineHeight: 24,
    fontFamily: FontFamily.poppins,
    color: Color.colorWhite,
    textAlign: "left",
    width: 150,
    height: 33,
  },
});

export default Home;
