import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TimetableContainer from "../components/TimetableContainer";
import { Color } from "../GlobalStyles";

const LOCATION = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.location}>
      <TimetableContainer
        locationCoordinates={require("../assets/menus-1.png")}
        busRoutesImageUrl="LOACTION"
        propMarginLeft={-115.5}
        propTop={185}
        onMenus1Press={() => navigation.navigate("DrawerMenu")}
      />
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image1Icon: {
    position: "absolute",
    top: 319,
    left: 22,
    width: 388,
    height: 396,
  },
  location: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default LOCATION;
