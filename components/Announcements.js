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

const Announcements = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("AnnouncementsScreenMain")}>
      <Text style={styles.announcements2}>Announcements</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  announcements2: {
    fontSize: FontSize.size_5xl,
    lineHeight: 24,
    fontFamily: FontFamily.poppins,
    color: Color.colorWhite,
    textAlign: "left",
    width: 243,
    height: 33,
  },
});

export default Announcements;
