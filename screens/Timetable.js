import * as React from "react";
import { Image, Pressable } from "react-native";
import { Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TimetableContainer from "../components/TimetableContainer";
import { Padding, Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const Timetable = ({route}) => {
  
  const navigation = useNavigation(); //for navigation
  const { userDetail } = route.params; //for user session

  return (
  
    <View style={styles.timetable}>
      
      <TimetableContainer
        locationCoordinates={require("../assets/menus-1.png")}
        busRoutesImageUrl="Timetable"
      />
      
        {/* BACK BUTTON */}
       <Pressable
          style={styles.epback}
          onPress={() =>
            navigation.navigate("MAINPAGE",{userDetail})
          }
        >
        <Image
              // style={styles.icon}
              contentFit="cover"
              source={require("../assets/epback.png")}
        />
        </Pressable>

      {/* ROUND BUTTONS  */}
      <View style={[styles.viewTimtableButton, styles.buttonFlexBox]}>
        <Text style={styles.performAction}>View Timetable</Text>
      </View>
      <View style={[styles.setReminderButton, styles.buttonFlexBox]}>
        <Text style={styles.performAction}>Set Reminder</Text>
      </View>
      
      {/* TIMETABLE IMAGE */}
      <View style={styles.timetableChild}>
        <Image
          style={styles.timetableImage} // Add this style
          resizeMode="cover" // Set the resizeMode to 'contain'
          source={require("../assets/Timetable.png")}
        />
      </View>

    </View>

  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    padding: Padding.p_3xs,
    flexDirection: "row",
    height: 45,
    borderRadius: Border.br_31xl,
    top:"41%",
    position: "absolute",
  },
  performAction: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.inter,
  },
  viewTimtableButton: {
    left: "55%",
    backgroundColor: Color.colorDodgerblue,
    width: 121,
  },
  setReminderButton: {
    left: "16%",
    backgroundColor: "#ae0000",
    width: 121,
  },
  epback: {
    left: "5%",
    top: "2.5%",
    width: 38,
    height: 33,
    position: "absolute",
  },
  timetableChild: {
    top: "12%",
    borderRadius: 17,
    backgroundColor: Color.colorMistyrose,
    width: 332,
    height: 172,
    alignSelf: "center",
    borderWidth: 3, // Set the desired border width
    borderColor: 'grey', // Set the desired border color
  },
  timetableImage: {
    flex: 1, // Make the image take up the entire container
    borderRadius: 17,
    width: 332,
    height: 172,
  },
  timetable: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
  },
});

export default Timetable;
