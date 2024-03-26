import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";
import Toast from 'react-native-toast-message';
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import database from '@react-native-firebase/database'; // Import Firebase database

const AnswerQueryPopup = ({ onClose, userDetail,route }) => {

    const { query, udTemp, rTemp } = route.params;

    const navigation = useNavigation();
    const [answer, setTitle] = useState("");
    const [question, setQuestion] = useState("");


    console.log('AQP-User Detail:', userDetail); // Make sure this prints the correct user details
    console.log('AQP-Route:', route);
    console.log('AQP-Query:', query);

    const formatDate = (date) => {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date);
    };

    const handleNewAnswer = (queryID) => {
        // const { id } = query.id; // Assuming `id` is the property containing the query ID
        console.log('AQP-QueryID:', queryID);

        // Creating a new answer object with user-provided answer, author, and current date
        const newAnswer = {
            Answer: question,
            Author: userDetail?.familyName || "Unknown", // Using userDetail for author name or providing a default value
            Date: formatDate(new Date()), // Formatting the current date
        };
    
        // Pushing the new answer to the Firebase database under the specific query ID
        database().ref(`/Guidance/${queryID}/Answers`).push(newAnswer)
            .then(() => {
                console.log('New answer added successfully!');
                Toast.show({
                    type: 'info',
                    text1: 'Answer Added Successfully',
                    text2: 'Your answer has been posted.'
                });
                onClose(); // Closing the form/modal after successful submission
            })
            .catch(error => {
                console.error('Error adding new answer: ', error);
            });
    };

    return (
        <View style={styles.popupMainViewStyle}>
            <View style={[styles.errormessageChild, styles.errormessageShadowBox]}>

                <Text style={styles.ansCommTxtStyle}>Answer the query</Text>

                <TextInput
                    style={[styles.input, styles.questionInput]}
                    onChangeText={setQuestion}
                    value={question}
                    placeholder="Enter Answer"
                    multiline={true}
                    maxLength={200}
                />
                <Pressable
                    style={[styles.errormessageItem, styles.errormessageShadowBox]}
                    onPress={() => handleNewAnswer(query.id)}
                    >
                    <Text style={styles.postAnswer}>Post Answer</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    ansCommTxtStyle: {
        height: "12%",
        width: "100%",
        top: "5%",
        left: "5%",
        fontSize: 25,
        fontWeight: "500",
        color: Color.colorDimgray_100,
        textAlign: "left",
        fontFamily: FontFamily.inter,
        // position: "absolute",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
        backgroundColor: 'white',
        borderColor: 'rgba(128, 128, 128, 0.3)', // Adjust the alpha value
    },
    questionInput: {
        height: "70%", // Adjust based on your preference
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
    popupMainViewStyle: {
        top: "10%",
        left: "4%",
        width: "92%",
        height: "90%",
        // position: "absolute",
    },
});

export default AnswerQueryPopup;
