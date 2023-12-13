import * as React from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, View, Text, Pressable } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const FacultyInfoDetails = ({ route }) => {

  const navigation = useNavigation(); //stack navigation
  const { userDetail, faculty } = route.params; //user session

//a function to get the full form of the department
  const getFullForm = (abbreviation) => {
    switch (abbreviation) {
      case 'AI':
        return 'Artificial Intelligence';
      case 'CS':
        return 'Computer Science';
      case 'EE':
        return 'Electrical Engineering';
      case 'BBA':
        return 'Business Analytics';
      case 'SE':
        return 'Software Engineering';
      default:
        return abbreviation; // If the abbreviation is not found, return the original value
    }
  };

  return (
    <View style={styles.facultyInfo1}>
      <View style={styles.homeScreen}>
        <View style={[styles.screenmain, styles.iconLayout1]} />
      </View>

      <View style={[styles.upper, styles.upperLayout]}>
        <LinearGradient
          style={[styles.bluebg, styles.upperLayout]}
          locations={[0, 0.59]}
          colors={["rgba(77, 142, 169, 0)", "#4d7da9"]}
        />
        <Text style={styles.facultyInformation}>More Details</Text>
      </View>

      {/* member image */}
      <Image
        style={styles.facultyInfo1Child}
        contentFit="cover"
        source={{ uri: faculty.img }}
        />

      {/* faculty member name */}
      <View style={styles.memberNameContainer}>
        <Text style={styles.memberNameText}>{faculty.name}</Text>
      </View>

      {/* Full form mof Department name */}
      <Text style={styles.dpt_name}>{getFullForm(faculty.Department)}</Text>

      {/* faculty email */}
      <View style={[styles.detailsContainer,styles.emailContainerStyle]}>
        <Text style={[styles.emailStyle, styles.emailStyle2]}>{faculty.email}</Text>
      </View>
      <Image
        style={[styles.clarityemailLineIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/arcticonshuaweiemail.png")}
      />

      {/* faculty phone */}
      <Image
        style={[styles.mynauitelephoneIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/telephone.png")}
      />
      <View style={[styles.detailsContainer,styles.phoneContainerStyle]}>
        <Text style={styles.ext123}>
          {/* {faculty.phone} */}
          {faculty.phone}
        </Text>      
      </View>

      {/* office address */}
      <Image
        style={[styles.bytesizelocationIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/location.png")}
      />
      <View style={[styles.detailsContainer,styles.addressContainerStyle]}>
        <Text style={styles.ext123}>
            {faculty.address}
        </Text> 
      </View>
     

      {/* profession */}
      <Image
        style={[styles.carboneducationIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/education.png")}
      />
      <View style={[styles.detailsContainer,styles.professionContainerStyle]}>
        <Text style={styles.ext123}>Professor</Text>
      </View>
      

      {/* degree and University */}
      <Image
        style={[styles.phcertificateThinIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/award.png")}
      />
      <View style={[styles.detailsContainer,styles.DegreeContainerStyle]}>
        <Text style={styles.ext123}>
          <Text style={styles.phdEe}> {faculty.Education} {"\n"} </Text>
          <Text style={styles.universityStyle}>
            {faculty.University}
          </Text>
        </Text>
      </View>
    
      <Text style={[styles.areasOfInterest, styles.researchTypo]}>
        Areas of Interest
      </Text>

      {/* Lines */}
      <View style={[styles.line1, styles.facultyPosition]} />
      <View style={[styles.line2, styles.facultyPosition]} />

      
      <View style={styles.detailsContainer2}>
        <Text
          style={[styles.powerSystemsControl, styles.powerTypo]}
        >
           {faculty.areaOfInterest}
        </Text>
      </View>


      
      {/* BACK BUTTON */}
      <Pressable
        style={styles.epback}
        onPress={() =>
          navigation.navigate("FacultyInfo",{userDetail})
        }
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/epback.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  upperLayout: {
    height: 233,
    width: 435,
    position: "absolute",
  },
  emailStyle2: {
    textAlign: "left",
    fontSize: FontSize.size_mini,
  },
  iconLayout: {
    height: 24,
    width: 26,
    left: 56,
    position: "absolute",
    overflow: "hidden",
  },
  DetailTextPosition: {
    left: 110,
    color: Color.colorBlack,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  researchTypo: {
    height: 22,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  facultyPosition: {
    height: 1,
    width: 318,
    borderTopWidth: 1,
    borderColor: Color.colorGray_1400,
    borderStyle: "solid",
    marginLeft: -158.5,
    left: "50%",
    position: "absolute",
  },
  powerTypo: {
    left: 1,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "300",
    fontSize: FontSize.size_lg,
    textAlign: "left",
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
  bluebg: {
    top: 0,
    right: 0,
    backgroundColor: "transparent",
  },
  facultyInformation: {
    marginLeft: -116.5,
    top: 189,
    fontSize: FontSize.size_5xl,
    color: Color.colorWhite,
    width: 263,
    height: 33,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  upper: {
    top: -173,
    right: -3,
  },
  facultyInfo1Child: {
    marginLeft: -58,
    top: 95,
    borderRadius: Border.br_mini,
    width: 93,
    height: 93,
    left: "50%",
    position: "absolute",
  },
   memberNameContainer: {
    top:190,
    left:-2,
    width:400,
    backgroundColor: 'white', // Blue color
    borderRadius: 8, // Adjust as needed
    padding: 10, // Adjust as needed
    marginBottom: 10, // Adjust as needed
  },
  detailsContainer: {
    left: 100,
    width: 280,
    backgroundColor: 'rgba(128, 128, 128, 0.0)', // Transparent grey color
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    textAlign: 'left',
  },
  detailsContainer2: {
    left: 48,
    width: 320,
    top:292,
    height:200,
    backgroundColor: 'rgba(128, 128, 128, 0.0)', // Transparent grey color
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    textAlign: 'left',
  },
  emailContainerStyle:{
    top:257
  },
  phoneContainerStyle:{
    top:263
  },
  addressContainerStyle:{
    top:268
  },
  professionContainerStyle:{
    top:82
  },
  DegreeContainerStyle:{
    top:92
  },
  memberNameText: {
    color: 'black', // White text color
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: '600',
    textAlign: 'center', // Center text horizontally
  },
  dpt_name: {
     top:167,
    left:0,
    width:400,
    textAlign: 'center', // Center text horizontally
    height:40,
    backgroundColor: 'white', // Blue color
    borderRadius: 8, // Adjust as needed
    padding: 10, // Adjust as needed
    marginBottom: 10, // Adjust as needed
  },
  emailStyle: {
    marginLeft: -82,
    width: 200,
    color: Color.colorBlack,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    left: "35%",
    position: "absolute",
  },
  clarityemailLineIcon: {
    top: 377,
  },
  mynauitelephoneIcon: {
    top: 413,
  },
  ext123: {
    marginLeft: -82,
    width: 200,
    color: Color.colorBlack,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    left: "35%",
    position: "absolute",
  },
  bytesizelocationIcon: {
    top: 449,
  },
  stFloorOffice: {
    top: 452,
    width: 182,
    textAlign: "center",
    fontSize: FontSize.size_mini,
  },
  carboneducationIcon: {
    top: 293,
  },
  professor: {
    top: 296,
    width: 71,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    left: 133,
  },
  phcertificateThinIcon: {
    top: 334,
  },
  phdEe: {
    fontSize: FontSize.size_mini,
  },
  universityStyle: {
    fontSize: 12,
    fontWeight: '400', // Adjust the value based on your needs
  },
  phdEeContainer: {
    top: 332,
    width: 211,
    textAlign: "left",
    left: 133,
  },
  areasOfInterest: {
    marginLeft: -85,
    top: 520,
    width: 250,
  },
  line1: {
    top: 280,
  },
  line2: {
    top: 492,
  },
  lineView: {
    top: 615,
  },
  facultyInfo1Child1: {
    top: 809,
  },
  powerSystemsControl: {
    top: 1,
    width: 216,
    height: 74,
  },
  research: {
    marginLeft: -43,
    top: 643,
    width: 86,
  },
  wirelessPowerTransfer: {
    top: 669,
    width: 332,
    height: 130,
  },
  icon: {
    overflow: "hidden",
    top:-5
  },
  epback: {
    left: 19,
    top: 21,
    width: 38,
    height: 33,
    position: "absolute",
  },
  facultyInfo1: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default FacultyInfoDetails;
