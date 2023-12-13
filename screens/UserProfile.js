import * as React from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "react-native-linear-gradient";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { StyleSheet, Pressable, Text, View } from "react-native";

const UserProfile = ({ route }) => {

  const navigation = useNavigation();   //for stack navigation
  const { userDetail } = route.params;  //user session

  return (
    <View style={[styles.userprofile, styles.iconLayout]}>
      
      {/* HEADER */}
      <LinearGradient
        style={styles.upper}
        locations={[0, 0]}
        colors={["rgba(77, 142, 169, 0)", "#4d7da9"]}
      >
        <Pressable
          style={styles.epback}
          onPress={() =>
            navigation.navigate("MAINPAGE",{userDetail})
          }
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/epback.png")}
          />
        </Pressable>
        <Text style={styles.userProfile}>User Profile</Text>
      </LinearGradient>


    {/* USER IMAGE */}
      <Image
        style={styles.userprofilephotoIcon}
        contentFit="cover"
        source={{ uri: userDetail.photo }}
        />

    {/* USER NAME */}
      <Text style={styles.username}>
        {userDetail.familyName}
      </Text>

    {/* USER EMAIL */}
      <Text style={[styles.email, styles.emailTypo]}>
        Email
      </Text>
      <Text style={[styles.fetchedEmail, styles.emailTypo]}>
        {userDetail.email}
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  emailTypo: {
    textAlign: "left",
    left: 41,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  icon: {
    height: "100%",
    top:"8%",
    left:"-80%",
  },
  epback: {
    left: 56,
    top: 19,
    width: 38,
    height: 33,
    position: "absolute",
  },
  userProfile: {
    top: "33%",
    left: "21%",
    color: Color.colorWhite,
    width: 154,
    height: 58,
    justifyContent: "center",
    display: "flex",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  upper: {
    left: "-0%",
    width: "100%",
    height: "8%",
    backgroundColor: "transparent",
    top: "-1%",
    position: "absolute",
  },
  userprofilephotoIcon: {
    top: "15%",
    borderRadius: 110, 
    left: "24%",
    width: "51.5%",

    height: "26%",
    position: "absolute",
  },
  username: {
    left: "6%",
    top: "42%",
    fontSize: 35,
    width: 348,
    height: "29%",
    color: Color.colorDimgray_200,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  email: {
    top: "55%",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
  },
  fetchedEmail: {
    top: "60%",
    fontSize: FontSize.size_xl,
  },
  userprofile: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
  },
});

export default UserProfile;
