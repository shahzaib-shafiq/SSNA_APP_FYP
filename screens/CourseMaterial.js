import * as React from "react";
import { Linking, ScrollView } from 'react-native';
import  { useEffect, useState } from "react";
import { Image, TextInput } from "react-native";
import database from '@react-native-firebase/database';
import { useNavigation } from "@react-navigation/native";
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, View, Text, Pressable } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const CourseMaterial = ({ route }) => {
  
  const { userDetail } = route.params;
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  const [courses, setCourses] = useState([]);

 // for searching member
 const [searchTerm, setSearchTerm] = useState("");

  const getData = () => {
    const db = database();
    const dbRef = db.ref('/CourseMaterial');

    dbRef.on('value', (snapshot) => {
      const data = snapshot.val();
  
      if (data) {
        const coursesData = Object.keys(data).map((id) => ({
          id,
          Name: data[id].Name,
          Code: data[id].Code,
          Department: data[id].Department,
          Link: data[id].Link,
        }));

         // Check if a new event is added
         if (coursesData.length > courses.length) {
          const newCourse = coursesData[coursesData.length - 1];
          
          // Update the state before showing the notification
          setCourses(coursesData);
      
        } else if (coursesData.length < courses.length) {
          // Event removed, update the state without triggering a notification
          setCourses(coursesData);
        } else {
          // No new event added or removed, update the state
          setCourses(coursesData);
        }
      }
  
      setLoading(false);
    }, (error) => {
      console.error('Error fetching data:', error);
      setLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

   //for searching in small letters
   const filteredCourses = courses.filter(
     (coursess) => 
     coursess.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     coursess.C.toLowerCase().includes(searchTerm.toLowerCase())
     
   );

  return (
    <View style={styles.courseMaterial}>

      {/* FOR EACH COURSE CARD */}
      {filteredCourses.map((course,index) => (
        <View
          key={course.id}
          style={[
            styles.course,
            { top: 200 + index * 150 },
            { zIndex: courses.length - index }, // Adjust the zIndex
          ]}          
        >
          <View style={styles.courseChild} />

          <Text style={styles.courseCodeStyle}>
            {course.Code}
          </Text>

          <Text style={[styles.CourseNameStyle, styles.csTypo]}>
            {course.Name}
          </Text>

          <Text style={[styles.courseDepStyle, styles.csTypo]}>
            {course.Department
            }</Text>
            
          <Pressable
             style={styles.courseItem}
             onPress={() => Linking.openURL(course.Link)}
          >
            <Text style={[styles.viewMaterial, styles.materialTypo]}>
              VIEW MATERIAL
            </Text>
          </Pressable>
         </View>
      ))}

      {/* UPPER BAR */}
      <View style={styles.upper}>
        <LinearGradient
          style={styles.bluebg}
          locations={[0, 0]}
          colors={["rgba(77, 142, 169, 0)", "#4d7da9"]}
        />
        <Text style={[styles.courseMaterial1, styles.materialTypo]}>
          Course Material
        </Text>

        {/* BACK BUTTON */}
        <Pressable
          style={styles.epback}
          onPress={() => 
            {console.log('Pressable pressed');
            navigation.navigate("MAINPAGE",{userDetail})}}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/epback.png")}
          />
        </Pressable>
      </View>

      {/* SEARCH BAR */}
      <View style={styles.searchbar}>

        <TextInput
          style={styles.searchbarInput}
          placeholder="Search by name"
          onChangeText={(text) => setSearchTerm(text)}
        />
      
        <View style={[styles.searchbarItem, styles.searchbarLayout]} />
             
        <View style={[styles.searchbarItem, styles.searchbarLayout]} />
        <Image
          style={styles.search1Icon}
          contentFit="cover"
          source={require("../assets/search-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  csTypo: {
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    top: "13.04%",
    textAlign: "left",
    position: "absolute",
  },
  searchbarInput: {
    height:0,
    borderColor: 'rgba(128, 128, 128, 0.0)',
    fontSize: 16,
    borderWidth: 1,
    backgroundColor: "white",
    paddingHorizontal: "10%",
    borderRadius: Border.br_3xs,
    flex: 1,
    elevation: 5, // Add elevation for Android shadow
  },
  searchbar: {
    position: 'absolute',
    top: 109,
    left: 17,
    height: 48,
    width: 385,
  },
  searchbarLayout: {
    borderRadius: Border.br_3xs,
    height: 48,
    top: 0,
    position: "absolute",
  },
  searchbarItem: {
    left: 329,
    backgroundColor: Color.colorSteelblue,
    borderStyle: "solid",
    borderColor: Color.colorGray_1000,
    borderWidth: 1,
    width: 56,
  },
  courseChild: {
    top: -5,
    left: -10,
    borderRadius: 26,
    shadowColor: "rgba(0, 0, 0, 0.85)",
    shadowRadius: 5.8,
    elevation: 5.8,
    width: 396,
    height: 135,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  courseCodeStyle: {
    height: "100%",
    width: "100%",
    top: "54%",
    lineHeight: 12,
    color: Color.colorDimgray_100,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: "2.15%",
    position: "absolute",
  },
  CourseNameStyle: {
    height: "100%",
    width: "41.94%",
    left: "2.15%",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
  },
  courseDepStyle: {
    height: "100%",
    width: "100%",
    left: "88.13%",
  },
  courseItem: {
    height: "27.1%",
    width: "40.13%",
    top: "50%",
    right: "1.8%",
    bottom: "22.9%",
    left: "58.06%",
    borderRadius: Border.br_6xs,
    backgroundColor: "#62b4be",
    position: "absolute",
  },
  viewMaterial: {
    top: 9,
    left: 22,
    fontSize: FontSize.size_sm,
  },
  materialTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    zIndex: 1,
    textAlign: "left",
    position: "absolute",
  },
  course: {
    top: 261,
    left: "5%",
    width: 372,
    height: 138,
    position: "absolute",
  },
  bluebg: {
    backgroundColor: "transparent",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  courseMaterial1: {
    height: "41.43%",
    width: "45.01%",
    top: "30.29%",
    left: "17.87%",
    fontSize: FontSize.size_5xl,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  epback: {
    left: 22,
    top: 21,
    width: 38,
    height: 33,
    position: "absolute",
  },
  upper: {
    left: -1,
    width: 431,
    height: 70,
    top: 0,
    position: "absolute",
  },
  searchbarChild: {
    left: 0,
    width: 385,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
  },
  searchAnyCourse: {
    top: 16,
    left: 7,
    fontSize: FontSize.size_mini,
    color: Color.colorDimgray_600,
    textAlign: "center",
    width: 146,
    height: 19,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  search1Icon: {
    top: 10,
    left: 343,
    width: 28,
    height: 28,
    position: "absolute",
  },
  courseMaterial: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default CourseMaterial;