import React, { useEffect, useState } from "react";
import LinearGradient from 'react-native-linear-gradient';
import { Image } from "react-native";
import { StyleSheet, View, Text,Pressable } from "react-native";
import database from '@react-native-firebase/database';
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PushNotification from 'react-native-push-notification';



const UpcomingEvents = ({ navigation }) => {

  const [announcements, setUpcomingEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    const db = database();
    const dbRef = db.ref('/Announcements');
  
    dbRef.on('value', (snapshot) => {
      const data = snapshot.val();
  
      if (data) {
        const eventsData = Object.keys(data).map((id) => ({
          id,
          description: data[id].description,
          Title: data[id].Title,
          Announcement: data[id].Announcement,
        }));
      
        // Check if a new event is added
        if (eventsData.length > announcements.length) {
          const newEvent = eventsData[eventsData.length - 1];
      
          // Update the state before showing the notification
          setUpcomingEvents(eventsData);
      
          // Show a notification for the new event
          PushNotification.localNotification({
            channelId: 'default-channel-id',
            title: 'New Event',
            message: newEvent.Title,
          });
        } else if (eventsData.length < announcements.length) {
          // Event removed, update the state without triggering a notification
          setUpcomingEvents(eventsData);
        } else {
          // No new event added or removed, update the state
          setUpcomingEvents(eventsData);
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

    {announcements.map((events,index) => (

      <Pressable
        key={events.id}
        style={[
          styles.upcomingEventsChild,
          { zIndex: announcements.length - index }, // Adjust the zIndex
        ]}
        onPress={() => navigation.navigate("UpcomingEventsDetails", { events })}
      >
          <View 
            style={[
              styles.appsLayout,
              { top: 118 + index * 150 } 
            ]}
          >

            <View style={[styles.upcomingEvents1, styles.upcomingPosition]}>
            
            <View style={[styles.upcomingEventsChild, styles.upcomingPosition]}>
              <Image
                source={require('../assets/daira2024.png')}
                style={{ width: '100%', height: '130%', borderRadius: Border.br_mini }}
              />
            </View>
              {/* TITLE OF ANNOUNCEMENT */}
              <Text style={styles.EventTitleStyle}> {events.Title}</Text>

              {/* DETAIL OF ANNOUNCEMENT */}
              <Text style={styles.EventDetailStyle}>
              {events?.Announcement}
              </Text>

              {/* DATE */}
              <Text style={styles.dateStyle}>
                March, 2024
              </Text>
              <Image
                style={styles.calendar1Icon}
                contentFit="cover"
                source={require("../assets/calendar-1.png")}
              />
            </View>
          </View>
        </Pressable>
      ))}

    
      <View style={styles.upper}>
        <LinearGradient
          colors={["rgba(77, 142, 169, 0)", "#4d7da9"]}
          style={[styles.bluebg, styles.bluebgPosition]}
          // locations={[0, 0.59]}
        />
        {<Pressable
          style={styles.menus1}
          
          onPress={() => 
            {console.log('Pressable pressed');
            navigation.navigate("MAINPAGE")}}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/epback.png")}
          />
        </Pressable> }
        <Text style={[styles.guidancePortal, styles.textTypo]}>Upcoming Events</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bluebgPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  appsLayout: {
    height: 107,
    top: 120,
    left: 31,
    width: 353,
    position: "absolute",
    shadowOpacity: 5,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(0, 0, 0, 0.9)",
    borderRadius: Border.br_xl,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  upcomingPosition: {
    left: 0,
    top: 0,
    height: 82,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  textPosition: {
    display: "none",
    position: "absolute",
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
  upcomingEventsChild: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorMistyrose,
    width: 179,
  },
  EventTitleStyle: {
    marginTop: 15,
    marginLeft: 32.5,
    fontSize: FontSize.size_5xl,
    lineHeight: 25,
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: "49%",
    position: "absolute",
  },
  EventDetailStyle: {
    fontFamily: FontFamily.interRegular,
    lineHeight: 15,
    fontSize: FontSize.size_10xs,
    textAlign: "left",
    color: Color.colorDimgray_100,
    left: "50%",
    top: "83%",
    position: "absolute",
    marginLeft: 34.5,
    width: 152,
    height: 82,
  },
  dateStyle: {
    marginTop: 0,
    marginLeft: 48.5,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_15xs,
    textAlign: "left",
    color: Color.colorDimgray_100,
    left: "53%",
    top: "52%",
    position: "absolute",
  },
  calendar1Icon: {
    top: 42,
    left: 194,
    width: 19,
    height: 19,
    position: "absolute",
  },
  upcomingEvents1: {
    width: 323,
    left: 0,
    top: 0,
  },
  apps1: {
    top: 240,
  },
  apps2: {
    top: 356,
  },
  bluebg: {
    backgroundColor: "transparent",
  },
  icon: {
    top:9,
    left:3,
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
  upperChild: {
    height: "13.39%",
    width: "9.61%",
    top: "79.57%",
    right: "5.34%",
    bottom: "7.04%",
    left: "85.06%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGray_1100,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 6.1,
    elevation: 6.1,
    shadowOpacity: 1,
  },
  text: {
    height: "23.61%",
    width: "6.94%",
    top: "74.68%",
    left: "86.66%",
    fontSize: FontSize.size_21xl,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
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
