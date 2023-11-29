import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import 'expo-dev-client';
import { GoogleSignin,GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import  { useState, useEffect } from 'react';


function Login() {
  
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  GoogleSignin.configure({
    webClientId:'520491424715-bsfkctagkme6l6vt8pbhd8lph4d4p6tn.apps.googleusercontent.com'
})



  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const onGoogleButtonPress =async ()=> {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    const user_sign_in= auth().signInWithCredential(googleCredential);
  
  user_sign_in.then((user)=>{
    console.log(user)
  })
  .catch((error)=>{
    console.log(error)
  })
  }

  if (initializing) return null;


 if(!user){
  return(
    <View style={styles.container}>
<GoogleSigninButton 
onPress={onGoogleButtonPress}
/>

    </View>
  )
 }

 return(
  <View style={styles.container}>
<Text>Welcome , {user.displayName}</Text>

  </View>
)

}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 


