import * as React from "react";
import { Image, Pressable, StyleSheet, View, Dimensions, ActivityIndicator, Alert, Linking } from "react-native";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Pdf from 'react-native-pdf'; // Import Pdf component from react-native-pdf
import TimetableContainer from "../components/TimetableContainer";
import { Padding, Color } from "../GlobalStyles"; // Import other styles from GlobalStyles

const Timetable = ({ route }) => {
  const navigation = useNavigation(); //for navigation
  const { userDetail } = route.params; //for user session

  return (
    <View style={styles.container}>
      {/* Timetable Container and Back Button */}
      <View style={styles.header}>
        <TimetableContainer
          locationCoordinates={require("../assets/menus-1.png")}
          busRoutesImageUrl="Timetable"
        />
        {/* BACK BUTTON */}
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.navigate("MAINPAGE", { userDetail })}
        >
          <Image
            // style={styles.icon}
            contentFit="cover"
            source={require("../assets/epback.png")}
          />
        </Pressable>
      </View>

      {/* PDF Viewer */}
      <View style={styles.pdfViewer}>
        <Pdf
          trustAllCerts={false}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/ssna-admin.appspot.com/o/Timetable%2F87c7307d-3c50-4b44-bd6b-8f5084fe446d?alt=media&token=1b3813cb-a740-43b8-8538-b46ddefcc332',
          }}
          page={1}
          scale={1.0}
          minScale={0.5}
          maxScale={3.0}
          renderActivityIndicator={() => (
            <ActivityIndicator color="black" size="large" />
          )}
          // enablePaging={true}
          // horizontal
          // onLoadProgress={(percentage) => console.log(`Loading :${percentage}`)}
          // onLoadComplete={() => console.log('Loading Complete')}
          // onPageChanged={(page, totalPages) => console.log(`${page}/${totalPages}`)}
          // onError={(error) => console.log(error)}
          // onPageSingleTap={(page) => alert(page)}
          // onPressLink={(link) => Linking.openURL(link)}
          // onScaleChanged={(scale) => console.log(scale)}
          // spacing={10}
          style={{ flex: 1, width: Dimensions.get('window').width }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Padding.p_3xs,
  },
  backButton: {
    position: "absolute",
    left: 15,
    top: 20,
    zIndex: 1 // Ensure the button is above the PDF viewer
  },
  pdfViewer: {
    marginTop:50,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default Timetable;
