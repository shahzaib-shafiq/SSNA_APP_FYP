import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TimetableContainer from "../components/TimetableContainer";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const BUSROUTES = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.busRoutes}>
      <TimetableContainer
        locationCoordinates={require("../assets/menus-11.png")}
        busRoutesImageUrl="Bus Routes Information"
        propMarginLeft={-116.5}
        propTop={184}
        onMenus1Press={() => navigation.navigate("DrawerMenu")}
      />
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
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={styles.groupShadowBox} />
        <Text style={[styles.route11, styles.routeTypo]}>Route # 1</Text>
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
      <View style={[styles.rectangleContainer, styles.groupLayout]}>
        <View style={styles.groupShadowBox} />
        <Text style={[styles.route71, styles.routeTypo]}>Route # 2</Text>
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
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={styles.groupShadowBox} />
        <Text style={[styles.route71, styles.routeTypo]}>Route # 3</Text>
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
    width: 349,
    left: "50%",
    position: "absolute",
  },
  routeTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.inriaSans,
    fontWeight: "300",
    textTransform: "uppercase",
    fontSize: FontSize.size_mini,
    top: 3,
    position: "absolute",
  },
  arrivalTypo: {
    fontFamily: FontFamily.inter,
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
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_4xs,
    top: 0,
    marginLeft: -174.5,
    height: 100,
    width: 349,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  route71: {
    left: 272,
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
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    color: Color.colorWhite,
  },
  button: {
    left: 253,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorDodgerblue,
    width: 91,
    height: 28,
    flexDirection: "row",
    padding: Padding.p_3xs,
    alignItems: "center",
    justifyContent: "center",
  },
  rectangleParent: {
    marginLeft: -176,
    top: 211,
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
  busRoutes: {
    flex: 1,
    width: "100%",
    height: 1011,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default BUSROUTES;
