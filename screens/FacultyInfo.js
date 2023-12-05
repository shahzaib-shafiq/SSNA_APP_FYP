import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const FacultyInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.facultyInfo}>
      <View style={styles.homeScreen}>
        <View style={[styles.screenmain, styles.iconLayout]} />
      </View>
      <View style={[styles.facultyInfoChild, styles.facultyShadowBox]} />
      <View style={[styles.facultyInfoItem, styles.facultyShadowBox]} />
      <View style={[styles.facultyInfoInner, styles.facultyShadowBox]} />
      <View style={[styles.upper, styles.upperPosition]}>
        <LinearGradient
          style={[styles.bluebg, styles.upperPosition]}
          locations={[0, 0.59]}
          colors={["rgba(77, 142, 169, 0)", "#4d7da9"]}
        />
        <Pressable
          style={styles.menus1}
          onPress={() => navigation.navigate("DrawerMenu")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/menus-141.png")}
          />
        </Pressable>
        <Text style={styles.facultyInformation}>Faculty Information</Text>
      </View>
      <View style={[styles.filters, styles.filtersLayout]}>
        <View style={styles.filtersShadowBox1}>
          <View style={styles.filtersShadowBox} />
          <Text style={[styles.cs, styles.csTypo]}>CS</Text>
        </View>
      </View>
      <View style={[styles.filters2, styles.filtersLayout]}>
        <View style={styles.filtersShadowBox1}>
          <View style={styles.filtersShadowBox} />
          <Text style={[styles.se, styles.csTypo]}>SE</Text>
        </View>
      </View>
      <View style={[styles.filters4, styles.filtersLayout]}>
        <View style={styles.filtersShadowBox1}>
          <View style={styles.filtersShadowBox} />
          <Text style={[styles.ee, styles.csTypo]}>EE</Text>
        </View>
      </View>
      <View style={[styles.filters6, styles.filtersLayout]}>
        <View style={styles.filtersShadowBox1}>
          <View style={styles.filtersShadowBox} />
          <Text style={[styles.bba, styles.csTypo]}>BBA</Text>
        </View>
      </View>
      <View style={[styles.query, styles.queryPosition]}>
        <Image
          style={[styles.queryChild, styles.queryLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-7.png")}
        />
        <Text style={[styles.drHuberman, styles.drHubermanTypo]}>
          Dr. Huberman
        </Text>
        <Text
          style={styles.electricalEngineering}
        >{`Electrical Engineering `}</Text>
        <Text style={[styles.softwareEngineering, styles.computerScienceTypo]}>
          Software Engineering
        </Text>
        <View style={styles.button}>
          <Text style={[styles.postQuestion, styles.postQuestionTypo]}>
            View Details
          </Text>
        </View>
      </View>
      <View style={[styles.query1, styles.queryLayout]}>
        <Image
          style={[styles.queryChild, styles.queryLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-71.png")}
        />
        <Text style={[styles.drSaraPaul1, styles.drHubermanTypo]}>
          Dr. Sara Paul
        </Text>
        <Text style={[styles.computerScience, styles.computerScienceTypo]}>
          Computer Science
        </Text>
        <View style={styles.button}>
          <Text style={[styles.postQuestion, styles.postQuestionTypo]}>
            View Details
          </Text>
        </View>
      </View>
      <View style={[styles.query2, styles.queryLayout]}>
        <Image
          style={[styles.queryChild, styles.queryLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-72.png")}
        />
        <Text style={[styles.drSaraPaul1, styles.drHubermanTypo]}>
          Dr. Motaziz
        </Text>
        <View style={styles.button}>
          <Text style={[styles.postQuestion, styles.postQuestionTypo]}>
            View Details
          </Text>
        </View>
      </View>
      <View style={styles.searchbar}>
        <View style={[styles.searchbarChild, styles.searchbarLayout]} />
        <View style={[styles.searchbarItem, styles.searchbarLayout]} />
        <Text style={[styles.searchAnyFaculty1, styles.postQuestionTypo]}>
          Search any faculty member
        </Text>
        <Image
          style={styles.search1Icon1}
          contentFit="cover"
          source={require("../assets/search-12.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  facultyShadowBox: {
    height: 122,
    width: 334,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xl,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  upperPosition: {
    height: 233,
    width: 430,
    left: "50%",
    marginLeft: -215,
    position: "absolute",
  },
  filtersLayout: {
    height: 20,
    width: 45,
    top: 105,
    position: "absolute",
  },
  csTypo: {
    height: 14,
    color: Color.colorGray_100,
    fontSize: FontSize.size_xs,
    top: 3,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontWeight: "600",
    position: "absolute",
  },
  queryPosition: {
    left: 66,
    width: 328,
  },
  queryLayout: {
    height: 93,
    position: "absolute",
  },
  drHubermanTypo: {
    height: 27,
    width: 194,
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_lg,
    marginLeft: -30,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontWeight: "600",
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  computerScienceTypo: {
    width: 165,
    color: Color.colorDimgray_500,
    fontSize: FontSize.size_xs,
    height: 23,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontWeight: "600",
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  postQuestionTypo: {
    textAlign: "center",
    fontFamily: FontFamily.inter,
  },
  searchbarLayout: {
    borderRadius: Border.br_3xs,
    height: 48,
    top: 0,
    position: "absolute",
  },
  screenmain: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
    height: "100%",
  },
  homeScreen: {
    top: 14,
    left: -2,
    width: 375,
    position: "absolute",
    height: 812,
  },
  facultyInfoChild: {
    top: 258,
    left: 52,
    width: 334,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xl,
  },
  facultyInfoItem: {
    top: 436,
    left: 52,
    width: 334,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xl,
  },
  facultyInfoInner: {
    top: 612,
    left: 50,
  },
  bluebg: {
    bottom: 0,
    backgroundColor: "transparent",
  },
  menus1: {
    top: 183,
    width: 44,
    height: 33,
    left: 15,
    position: "absolute",
  },
  facultyInformation: {
    marginTop: 66.5,
    marginLeft: -106,
    fontSize: FontSize.size_5xl,
    width: 257,
    height: 23,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontWeight: "600",
    top: "50%",
    color: Color.colorWhite,
    left: "50%",
    position: "absolute",
  },
  upper: {
    bottom: 742,
  },
  filtersShadowBox: {
    elevation: 4.4,
    shadowRadius: 4.4,
    backgroundColor: Color.colorGray_800,
    borderRadius: Border.br_5xs,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    left: 0,
    top: 0,
    height: 20,
    width: 45,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  cs: {
    left: 13,
    width: 19,
  },
  filtersShadowBox1: {
    elevation: 5.1,
    shadowRadius: 5.1,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    left: 0,
    top: 0,
    height: 20,
    width: 45,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  filters: {
    left: 51,
  },
  se: {
    left: 14,
    width: 16,
  },
  filters2: {
    left: 103,
  },
  ee: {
    width: 15,
    left: 15,
  },
  filters4: {
    left: 155,
  },
  bba: {
    left: 10,
    width: 25,
  },
  filters6: {
    left: 207,
  },
  queryChild: {
    borderRadius: Border.br_mini,
    width: 93,
    left: 0,
    top: 0,
    height: 93,
  },
  drHuberman: {
    marginTop: -203,
  },
  electricalEngineering: {
    marginTop: -180,
    width: 161,
    color: Color.colorDimgray_500,
    marginLeft: -30,
    fontSize: FontSize.size_xs,
    height: 23,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontWeight: "600",
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  softwareEngineering: {
    marginTop: 184,
    marginLeft: -28,
  },
  postQuestion: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    color: Color.colorWhite,
    textAlign: "center",
  },
  button: {
    top: 65,
    left: 186,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorDodgerblue,
    width: 115,
    height: 28,
    flexDirection: "row",
    padding: Padding.p_3xs,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  query: {
    top: 273,
    height: 414,
    width: 328,
    position: "absolute",
  },
  drSaraPaul1: {
    marginTop: -42.5,
  },
  computerScience: {
    marginTop: -15.5,
    marginLeft: -30,
    width: 165,
  },
  query1: {
    top: 451,
    width: 328,
    left: 66,
  },
  query2: {
    top: 629,
    left: 68,
    width: 328,
  },
  searchbarChild: {
    backgroundColor: "#e2e2e2",
    width: 343,
    borderRadius: Border.br_3xs,
    left: 0,
  },
  searchbarItem: {
    left: 293,
    backgroundColor: Color.colorSteelblue,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.15)",
    borderWidth: 1,
    width: 50,
  },
  searchAnyFaculty1: {
    top: 16,
    fontSize: FontSize.size_mini,
    fontWeight: "300",
    color: "rgba(105, 105, 105, 0.65)",
    width: 222,
    height: 19,
    left: 0,
    position: "absolute",
  },
  search1Icon1: {
    top: 13,
    left: 307,
    width: 22,
    height: 22,
    position: "absolute",
  },
  searchbar: {
    top: 161,
    left: 43,
    height: 48,
    width: 343,
    position: "absolute",
  },
  facultyInfo: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default FacultyInfo;
