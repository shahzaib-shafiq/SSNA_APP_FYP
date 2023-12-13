import { Image,TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import database from '@react-native-firebase/database'; //for firebase connection
import { useNavigation } from "@react-navigation/native";
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, View, Pressable, Text, ScrollView  } from "react-native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const FacultyInfo = ( {route} ) => {

  const navigation = useNavigation(); //for stack navigation
  const { userDetail } = route.params;  //user session

  // for searching member
  const [facInfo, setFacultyInfo] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  //fetch data from realtime database
  const getData = () => {
    const db = database();
    const dbRef = db.ref('/FacultyDataBase'); //directory in FB

    dbRef.on('value', (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const facultyData = Object.keys(data).map((id) => ({
          id,
          name: data[id].name,
          Department: data[id].Department,
          email: data[id].email,
          phone: data[id].phone,
          Education: data[id].Education,
          address: data[id].address,
          areaOfInterest: data[id].areaOfInterest,
          University: data[id].University,
          img: data[id].img,

        }));
        setFacultyInfo(facultyData);
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  //for searching in small letters
  const filteredFacInfo = facInfo.filter(
    (faculty) => faculty.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ScrollView style={styles.scrollView}>  
      <View style={styles.facultyInfo}>
        <View style={styles.homeScreen}>
          <View style={[styles.screenmain, styles.back_button]} />
        </View>
        
        <View style={[styles.upper, styles.upperPosition]}>
          <LinearGradient
            style={[styles.bluebg, styles.upperPosition]}
            locations={[0, 0]}
            colors={["rgba(77, 142, 169, 0)", "#4d7da9"]}
          />
          {/* menu_press */}
          <Pressable
            style={styles.menus1}
            onPress={() => navigation.navigate("MAINPAGE",{userDetail})}
          >
            <Image
              style={styles.back_button}
              contentFit="cover"
              source={require("../assets/epback.png")}
            />
          </Pressable>

          {/* head_title */}
          <Text style={styles.facultyInformation}>Faculty Information</Text>
        </View> 

        {/* FACULTY CARDS */}
        {filteredFacInfo.map((faculty,index) => (
          <View 
              key={faculty.id}
              style={[
                styles.facultyInfo_bgBOX,
                styles.facultyShadowBox,
                { top: 198 + index * 180 }, // Adjust this value
              ]}
        
          >
            <View style={styles.query}>
              <Image
                style={[styles.queryChild, styles.queryLayout]}
                contentFit="cover"
                source={{ uri: faculty.img }}
              />

              <Text style={[styles.fac_name, styles.fac_name_typo]}>
                {faculty.name}
              </Text>

              <Text style={styles.dept}>{faculty.Department}</Text>

              <Text style={styles.email}>{faculty.email}</Text>

              <Pressable
                style={styles.menus1}
                onPress={() => navigation.navigate("FacultyInfoDetails", { userDetail ,faculty })}
              >
                <View style={styles.viewDetails_button}>
                  <Text style={[styles.postQuestion, styles.postQuestionTypo]}>
                    View Details
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
      ))}

      {/* SEARCH BAR */}
      <View style={styles.searchbar}>
      <TextInput
          style={styles.searchbarInput}
          placeholder="Search by name"
          onChangeText={(text) => setSearchTerm(text)}
        />
        <View style={[styles.searchbarItem, styles.searchbarLayout]} />
        <Image
          style={styles.search1Icon1}
          contentFit="cover"
          source={require("../assets/search-12.png")}
        />
      </View>
    
    </View>
   </ScrollView>

  );
};

const styles = StyleSheet.create({
  searchbarInput: {
    height: 40,
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
    left:"25%",
    top:"8%",
    height: "90%",
    width: "90%",
  },
  facultyShadowBox: {
    height: 142,
    width: 334,
    shadowOpacity: 5,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: Border.br_xl,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  upperPosition: {
    height: "28%",
    width: "110%",
    left: "0%",
    position: "absolute",
  },
  scrollView: {
    flexGrow: 1,    
    // justifyContent: 'space-between',
    backgroundColor: Color.colorWhite,
  },
  queryLayout: {
    height: 93,
    position: "absolute",
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
  facultyInfo_bgBOX: {
    top: 198,
    left: 39,
    width: 334,
    shadowOpacity: 15,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "ffffff",
    borderRadius: Border.br_xl,
  },
  bluebg: {
    bottom: "0%",
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
    marginTop: 70.5,
    marginLeft: -120,
    fontSize: FontSize.size_5xl,
    width: 257,
    height: 53,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontWeight: "700",
    top: "50%",
    color: Color.colorWhite,
    left: "50%",
    position: "absolute",
  },
  upper: {
    bottom: "93%",
  },
  queryChild: {
    borderRadius: Border.br_mini,
    width: "30%",
    left: "0%",
    top: "0%",
    height: "93%",
  },
  fac_name_typo: {
    height: "27%",
    width: 194,
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_lg,
    marginLeft: -30,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontWeight: "600",
    top: "50%",
    left: "45%",
    position: "absolute",
  },
  fac_name: {
    marginTop: -203,
  },
  dept: {
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
    left: "45%",
    position: "absolute",
  },
  email: {
    marginTop: -180,
    width: 161,
    color: Color.colorDimgray_500,
    marginLeft: -30,
    fontSize: FontSize.size_xs,
    height: 23,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontWeight: "600",
    top: "53.5%",
    left: "43.5%",
    position: "absolute",
  },
  postQuestion: {
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    height:20,
    color: Color.colorWhite,
    textAlign: "center",
  },
  postQuestionTypo: {
    textAlign: "center",
    fontFamily: FontFamily.inter,
  },
  viewDetails_button: {
    top: -106,
    left: 154,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorDodgerblue,
    width: 115,
    height: 35,
    flexDirection: "row",
    padding: Padding.p_3xs,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  query: {
    left: 20,
    top: 15,
    height: 414,
    width: 328,
    position: "absolute",
  },
  searchbarItem: {
    left: 293,
    backgroundColor: Color.colorSteelblue,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.15)",
    borderWidth: 1,
    width: 50,
  },
  search1Icon1: {
    top: 13,
    left: 307,
    width: 22,
    height: 22,
    position: "absolute",
  },
 searchbar: {
  top: 101,
  left: 40,
  height: 48,
  width: 343,
  position: "absolute",
  // Android
  elevation: 5,
  // iOS
  shadowColor: "rgba(0, 0, 0, 0.3)",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.5,
  shadowRadius: 4,
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
