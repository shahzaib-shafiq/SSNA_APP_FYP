import { Image, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import Toast from 'react-native-toast-message';
import database from '@react-native-firebase/database'; //for firebase connection
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Pressable, Text, ScrollView } from "react-native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Query = ({ route, userDetail }) => {

  // const { userDetail } = route.params;  //user session
  console.log('QUERY-User Detail:', userDetail); // Make sure this prints the correct user details
  console.log('QUERY-Route:', route);

  const navigation = useNavigation(); //for stack navigation

  const handleDownvote = (queryId, currentDownvotes, currentUpvotes, userId) => {
    const queryRef = database().ref(`/Guidance/${queryId}`);
    const userVoteRef = queryRef.child(`votes/${userId}`);

    userVoteRef.once('value', snapshot => {
      const vote = snapshot.val();

      if (vote === 'downvote') {
        // User wants to cancel their downvote
        const updatedDownvotes = currentDownvotes - 1;

        queryRef.update({
          Downvotes: updatedDownvotes
        });

        userVoteRef.remove(); // Remove the user's downvote from the votes node

        Toast.show({
          type: 'info',
          text1: 'Downvote removed',
          text2: 'Your downvote has been removed.'
        });
      } else {
        // User is downvoting for the first time or changing their vote
        const updatedDownvotes = vote === 'upvote' ? currentDownvotes + 1 : currentDownvotes + 1;
        const update = {
          Downvotes: updatedDownvotes,
        };
        if (vote === 'upvote') {
          // If the user previously upvoted, we need to adjust the upvotes as well
          const updatedUpvotes = currentUpvotes - 1;
          queryRef.update({
            Upvotes: updatedUpvotes
          });
        }

        // Remove the user's upvote if it exists
        const userUpvoteRef = queryRef.child(`votes/${userId}`);
        userUpvoteRef.remove();

        queryRef.update(update);

        userVoteRef.set('downvote'); // Update the user's vote to 'downvote'

        Toast.show({
          type: 'success',
          text1: 'Downvote counted',
          text2: 'Your downvote has been recorded.'
        });
      }
    });
  };
  const handleUpvote = (queryId, currentUpvotes, currentDownvotes, userId) => {
    const queryRef = database().ref(`/Guidance/${queryId}`);
    const userVoteRef = queryRef.child(`votes/${userId}`);

    userVoteRef.once('value', snapshot => {
      const vote = snapshot.val();

      if (vote === 'upvote') {
        // User wants to cancel their upvote
        const updatedUpvotes = currentUpvotes - 1;

        queryRef.update({
          Upvotes: updatedUpvotes
        });

        userVoteRef.remove(); // Remove the user's upvote from the votes node

        Toast.show({
          type: 'info',
          text1: 'Upvote removed',
          text2: 'Your upvote has been removed.'
        });
      } else {
        // Adjust the votes based on the current state
        let updates = {};
        if (vote === 'downvote') {
          // User is switching from downvote to upvote
          updates = {
            Downvotes: currentDownvotes - 1,
            Upvotes: currentUpvotes + 1
          };
        } else {
          // User is upvoting for the first time
          updates.Upvotes = currentUpvotes + 1;
        }

        // Update the query with new vote counts
        queryRef.update(updates);

        // Update the user's vote
        userVoteRef.set('upvote');

        Toast.show({
          type: 'success',
          text1: 'Upvote counted',
          text2: 'Your upvote has been recorded.'
        });
      }
    });
  };

  const [queryInfo, setGuidanceQuery] = useState([]);

  //fetch data from realtime database
  const getData = () => {
    const db = database();
    const dbRef = db.ref('/Guidance'); //directory in FB

    dbRef.on('value', (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const queryData = Object.keys(data).map((id) => ({
          id,
          Title: data[id].Title,
          Department: data[id].Department,
          Author: data[id].Author,
          AuthorId:data[id].AuthorId,
          Downvotes: data[id].Downvotes,
          Upvotes: data[id].Upvotes,
          Summary: data[id].Summary,
          Date: data[id].Date,
          img: data[id].img,

        }));

        // Check if a new event is added
        if (queryData.length > queryInfo.length) {
          const newQuery = queryData[queryData.length - 1];

          // Update the state before showing the notification
          setGuidanceQuery(queryData);

        } else if (queryData.length < queryInfo.length) {
          // Event removed, update the state without triggering a notification
          setGuidanceQuery(queryData);
        } else {
          // No new event added or removed, update the state
          setGuidanceQuery(queryData);
        }
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (

    <View style={styles.queriesBoxMAIN}>
      {queryInfo.map((query, index) => (
        <View
          key={query.id}
          style={[
            styles.query1,
            //  styles.facultyShadowBox,
            { top: -10 + index * 230 }, // Adjust this value
          ]}
        >

          {/* VIEW FULL QUERY */}
          <Pressable
            onPress={() => navigation.navigate("SeniorGuidanceScreenViewD", { userDetail, query, route })}
            style={styles.queryImgBoxStyle}

          >
            <Image
              style={styles.queryImgStyle}
              source={{ uri: query.img }}
            />
          </Pressable>

          <Text style={styles.iWantTo1}>
            {query.Summary.length > 150 ? query.Summary.substring(0, 150) + "..." : query.Summary}
          </Text>

          <Text style={[styles.datePositionStyle, styles.dateTypoStyle]}>
            {query.Date}
          </Text>

          <Text style={[styles.byAnasNaveed1, styles.dateTypoStyle]}>
            {query.Author}
          </Text>

          <Text style={[styles.arduinoProgramming, styles.eeTypo]}>
            {query.Title}
          </Text>

          <Text style={[styles.ee, styles.eeTypo]}>
            {query.Department}
          </Text>

          {/* View Full query button */}
          <Pressable
            onPress={() => navigation.navigate("SeniorGuidanceScreenViewD", { userDetail, query, route })}
            style={styles.viewQueryBoxStyle}
          >

            <Text style={styles.viewQueryTxtStyle}>VIEW</Text>

          </Pressable>

          {/* UPVOTING BUTTON */}
          <Pressable
            onPress={() => handleUpvote(query.id, query.Upvotes, query.Downvotes, userDetail.id)}
            style={[styles.upVoteBoxStyle, styles.votingButtonsBoxStyle]}
          >
            <Image
              style={[styles.upVoteArrowStyle, styles.votingIconLayout]}
              contentFit="cover"
              source={require("../assets/uparrow-12.png")}
            />
            <Text style={[styles.upVoteTextStyle, styles.votingTextTypo]}>
              {query.Upvotes}
            </Text>
          </Pressable>

          {/* DOWNVOTING BUTTON */}
          <Pressable
            onPress={() => handleDownvote(query.id, query.Downvotes, query.Upvotes, userDetail.id)}
            style={[styles.downVoteBoxStyle, styles.votingButtonsBoxStyle]}
          >
            <Image
              style={[styles.downVoteArrowStyle, styles.votingIconLayout]}
              contentFit="cover"
              source={require("../assets/uparrow-24.png")}
            />
            <Text style={[styles.downVoteTextStyle, styles.votingTextTypo]}>
              {query.Downvotes}
            </Text>
          </Pressable>

        </View>
      ))}

    </View>
  );
};

const styles = StyleSheet.create({
  dateTypoStyle: {
    lineHeight: 11,
    fontSize: FontSize.size_2xs,
    top: "60.65%",
    height: "7.08%",
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  eeTypo: {
    color: Color.colorDimgray_200,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    top: "0%",
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  votingButtonsBoxStyle: {
    width: "22.25%",
    borderRadius: Border.br_6xs,
    bottom: "0%",
    top: "80%",
    height: "20%",
    position: "absolute", // Ensures this applies over the entire component
  },
  votingTextTypo: {
    fontSize: 19,
    top: "15%",
    width: "100%",
    height: "100%",
    color: Color.colorWhite,
    fontWeight: "800",
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "relative", // This ensures the text layer is positioned correctly relative to its parent
  },
  queryImgBoxStyle: {
    height: "52.92%",
    width: "97%",
    top: "17.41%",
    // right: "60.35%",
    // bottom: "29.68%",
    borderRadius: Border.br_mini,
    // backgroundColor: Color.colorMistyrose,
    left: "0%",
    position: "absolute",
  },
  queryImgStyle: {
    height: "75%",
    width: "15%",
    top: "25%",
    // right: "80.35%",
    // bottom: "0%",
    // borderRadius: Border.br_mini,
    // backgroundColor: Color.colorMistyrose,
    left: "5%",
    // position: "absolute",
  },
  iWantTo1: {
    height: "34.22%",
    width: "54.28%",
    top: "24.54%",
    fontSize: FontSize.size_xs,
    lineHeight: 12,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.inter,
    left: "42.99%",
    position: "absolute",
  },
  datePositionStyle: {
    width: "100%",
    left: "78%",
  },
  byAnasNaveed1: {
    width: "27.14%",
    left: "42.99%",
    lineHeight: 11,
    fontSize: FontSize.size_2xs,
    top: "60.65%",
    height: "7.08%",
  },
  arduinoProgramming: {
    height: "17.41%",
    width: "59.14%",
    left: "0.3%",
  },
  ee: {
    height: "14.86%",
    width: "8.84%",
    left: "89.65%",
  },
  viewQueryBoxStyle: {
    width: "37.8%",
    right: "3.06%",
    left: "59.14%",
    backgroundColor: Color.colorSkyblue,
    borderRadius: Border.br_6xs,
    bottom: "0%",
    top: "80%",
    height: "20%",
    position: "absolute",
  },
  upVoteBoxStyle: {
    right: "7%",
    backgroundColor: Color.colorDarkseagreen,
    left: "0%",
  },
  downVoteBoxStyle: {
    right: "50%",
    left: "24.08%",
    backgroundColor: Color.colorSalmon,
    position: "absolute", // Keeps this layer at the base
  },
  viewQueryTxtStyle: {
    height: "100%",
    width: "100%",
    top: "18%",
    left: "0%",
    fontSize: 18,
    color: Color.colorWhite,
    fontWeight: "900",
    textAlign: "center",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  votingIconLayout: {
    height: "55%",
    width: "35%",
    position: "absolute",
  },
  upVoteArrowStyle: {
    top: "24%",
    right: "0%",
    bottom: "0%",
    left: "41%",
  },
  downVoteArrowStyle: {
    top: "24%",
    right: "0%",
    bottom: "0%",
    left: "39%",
  },
  upVoteTextStyle: {
    left: "30%",
  },
  downVoteTextStyle: {
    left: "29.87%",
    position: "relative", // Ensures this text appears above the background

  },
  query1: {
    top: "0%",
    left: "0%",
    width: 395,
    height: 185,
    position: "absolute",
  },
  query2: {
    top: "40%",
    left: "0%",
    width: 395,
    height: 185,
    position: "absolute",
  },
  queriesBoxMAIN: {
    top: "15%",
    left: "4%",
    width: "92%",
    // backgroundColor:Color.colorBlack,
    height: "70%",
    position: "absolute",
  },
});

export default Query;
