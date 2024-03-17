import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE } from 'react-native-maps';
const LOCATION = () => {
const [markers, setMarkers] = React.useState([
{
id:1,
latitude: 31.601683361360863,
longitude: 73.03562980756786,
title: "Cafe",
description: "Uni Cafe"
}

]);

return (
  <View style={styles.container}>
  <MapView
    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
    style={styles.map}
    region={{
      latitude: 31.601425644037725,
      longitude: 73.03561877051922,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    }}
  >

{markers.map((maker)=>{
return (
  <Marker
  key={maker.id}
  coordinate={{ latitude: maker.latitude, longitude: maker.longitude }}
  title={maker.title}
  description={maker.description}
/>

)
})

}
  </MapView>
</View>
      );
    };
    

    const styles = StyleSheet.create({
      container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
     });


export default LOCATION;


// If the map is still not displaying, there are a few things you can check:

// Permissions: Ensure that your app has the necessary permissions to access the device's location if you are using PROVIDER_GOOGLE. For Android, you need to include the ACCESS_FINE_LOCATION permission in your AndroidManifest.xml.

// API Key: If you are using Google Maps, make sure you have a valid API key and that it is correctly configured in your project. You can check the API key configuration in the Google Cloud Platform Console.

// Internet Connection: Ensure that your device/emulator is connected to the internet as the map tiles are loaded from Google's servers.

// Console Errors: Check the console for any errors that might indicate what the issue could be. You can enable debugging in your emulator/device to see console logs.

// Version Compatibility: Ensure that the versions of react-native-maps, react-native, and other related dependencies are compatible with each other.

// If none of these steps resolve the issue, try simplifying your code to a minimal example and gradually add complexity back to identify the source of the problem.





