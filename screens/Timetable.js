import * as React from "react";
import { Image, Pressable, StyleSheet, View, Dimensions, ActivityIndicator, Alert, Linking } from "react-native";
import {Picker} from '@react-native-picker/picker';
import { Text } from "react-native";
import { useEffect, useState } from "react";
import database from '@react-native-firebase/database'; // Import database from Firebase
import TimetableContainer from "../components/TimetableContainer";
import { Padding, Color } from "../GlobalStyles"; // Import other styles from GlobalStyles
import { useNavigation } from "@react-navigation/native";
import Pdf from 'react-native-pdf';

const Timetable = ({ route }) => {
  const navigation = useNavigation(); //for navigation
  const { userDetail } = route.params; //for user session

  // For Searching Timetable
  const [TimetableInfo, setTimetableInfo] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);

  // Fetch Data From DATABASE
  const getData = () => {
    const db = database();
    const dbRef = db.ref('/Timetable');

    dbRef.on('value', (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const TimetableData = Object.keys(data).map((id) => ({
          id,
          Department: data[id].Department,
          img: data[id].img,
        }));
        setTimetableInfo(TimetableData);
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  // Find the URL of the PDF for the selected department
  useEffect(() => {
    if (selectedDepartment && TimetableInfo.length > 0) {
      const departmentInfo = TimetableInfo.find(item => item.Department === selectedDepartment);
      if (departmentInfo) {
        setPdfUrl(departmentInfo.img);
      } else {
        // Department not found
        setPdfUrl(null);
      }
    }
  }, [selectedDepartment, TimetableInfo]);

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
            contentFit="cover"
            source={require("../assets/epback.png")}
          />
        </Pressable>
      </View>

      {/* Department Selection */}
      <View style={styles.departmentSelector}>
        <Text>Select Department: </Text>
        <Picker
          selectedValue={selectedDepartment}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedDepartment(itemValue)
          }>
          <Picker.Item label="Select Department" value={null} />
          {TimetableInfo.map((item, index) => (
            <Picker.Item key={index} label={item.Department} value={item.Department} />
          ))}
        </Picker>
      </View>

      {/* PDF Viewer */}
      <View style={styles.pdfViewer}>
        {pdfUrl ? (
          <Pdf
            trustAllCerts={false}
            source={{ uri: pdfUrl }}
            page={1}
            scale={1.0}
            minScale={0.5}
            maxScale={3.0}
            renderActivityIndicator={() => (
              <ActivityIndicator color="black" size="large" />
            )}
            style={{ flex: 1, width: Dimensions.get('window').width }}
          />
        ) : (
          <Text>No PDF available for the selected department</Text>
        )}
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
  departmentSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
  },
  pdfViewer: {
    marginTop: 10,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default Timetable;
