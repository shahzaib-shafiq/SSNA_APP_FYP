import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";
import Toast from 'react-native-toast-message';
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import database from '@react-native-firebase/database'; // Import Firebase database

const ErrorMessage = ({ onClose, userDetail }) => {

  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("CS");
  const [question, setQuestion] = useState("");

  console.log('EM-User Detail:', userDetail); // Make sure this prints the correct user details
  // console.log('EM-Route:', route);

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };


  const handleNewQuery = () => {
    // Check if either title or question is empty
    if (title.trim() === "" || question.trim() === "") {
      Toast.show({
        type: 'error',  // Use 'error' type for error messages
        text1: 'Missing Information',
        text2: 'Both title and question are required to post your query.'
      });
      return; // Exit the function to prevent further execution
    }
  
    // Query the Firebase database to count the number of queries posted by the current user
    database().ref('/Guidance')
      .orderByChild('Author')
      .equalTo(userDetail?.familyName)
      .once('value')
      .then(snapshot => {
        const userQueries = snapshot.exists() ? Object.values(snapshot.val()) : [];
        if (userQueries.length < 2) {
          // User has posted fewer than 2 queries, allow them to post a new one
          const newQuery = {
            Title: title,
            Department: department,
            Author: userDetail?.familyName,
            Downvotes: 0,
            Upvotes: 0,
            Summary: question,
            AuthorId: userDetail?.id,
            Date: formatDate(new Date()),
            img: 'https://firebasestorage.googleapis.com/v0/b/ssna-admin.appspot.com/o/FacultyImgs%2F17bd54e3-3347-46bc-8123-2bfb8ed1e58e?alt=media&token=f1c0a37a-56f4-4e4e-bdcf-66dfc197317d'
          };
  
          // Push the new query to the Firebase database
          database().ref('/Guidance').push(newQuery)
            .then(() => {
              console.log('New query added successfully!');
              Toast.show({
                type: 'info',
                text1: 'Query Added Successfully',
                text2: 'Your query has been posted in the portal.'
              });
              onClose();
            })
            .catch(error => {
              console.error('Error adding new query: ', error);
            });
        } else {
          // User has already posted 2 queries, prevent them from posting another one
          console.log('User has already posted 2 queries');
          Toast.show({
            type: 'info',
            text1: 'Limit Exceeded',
            text2: 'You cannot post more than 2 queries at a time'
          });
          onClose();
        }
      })
      .catch(error => {
        console.error('Error checking existing queries: ', error);
      });
  };
  

  return (
    <View style={styles.popupMainViewStyle}>
      <View style={[styles.errormessageChild, styles.errormessageShadowBox]}>

        <Picker
          selectedValue={department}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setDepartment(itemValue)}
        >
          <Picker.Item label="Computer Science (CS)" value="CS" />
          <Picker.Item label="Electrical Engineering (EE)" value="EE" />
          <Picker.Item label="Artificial Intelligence (AI)" value="AI" />
          <Picker.Item label="Software Engineering (SE)" value="SE" />
        </Picker>

        <TextInput
          style={styles.input}
          onChangeText={setTitle}
          value={title}
          placeholder="Enter Title"
          maxLength={20}
        />

        <TextInput
          style={[styles.input, styles.questionInput]}
          onChangeText={setQuestion}
          value={question}
          placeholder="Enter Question"
          multiline={true}
          maxLength={200}
        />
        <Pressable
          style={[styles.errormessageItem, styles.errormessageShadowBox]}
          onPress={handleNewQuery}
        >
          <Text style={styles.postAnswer}>Post Question</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    backgroundColor: 'white',
    borderColor: 'rgba(128, 128, 128, 0.3)', // Adjust the alpha value
  },
  picker: {
    height: 50,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
  },
  questionInput: {
    height: "60%", // Adjust based on your preference
    textAlignVertical: 'top', // Aligns text to the top
  },
  errormessageShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: -1,
      height: 6,
    },
    position: "absolute",
  },
  errormessageChild: {
    height: "89.77%",
    width: "100%",
    top: "6.87%",
    right: "0%",
    bottom: "3.36%",
    left: "0%",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowRadius: 12.3,
    elevation: 12.3,
  },
  publicTypo: {
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  errormessageInnerPosition: {
    left: "4.4%",
    position: "absolute",
  },
  answerToAnas1: {
    height: "5.1%",
    width: "57.99%",
    top: "10.38%",
    left: "3.75%",
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    color: Color.colorGray_1000,
  },
  public: {
    height: "2.65%",
    width: "12.21%",
    top: "15.5%",
    left: "8.78%",
    fontSize: FontSize.size_xs,
    color: Color.colorGray_700,
  },
  errormessageItem: {
    height: "5.85%",
    width: "41.15%",
    top: "87.87%",
    right: "6.25%",
    bottom: "6.29%",
    left: "52.6%",
    borderRadius: Border.br_4xs,
    backgroundColor: Color.colorLimegreen,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 4,
    elevation: 4,
  },
  postAnswer: {
    height: "100%",
    width: "100%",
    top: "18%",
    left: "0%",
    fontSize: FontSize.size_base,
    fontWeight: "700",
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.inter,
    // position: "absolute",
  },
  fontistoworldOIcon1: {
    height: "2.12%",
    width: "3.75%",
    top: "15.85%",
    right: "91.85%",
    bottom: "82.03%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0.4,
  },
  errormessageInner: {
    height: "66.02%",
    width: "90.91%",
    top: "19.2%",
    right: "4.69%",
    bottom: "14.78%",
    borderRadius: Border.br_2xl,
    backgroundColor: Color.colorGainsboro_300,
  },
  popupMainViewStyle: {
    top: "13%",
    left: "4%",
    width: "92%",
    height: "90%",
    // position: "absolute",
  },
});

export default ErrorMessage;
