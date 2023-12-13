import React, { useMemo } from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  ImageSourcePropType,
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { Image } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TimetableContainer = ({
  locationCoordinates,
  busRoutesImageUrl,
  propMarginLeft,
  propTop,
  // onMenus1Press,
}) => {
  const timetableStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
      ...getStyleValue("top", propTop),
    };
  }, [propMarginLeft, propTop]);

  return (
    <View style={[styles.upper, styles.upperLayout]}>
      <LinearGradient
        style={[styles.bluebg, styles.upperLayout]}
        locations={[0, 0.59]}
        colors={["rgba(77, 142, 169, 0)", "#4d7da9"]}
      />
      {/* <Pressable style={styles.menus1} onPress={onMenus1Press}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={locationCoordinates}
        />
      </Pressable> */}
      <Text style={[styles.timetable, timetableStyle]}>
        {busRoutesImageUrl}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({

  back_button: {
    left:"25%",
    top:"8%",
    height: "90%",
    width: "90%",
  },
  
  upperLayout: {
    height: 233,
    width: 435,
    position: "absolute",
  },
  bluebg: {
    top: 0,
    right: 0,
    backgroundColor: "transparent",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  // menus1: {
  //   top: 184,
  //   right: 366,
  //   width: 45,
  //   height: 33,
  //   position: "absolute",
  // },
  timetable: {
    marginLeft: -115.5,
    top: 185,
    left: "50%",
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    // fontFamily: FontFamily.inter,
    color: Color.colorWhite,
    textAlign: "left",
    width: 272,
    // height: 23,
    position: "absolute",
  },
  upper: {
    top: -163,
    right: -3,
  },
});

export default TimetableContainer;
