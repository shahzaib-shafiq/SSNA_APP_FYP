import { Image } from "react-native";
import React, { useEffect, useState } from "react";
import database from '@react-native-firebase/database';
import { useNavigation } from "@react-navigation/native";
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, View, Text, Pressable } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";


const UpcomingEvents = ({ route }) => {

  const { userDetail } = route.params;

  const navigation = useNavigation();
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    const db = database();
    const dbRef = db.ref('/Announcements');

    // const formatDate = (dateString) => {
    //   const options = { year: "numeric", month: "long", day: "numeric" };
    //   const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    //   return formattedDate;
    // };

    dbRef.on('value', (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const eventsData = Object.keys(data).map((id) => ({
          id,
          description: data[id].description,
          Title: data[id].title,
          // Announcement: data[id].Announcement,
          // AnnouncementDate: formatDate(data[id].AnnouncementDate),
          AnnouncementDate: data[id].AnnouncementDate,
          link: data[id].AnnouncementLink

        }));
        
        // Check if a new event is added
        if (eventsData.length > announcements.length) {
          const newEvent = eventsData[eventsData.length - 1];

          setAnnouncements(eventsData);

        } else if (eventsData.length < announcements.length) {
          // Event removed, update the state without triggering a notification
          setAnnouncements(eventsData);
        }
        
        else 
        {
          // No new event added or removed, update the state
          setAnnouncements(eventsData);
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

  return (
    <View style={styles.UpcomingEvents}>
      <View style={styles.homeScreen}>
        <View style={[styles.screenmain, styles.bluebgPosition]} />
      </View>

      {/* FOR EACH EVENT CARD */}
      {announcements.map((events, index) => (

        <Pressable
          key={events.id}
          style={[
            styles.upcomingEventsChild,
            { zIndex: announcements.length - index }, // Adjust the zIndex
          ]}
          onPress={() => navigation.navigate("AnnouncementScreenDetail", { userDetail, events })}
        >
          <View
            style={[
              styles.appsLayout,
              { top: 100 + index * 95 }
            ]}
          >
            <View style={[styles.upcomingEvents1, styles.upcomingPosition]}>

              <View style={[styles.upcomingEventsChild, styles.upcomingPosition]}>
                
              </View>
              {/* TITLE OF ANNOUNCEMENT */}
              <Text style={styles.EventTitleStyle}>
                {events.Title}
                {/* UGUGMU */}
              </Text>

              {/* DATE */}
              <Text style={styles.dateStyle}>
                {events?.AnnouncementDate}
              </Text>
              
            </View>
          </View>
        </Pressable>
      ))}


      {/* HEADER */}
      <View style={styles.upper}>
        <LinearGradient
          colors={["rgba(77, 142, 169, 0)", "#4d7da9"]}
          style={[styles.bluebg, styles.bluebgPosition]}
        />
        {
          <Pressable
            style={styles.menus1}

            onPress={() => {
              console.log('Pressable pressed');
              navigation.navigate("MAINPAGE", { userDetail })
            }}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/epback.png")}
            />

          </Pressable>
        }
        <Text style={[styles.guidancePortal, styles.textTypo]}>Announcements</Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bluebgPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%", top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  appsLayout: {
    height: 70,
    left: "2.5%",
    width: "95%",
    shadowOpacity: 5,
    elevation: 4,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(0, 0, 0, 0.9)",
    borderRadius: Border.br_xl,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  upcomingEventsChild:{
    backgroundColor: Color.colorBlack,
  },
  EventTitleStyle: {
    marginTop: 25,
    marginLeft: -32.5,
    fontSize: FontSize.size_5xl,
    lineHeight: 25,
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.poppins,
    fontWeight: "400",
    left: "12%",
    position: "absolute",
  },

  // upcomingPosition: {
  //   left: 0,
  //   top: 0,
  //   height: 82,
  //   position: "absolute",
  // },
  // upcomingEventsChild: {
  //   borderRadius: Border.br_mini,
  //   backgroundColor: Color.colorMistyrose,
  //   width: 179,
  // },
  textTypo: {
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  screenmain: {
    backgroundColor: Color.colorWhite,
    bottom: "0%",
    right: "0%",
    top: "0%",
  },
  homeScreen: {
    top: 14,
    left: -2,
    width: 375,
    position: "absolute",
    height: 812,
  },



  // EventDetailStyle: {
  //   fontFamily: FontFamily.interRegular,
  //   lineHeight: 15,
  //   fontSize: FontSize.size_10xs,
  //   textAlign: "left",
  //   color: Color.colorDimgray_100,
  //   left: "50%",
  //   top: "83%",
  //   position: "absolute",
  //   marginLeft: 34.5,
  //   width: 152,
  //   height: 82,
  // },
  dateStyle: {
    marginTop: 25,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_15xs,
    textAlign: "left",
    color: Color.colorDimgray_100,
    left: "74%",
    top: "150%",
    position: "absolute",
  },
  // calendar1Icon: {
  //   top: 42,
  //   left: 194,
  //   width: 19,
  //   height: 19,
  //   position: "absolute",
  // },
  upcomingEvents1: {
    width: 380,
    left: 0,
    top: 0,
  },
  // bluebg: {
  //   backgroundColor: "black",
  // },
  icon: {
    top: 9,
    left: 3,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    height: 30,
    width: 30,
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
  guidancePortal: {
    height: "100%",
    width: "57%",
    top: "81.6%",
    left: "20%",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  upper: {
    top: -193,
    left: -1,
    width: 431,
    backgroundColor: Color.colorBlack,
    height: 260,
    position: "absolute",
  },
  UpcomingEvents: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 812,
    backgroundColor: Color.colorWhite,
  },
});

export default UpcomingEvents;
