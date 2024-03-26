import React, { useState, useEffect } from "react";
import { StyleSheet, View, Pressable, Text, Modal } from "react-native";
import { Image } from "react-native";
import Toast from 'react-native-toast-message';
import database from '@react-native-firebase/database'; //for firebase connection
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import AnswerQueryPopup from "./AnswerQueryPopup";


const SectionForm = ({ route, userDetail }) => {
  const navigation = useNavigation();

  const { query, udTemp, rTemp } = route.params;

  console.log('SF-User Detail:', userDetail); // Make sure this prints the correct user details
  console.log('SF-Route:', route);
  console.log('SF-Query:', query);

  // State to manage the visibility of ErrorMessage component
  const [showPopup, setShowPopup] = React.useState(false);

  // Function to toggle the visibility of the ErrorMessage
  const handlePressAns = () => {
    // Check if the current user is the author of the query
    if (query.AuthorId === userDetail.id) {
      // If the current user is the author, log an error and prevent opening the popup
      Toast.show({
        type: 'info',
        text1: 'Permission Denied',
        text2: 'You cannot answer your own question.'
      });
      return;
    }

    // If the current user is not the author, proceed to open the popup
    setShowPopup(true);
  };

  const [upvotes, setUpvotes] = useState(query.Upvotes);
  const [downvotes, setDownvotes] = useState(query.Downvotes);

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
    // setDownvotes(updatedUpvotes);
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
    setUpvotes(updatedUpvotes);
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
    <View style={styles.answerbuttonParent}>

      <View style={styles.bgdownPosition}>

        <View style={[styles.bgdown, styles.bgdownPosition]} />

        <Pressable
          style={[styles.answerbuttonChild, styles.respondPosition]}
          onPress={handlePressAns}
        >
          <Text style={styles.answer}>ANSWER</Text>
        </Pressable>

        {/* Conditionally render ErrorMessage component */}
        {showPopup && (
          <Modal transparent={true} animationType="slide" visible={showPopup} onRequestClose={() => setShowPopup(false)}>
            <View style={styles.centeredView}>
              <Pressable style={styles.blurbg} onPress={() => setShowPopup(false)} />
              <AnswerQueryPopup onClose={() => setShowPopup(false)} userDetail={userDetail} route={route} />
            </View>
          </Modal>
        )}


      </View>

      <View style={[styles.respond, styles.respondPosition]}>

        {/* DOWNVOTING BUTTON */}
        <Pressable
          onPress={() => handleDownvote(query.id, query.Downvotes, query.Upvotes, userDetail.id)}
          style={[styles.downVoteButtonStyle, styles.respondLayout]}
        >
          <Image
            style={[styles.downVoteIconStyle, styles.votingIconLayout]}
            contentFit="cover"
            source={require("../assets/uparrow-24.png")}
          />
          <Text style={[styles.downVoteNumStyle, styles.votingTextPosition]}>
            {query.Downvotes}
          </Text>
        </Pressable>

        {/* UPVOTING BUTTON */}
        <Pressable
          onPress={() => handleUpvote(query.id, query.Upvotes, query.Downvotes, userDetail.id)}
          style={[styles.upVoteButtonStyle, styles.respondLayout]}
        >
          <Image
            style={[styles.upVoteIconsStyle, styles.votingIconLayout]}
            contentFit="cover"
            source={require("../assets/uparrow-12.png")}
          />
          <Text style={[styles.upVoteNumStyle, styles.votingTextPosition]}>
            {query.Upvotes}
          </Text>
        </Pressable>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  bgdownPosition: {
    top: 0,
    height: 56,
    width: 430,
    left: 0,
    position: "absolute",
  },
  blurbg: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
    position: "absolute",
    top: 0,
    left: 0,
    // backgroundColor: Color.colorGray_900,
    width: 430,
    height: 933,
  },
  respondPosition: {
    height: 31,
    top: 12,
    position: "absolute",
  },
  respondLayout: {
    width: 84,
    height: 31,
    borderRadius: Border.br_6xs,
    top: 0,
    position: "absolute",
  },
  votingIconLayout: {
    height: 26,
    width: 30,
    position: "absolute",
  },
  votingTextPosition: {
    width: 24,
    height: 100,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inter,
    fontWeight: "900",
    fontSize: 18,
    left: "35%",
    top: "12%",
    position: "absolute",
  },
  bgdown: {
    backgroundColor: Color.colorSteelblue,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  answerbuttonChild: {
    left: 257,
    backgroundColor: Color.colorSkyblue,
    width: 143,
    borderRadius: Border.br_6xs,
    height: 31,
    top: 12,
  },
  answer: {
    // marginTop: -8,
    // marginLeft: 81.7,
    width: "100%",
    height: "100%",
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.inter,
    fontWeight: "900",
    fontSize: 16,
    left: "-2%",
    top: "12%",
    // position: "absolute",
  },
  upVoteButtonStyle: {
    backgroundColor: Color.colorDarkseagreen,
    left: 0,
    width: 84,
  },
  downVoteButtonStyle: {
    left: 92,
    backgroundColor: Color.colorSalmon,
  },
  downVoteIconStyle: {
    top: "8%",
    left: "45%",
  },
  upVoteIconsStyle: {
    top: 2,
    left: "43%",
  },
  downVoteNumStyle: {
    // marginLeft: 46.4,
  },
  upVoteNumStyle: {
    marginLeft: "0%",
  },
  respond: {
    left: 29,
    width: 176,
    height: 31,
    top: 12,
  },
  answerbuttonParent: {
    top: "1400%",
    height: 56,
    width: 430,
    // position: "absolute",
    left: 0,
  },
});

export default SectionForm;
