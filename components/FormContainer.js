import * as React from "react";
import { Image } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const FormContainer = ({ route, userDetail, query }) => {
  
  const navigation = useNavigation();

  console.log('FC-User Detail:', userDetail); // Make sure this prints the correct user details
  console.log('FC-Route:', route);
  console.log('FC-query:', query);

  // Function to handle deletion of query
  const handleDeleteQuery = () => {
    // Perform deletion of query from the database
    // Navigate back to SeniorGuidanceScreenMain
    navigation.navigate("SeniorGuidanceScreenMain");
  };

  return (
    <View style={styles.upper}>
      <LinearGradient
        style={[styles.bluebg, styles.iconLayout]}
        locations={[0, 0.59]}
        colors={["rgba(77, 142, 169, 0)", "#4d7da9"]}
      />
      <Pressable
        style={styles.menus1}
        onPress={() => navigation.navigate("SeniorGuidanceScreenMain",{userDetail, route})}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/epback.png")}
        />
      </Pressable>

      <Text style={[styles.HeaderTitleStyle, styles.text1Typo]}>
        Query
      </Text>

      {/* Conditional rendering for delete button */}
      {query.AuthorId === userDetail.id && (
        <Pressable
          style={styles.plusButtonGB}
          onPress={handleDeleteQuery}
        >
          <Text style={styles.plusSign}>-</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    height: "100%",
  },
  text1Typo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inter,
    fontWeight: "700",
    position: "absolute",
  },
  bluebg: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "transparent",
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  menus1: {
    left: "5.59%",
    top: "78.8%",
    right: "84.01%",
    bottom: "7.08%",
    width: "10.39%",
    height: "14.12%",
    position: "absolute",
  },
  HeaderTitleStyle: {
    height: "15.04%",
    width: "57.33%",
    top: "79%",
    left: "20%",
    fontSize: FontSize.size_5xl,
  },
  plusButtonGB: {
    height: "13.39%",
    width: "9.61%",
    top: "79.57%",
    bottom: "7.04%",
    left: "81.06%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGray_1100,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 6.1,
    elevation: 6.1,
    shadowOpacity: 1,
    position: "absolute",
  },
  plusSign: {
    height: "500%",
    width: "50%",
    top: "-42%",
    color: Color.colorWhite,
    fontFamily: FontFamily.inter,
    left: "35%",
    fontSize: FontSize.size_21xl,
  },
  upper: {
    top: -163,
    left: -1,
    width: 431,
    height: 233,
    position: "absolute",
  },
});

export default FormContainer;
