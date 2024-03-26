import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, Pressable, Image } from 'react-native';
import axios from 'axios';
import XLSX from 'xlsx';
import database from '@react-native-firebase/database'; //for firebase connection
import moment from 'moment';
import TimetableContainer from "../components/TimetableContainer";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const BusRoutesPage = ({ route }) => {

  const navigation = useNavigation();
  const { userDetail } = route.params;  //user session

  const [excelData, setExcelData] = useState([]);
  const [routesInfo, setRoutesInfo] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const formatTime = (timeString) => {
    // Parse the time string and convert it to a JavaScript Date object
    const time = moment(timeString, 'h:mm A').toDate();

    // Format the JavaScript Date object to the desired time format
    return moment(time).format('h:mm A');
  };

  const fetchAndProcessExcel = async (url) => {
    try {
      const response = await axios.get(url, {
        responseType: 'arraybuffer', // Important for handling binary data
      });
  
      // Convert array buffer to binary string
      const data = new Uint8Array(response.data);
      const binaryString = data.reduce((acc, byte) => acc + String.fromCharCode(byte), '');
  
      // Read the Excel file
      const workbook = XLSX.read(binaryString, { type: 'binary' });
  
      // Get the first sheet
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
  
      // Convert sheet to JSON format with raw values to preserve date formats
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1, raw: false });
  
      // Process columns in pairs
      const routes = [];
      // Assuming data starts from the first column and each route info spans two columns
      for (let col = 0; col < jsonData[0].length; col += 4) {
        let currentRoute = null;
  
        // Iterate through rows
        for (let row = 0; row < jsonData.length; row++) {
          // Current cell and the next one in the row
          const cellValue = jsonData[row][col] || "";
          const nextCellValue = jsonData[row][col + 1] || "";
  
          // Start of a new route
          if (cellValue.startsWith("Route - ")) {
            if (currentRoute) {
              routes.push(currentRoute); // Push the previous route before starting a new one
            }
            currentRoute = {
              routeNumber: cellValue,
              places: [],
              departureTimes: [],
              authorizedPerson: ""
            };
          }
          // End of a route
          else if (cellValue.startsWith("Authorized Person: ")) {
            if (currentRoute) {
              currentRoute.authorizedPerson = nextCellValue;
              routes.push(currentRoute);
              currentRoute = null; // Reset for potentially another route in the same columns
            }
          }
          // Middle of a route (places and times)
          else if (currentRoute && cellValue && cellValue !== "place" && nextCellValue !== "Dep. Time") {
            currentRoute.places.push(cellValue);
            currentRoute.departureTimes.push(nextCellValue);
          }
        }
        // In case the last route does not end with "Authorized Person"
        if (currentRoute) {
          routes.push(currentRoute);
        }
      }
  
      // Update state with routes info
      setRoutesInfo(routes);
  
    } catch (error) {
      console.error('Error fetching or processing Excel file:', error);
    }
  };
  

  useEffect(() => {
    const db = database();
    const dbRef = db.ref('/BusRoutes');

    dbRef.on('value', (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const busRoutesData = Object.keys(data).map(key => ({
          id: data[key].id,
          SheetLink: data[key].SheetLink,
        }));

        busRoutesData.forEach(route => {
          fetchAndProcessExcel(route.SheetLink);
        });
      }
    });
  }, []);

  const HighlightText = ({ text, highlight, correspondingTime }) => {
    if (!highlight.trim()) {
      return (
        <Text>
          {text} {correspondingTime}
        </Text>
      );
    }
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <Text>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <Text key={index} style={styles.highlightedText}>
              {part} {correspondingTime}
            </Text>
          ) : (
            <Text key={index}>
              {part} {correspondingTime}
            </Text>
          )
        )}
      </Text>
    );
  };


  const filteredRoutes = routesInfo.filter(route => {
    return (
      route.routeNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      route.places.some(place => place.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  // Render Excel data
  return (
    
    <View style={{ flex: 1 }}>

      {/* UPPER NAV BAR */}
      <TimetableContainer
        locationCoordinates={require("../assets/menus-11.png")}
        busRoutesImageUrl="Bus Routes Information"
        propMarginLeft={-116.5}
        propTop={184}
      />
      {/* BACK BUTTON */}
      <Pressable
        style={styles.menus1}
        onPress={() => navigation.navigate("MAINPAGE", { userDetail })}
      >
        <Image
          style={styles.back_button}
          contentFit="cover"
          source={require("../assets/epback.png")}
        />
      </Pressable>

      {/* SEARCH BAR */}
      <View style={styles.searchbar}>
        <TextInput
          style={styles.searchbarInput}
          placeholder="Search by Route or Stop"
          onChangeText={setSearchQuery}
        />
        <View style={[styles.searchbarItem, styles.searchbarLayout]} />
        <Image
          style={styles.search1Icon1}
          contentFit="cover"
          source={require("../assets/search-12.png")}
        />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {filteredRoutes.map((route, index) => (
          <View key={index} style={styles.routeContainer}>
            <Text style={styles.routeNumber}>{route.routeNumber}</Text>
            <Text style={styles.authorizedPerson}>Authorized Person: {route.authorizedPerson}</Text>
            <View style={styles.routeInfo}>
              {route.places.map((place, idx) => (
                <View key={idx} style={styles.placeInfo}>
                  <HighlightText text={place} highlight={searchQuery} />
                  <Text>{formatTime(route.departureTimes[idx])}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  searchbar: {
    top: "8%",
    left: 40,
    height: "14%",
    width: 343,
    // position: "absolute",
    // Android
    elevation: 5,
    // iOS
    shadowColor: "rgba(0, 0, 0, 0.0)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  search1Icon1: {
    top: "-68%",
    left: "90%",
    width: 22,
    height: 22,
    // position: "absolute",
  },
  searchbarLayout: {
    borderRadius: Border.br_3xs,
    height: 48,
    top: "-40%",
    // position: "absolute",
  },
  searchbarItem: {
    left: "86%",
    backgroundColor: Color.colorSteelblue,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.15)",
    borderWidth: 1,
    width: 50,
  },
  searchbarInput: {
    height: "100%",
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
  back_button: {
    left: "5%",
    top: "60%",
  },

  highlightedText: {
    backgroundColor: 'yellow',
  },
  container: {
    padding: 10,
  },
  routeContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 20,
  },
  routeNumber: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  authorizedPerson: {
    fontStyle: 'italic',
    marginBottom: 10,
  },
  routeInfo: {},
  placeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
});

export default BusRoutesPage;