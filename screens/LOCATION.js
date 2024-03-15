import * as React from "react";
// import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TimetableContainer from "../components/TimetableContainer";
import { Color } from "../GlobalStyles";
import { Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const LOCATION = ({route}) => {
  const navigation = useNavigation();
  const { userDetail } = route.params;  //user session

  return (
    <View style={styles.location}>
      <TimetableContainer
        locationCoordinates={require("../assets/menus-1.png")}
        busRoutesImageUrl="LOCATION"
        propMarginLeft={-115.5}
        propTop={185}
        onMenus1Press={() => navigation.navigate("DrawerMenu")}
      />
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/maps.png")}
      />

      {/* SEARCH BAR */}
      <View style={styles.searchbar}>
      <TextInput
          style={styles.searchbarInput}
          placeholder="Search any place"
          onChangeText={(text) => setSearchTerm(text)}
        />
        <View style={[styles.searchbarItem, styles.searchbarLayout]} />
        <Image
          style={styles.search1Icon1}
          contentFit="cover"
          source={require("../assets/search-12.png")}
        />
      </View>

      {/* BACK BUTTON */}
      <View style={[styles.screenmain, styles.back_button]} />

      <Pressable
      style={styles.menus1}
      onPress={() => navigation.navigate("MAINPAGE",{userDetail})}
      >
      <Image
        style={styles.back_button}
        contentFit="cover"
        source={require("../assets/epback.png")}
      />
      </Pressable>
          </View>
  );
};

const styles = StyleSheet.create({
  searchbarLayout: {
    borderRadius: Border.br_3xs,
    height: 48,
    top: 0,
    position: "absolute",
  },
  search1Icon1: {
    top: 13,
    left: 307,
    width: 22,
    height: 22,
    position: "absolute",
  },
  searchbarInput: {
    height: 40,
    borderColor: 'rgba(128, 128, 128, 0.0)',
    fontSize: 16,
    borderWidth: 1,
    backgroundColor: "white",
    paddingHorizontal: "10%",
    borderRadius: Border.br_3xs,
    flex: 1,
    elevation: 2, // Add elevation for Android shadow
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },

  image1Icon: {
    position: "absolute",
    top: 180,
    // margin:10,
    right: 1,
    alignContent: "center",
    // width: 388,
    // height: 396,
  },
  location: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },

  back_button: {
    left:"3%",
    top:"60%",
    // height: "90%",
    // width: "90%",
  },

  searchbarItem: {
    left: 293,
    backgroundColor: Color.colorSteelblue,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.15)",
    borderWidth: 1,
    width: 50,
  },


  search1Icon1: {
    top: 13,
    left: 307,
    width: 22,
    height: 22,
    position: "absolute",
  },
 searchbar: {
  top: 101,
  left: 40,
  height: 48,
  width: 343,
  position: "absolute",
  // Android
  elevation: 5,
  // iOS
  shadowColor: "rgba(0, 0, 0, 0.3)",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.5,
  shadowRadius: 4,
},
});

export default LOCATION;
