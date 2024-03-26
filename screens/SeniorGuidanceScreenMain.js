import * as React from "react";
import Query from "../components/Query";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import Upper2 from "../components/Upper2";
import Filters1 from "../components/Filters1";
import { ScrollView, StyleSheet, View, Text } from "react-native";

const SeniorGuidanceScreenMain = ({ route }) => {
  const { userDetail } = route.params;

  return (
    <View style={styles.seniorGuidanceScreenMain1}>

      {/* <View style={{ zIndex: 1 }}> */}
        <Upper2 route={route} userDetail={userDetail} style={{ zIndex: 1 }} />
      {/* </View> */}

      {/* <ScrollView style={styles.scrollableView}> */}
        {/* <View style={styles.contentContainer}> */}
          {/* <Filters1 /> */}
          <Query route={route} userDetail={userDetail} />
        {/* </View> */}
      {/* </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  seniorGuidanceScreenMain1: {
    flex: 1, // Use flex: 1 for the main container
  },
  scrollableView: {
    flex: 1, // Ensure ScrollView can expand
  },
  contentContainer: {
    paddingTop: "200%", // Adjust this value based on the height of FormContainer
    top: "10%",
    flexGrow: 1, // Ensures the container can grow to fit its content
    alignItems: 'center', // Center children horizontally in the container
    justifyContent: 'flex-start', // Align children to start vertically
  },
});

export default SeniorGuidanceScreenMain;
