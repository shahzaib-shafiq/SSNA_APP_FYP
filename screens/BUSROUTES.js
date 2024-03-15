import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TimetableContainer from "../components/TimetableContainer";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";
import { ColorProperties } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

const BUSROUTES = ({route}) => {
  const navigation = useNavigation();
  const { userDetail } = route.params;  //user session
  return (
    <View style={styles.busRoutes}>
      <TimetableContainer
        locationCoordinates={require("../assets/menus-11.png")}
        busRoutesImageUrl="Bus Routes Information"
        propMarginLeft={-116.5}
        propTop={184}
        // onMenus1Press={() => navigation.navigate("DrawerMenu")}
      />
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

{/* SEARCH BAR
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
      </View> */}

      <View style={[styles.rectangleParent, styles.groupLayout]}>
        <View style={styles.groupShadowBox} />
        <Text style={[styles.route71, styles.routeTypo]}>Route # 7</Text>
        <Text style={[styles.arrival, styles.arrivalTypo]}>Arrival</Text>
        <Text style={[styles.departure, styles.arrivalTypo]}>Departure</Text>
        <Text style={[styles.am, styles.amTypo]}>07:00 a.m</Text>
        <Text style={[styles.pm, styles.pmPosition]}>08:45 p.m</Text>
        <View style={[styles.button, styles.pmPosition]}>
          <Text style={[styles.postQuestion, styles.arrivalTypo]}>
            View Details
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 100,
    width: 359,
    left: "50%",
    right: "50%",
    position: "absolute",
  },
  back_button: {
    left:"3%",
    top:"60%",
    // height: "90%",
    // width: "90%",
  },
  routeTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.inriaSans,
    fontWeight: "300",
    textTransform: "uppercase",
    // fontSize: FontSize.size_mini,
    // fontSize:
    top: 3,
    position: "absolute",
  },
  arrivalTypo: {
    fontFamily: FontFamily.inter,
    fontSize: 12,
    textAlign: "center",
  },
  amTypo: {
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.inter,
    textAlign: "center",
    color: Color.colorBlack,
  },
  pmPosition: {
    top: 68,
    position: "absolute",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 45,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_4xs,
    top: 0,
    marginLeft: -174.5,
    height: 115,
    width: 349,
    left: "50%",
    position: "absolute",
    // backgroundColor: Color.colorWhite,
    backgroundColor: "rgba(10, 10, 10, 0.1)",
  },
  route71: {
    left: 272,
    // top: 100
  },
  arrival: {
    top: 58,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.inter,
    left: 15,
    color: Color.colorBlack,
    fontWeight: "300",
    textTransform: "uppercase",
    position: "absolute",
  },
  departure: {
    top: 18,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.inter,
    left: 15,
    color: Color.colorBlack,
    fontWeight: "300",
    textTransform: "uppercase",
    position: "absolute",
  },
  am: {
    top: 28,
    left: 14,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  pm: {
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.inter,
    textAlign: "center",
    color: Color.colorBlack,
    left: 15,
    top: 68,
  },
  postQuestion: {
    top: 0,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    color: Color.colorWhite,
  },

  button: {
    right: 10,
    top: 100, // Adjust this value to move the button higher
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorDodgerblue,
    // backgroundColor: Color.colorWhite,
    width: 100,
    height: 40,
    padding: Padding.p_3xs,
    alignItems: "center", // Use center for alignment
    justifyContent: "center",
    
    // // left: 250,
    // right: 10,
    // top: 10,
    // borderRadius: Border.br_7xs,
    // backgroundColor: Color.colorDodgerblue,
    // width: 100,
    // height: 40,
    // // flexDirection: "row",
    // padding: Padding.p_3xs,
    // alignItems: "left",
    // justifyContent: "center",
  },
  rectangleParent: {
    marginLeft: -176,
    top: 100,
  },
  route11: {
    left: 273,
  },
  rectangleGroup: {
    marginLeft: -175,
    top: 348,
  },
  rectangleContainer: {
    marginLeft: -174,
    top: 485,
  },
  groupView: {
    marginLeft: -173,
    top: 622,
  },
  // busRoutes: {
  //   flex: 1,
  //   width: "100%",
  //   height: 1011,
  //   overflow: "hidden",
  //   backgroundColor: Color.colorWhite,
  // }, 
});

export default BUSROUTES;
