import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Logout = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.logout1, style]}
      onPress={() => navigation.navigate("HOMESCREEN")}
    >
      <Image
        style={styles.powerOff1Icon1}
        contentFit="cover"
        source={require("../assets/poweroff-1.png")}
      />
      <Text style={styles.logout2}>LOGOUT</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  powerOff1Icon1: {
    width: 28,
    height: 28,
  },
  logout2: {
    fontSize: FontSize.size_5xl,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.poppins,
    color: Color.colorWhite,
    textAlign: "left",
    width: 105,
    height: 27,
    marginLeft: 15,
  },
  logout1: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
});

export default Logout;
