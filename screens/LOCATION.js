import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps';
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, Pressable } from "react-native";
import { Picker } from '@react-native-picker/picker';


const styles = StyleSheet.create({
    zoomButton: {
        position: "absolute",
        backgroundColor: "rgba(1,1,2,0.5)",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        height: 50,
        width: 50,
    },
    zoomIn: {
        left: "85%", // Adjust as necessary
        top: "40%", // Adjust as necessary
    },
    zoomOut: {
        left: "85%", // Adjust as necessary
        top: "48%", // Adjust as necessary
    },
    upper: {
        top: -193,
        left: -1,
        width: 431,
        backgroundColor: Color.colorBlack,
        height: 260,
        position: "absolute",
    },
    bluebg: {
        backgroundColor: "grey",
    },
    bluebgPosition: {
        left: "0%",
        bottom: "0%",
        right: "0%", top: "0%",
        height: "100%",
        position: "absolute",
        width: "100%",
    },
    icon: {
        top: 9,
        left: 3,
        maxWidth: "100%",
        maxHeight: "100%",
        overflow: "hidden",
        height: 30,
        width: 30,
    },
    textTypo: {
        color: Color.colorWhite,
        textAlign: "left",
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
    },
    guidancePortal: {
        height: "100%",
        width: "57%",
        top: "81.6%",
        left: "20%",
        fontSize: FontSize.size_5xl,
        position: "absolute",
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
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    zoomButtonText: {
        color: 'white', // This will make the text color white
        fontFamily: FontFamily.interSemiBold,
        fontSize: FontSize.size_5xl,
        fontWeight: "400",
    },
    pickerContainer: {
        position: 'absolute',
        backgroundColor: '#FFF',
        top: 70,
        left: 20,
        right: 20,
        zIndex: 1,
    },
    picker: {
        height: 50,
        width: '100%',
    }
});

export default function LOCATION({ route }) {

    const { userDetail } = route.params;
    console.log('Map-User Detail:', userDetail); // Make sure this prints the correct user details
    const navigation = useNavigation();

    const [region, setRegion] = useState({
        latitude: 31.601125557441485,
        longitude: 73.03560170317493,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008,
    });
    const [fromLocation, setFromLocation] = useState(null);
    const [toLocation, setToLocation] = useState(null);
    const [markersList, setMarkerList] = useState([
        // Sample marker initialization
        {
            id: 1,
            latitude: 31.600791501404007,
            longitude: 73.03674226553963,
            title: 'SFC',
            description: 'Student Facilation Center',
        },
        {
            id: 2,
            latitude: 31.603291983218153,
            longitude: 73.03586947447167,
            title: 'Football Ground',
            description: 'Playing Area',
        },
        {
            id: 3,
            latitude: 31.601677813823322,
            longitude: 73.03560234216219,
            title: 'FSM',
            description: 'cafe\nauditorium\nlibrary',
        },

        {
            id: 4,
            latitude: 31.601881193684026,
            longitude: 73.03624056637959,
            title: 'Cricket Ground',
            description: 'Fitness Center',
        },

        {
            id: 5,
            latitude: 31.601058143059394,
            longitude: 73.03655150650509,
            title: 'basketball Court',
            description: 'Badminton',
        },
        {
            id: 6,
            latitude: 31.601604325090502,
            longitude: 73.03703725515523,
            title: 'Futsall Ground',
            description: '',
        },
        {
            id: 7,
            latitude: 31.601954873191197,
            longitude: 73.0348776944143,
            title: 'Parking',
            description: 'Car parking',
        },
    ]);

    // Filter for valid coordinates to create a polyline
    const coordinates = markersList.filter(marker => marker.id === fromLocation || marker.id === toLocation).map(marker => ({
        latitude: marker.latitude,
        longitude: marker.longitude,
    }));


    const drawRoute = () => {
        if (fromLocation && toLocation) {
            return (
                <Polyline
                    coordinates={[fromLocation, toLocation]}
                    strokeColor="#000" // Change this to your preferred color
                    strokeWidth={2}
                />
            );
        }
        return null;
    };

    const zoomIn = () => {
        setRegion(prevRegion => ({
            ...prevRegion,
            latitudeDelta: prevRegion.latitudeDelta / 2,
            longitudeDelta: prevRegion.longitudeDelta / 2,
        }));
    };

    const zoomOut = () => {
        setRegion(prevRegion => ({
            ...prevRegion,
            latitudeDelta: prevRegion.latitudeDelta * 2,
            longitudeDelta: prevRegion.longitudeDelta * 2,
        }));
    };

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={region}
                onRegionChangeComplete={region => setRegion(region)}
            >
                {markersList.map(marker => (
                    <Marker
                        key={marker.id}
                        coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                        title={marker.title}
                        description={marker.description}
                    />
                ))}
                {coordinates.length === 2 && (
                    <Polyline
                        coordinates={coordinates}
                        strokeColor="#000" // black
                        strokeWidth={6}
                    />
                )}
            </MapView>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={fromLocation}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => setFromLocation(itemValue)}
                >
                    {markersList.map(marker => (
                        <Picker.Item key={marker.id} label={marker.title} value={marker.id} />
                    ))}
                </Picker>
                <Picker
                    selectedValue={toLocation}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => setToLocation(itemValue)}
                >
                    {markersList.map(marker => (
                        <Picker.Item key={marker.id} label={marker.title} value={marker.id} />
                    ))}
                </Picker>
            </View>
            <Pressable style={[styles.zoomButton, styles.zoomIn]} onPress={zoomIn}>
                <Text style={styles.zoomButtonText}>+</Text>
            </Pressable>
            <Pressable style={[styles.zoomButton, styles.zoomOut]} onPress={zoomOut}>
                <Text style={styles.zoomButtonText}>-</Text>
            </Pressable>

            {/* HEADER */}
            <View style={styles.upper}>
                <LinearGradient
                    colors={["rgba(77, 142, 169, 0)", "#4d7da9"]}
                    style={[styles.bluebg, styles.bluebgPosition]}
                />
                {<Pressable
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
                <Text style={[styles.guidancePortal, styles.textTypo]}>Campus Map</Text>

            </View>

        </View>
    );

    //     return (
    //         <View style={styles.container}>
    //            <MapView
    //                 provider={PROVIDER_GOOGLE}
    //                 style={styles.map}
    //                 region={region}
    //                 onRegionChangeComplete={region => setRegion(region)}
    //             >
    //                 {markersList.map(marker => (
    //                     <Marker
    //                         key={marker.id}
    //                         coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
    //                         title={marker.title}
    //                         description={marker.description}
    //                     />
    //                 ))}
    //                 {coordinates.length === 2 && (
    //                     <Polyline
    //                         coordinates={coordinates}
    //                         strokeColor="#000" // black
    //                         strokeWidth={6}
    //                     />
    //                 )}
    //             </MapView>

    //             <View style={styles.pickerContainer}>
    //                 <Picker
    //                     selectedValue={fromLocation}
    //                     style={styles.picker}
    //                     onValueChange={(itemValue, itemIndex) => setFromLocation(itemValue)}
    //                 >
    //                     {markersList.map(marker => (
    //                         <Picker.Item key={marker.id} label={marker.title} value={marker.id} />
    //                     ))}
    //                 </Picker>
    //                 <Picker
    //                     selectedValue={toLocation}
    //                     style={styles.picker}
    //                     onValueChange={(itemValue, itemIndex) => setToLocation(itemValue)}
    //                 >
    //                     {markersList.map(marker => (
    //                         <Picker.Item key={marker.id} label={marker.title} value={marker.id} />
    //                     ))}
    //                 </Picker>
    //             </View>

    //             <Pressable style={[styles.zoomButton, styles.zoomIn]} onPress={zoomIn}>
    //                 <Text style={styles.zoomButtonText}>+</Text>
    //             </Pressable>
    //             <Pressable style={[styles.zoomButton, styles.zoomOut]} onPress={zoomOut}>
    //             <Text style={styles.zoomButtonText}>-</Text>
    //             </Pressable>

    //     {/* HEADER */}
    //       <View style={styles.upper}>
    //         <LinearGradient
    //           colors={["rgba(77, 142, 169, 0)", "#4d7da9"]}
    //           style={[styles.bluebg, styles.bluebgPosition]}
    //         />
    //         {<Pressable
    //           style={styles.menus1}

    //           onPress={() => 
    //             {console.log('Pressable pressed');
    //             navigation.navigate("MAINPAGE",{userDetail})}}
    //         >
    //           <Image
    //             style={styles.icon}
    //             contentFit="cover" 
    //             source={require("../assets/epback.png")}
    //           />

    //         </Pressable> 
    //         }
    //         <Text style={[styles.guidancePortal, styles.textTypo]}>Campus Map</Text>

    //       </View>

    //         </View>
    //     );
    // }




    ////////////////////////////////////////




    // import React, { useState } from "react";
    // import { View, StyleSheet, Image, Text } from "react-native";
    // import MapView, { PROVIDER_GOOGLE, Marker,Callout } from 'react-native-maps';

    // const styles = StyleSheet.create({
    //     container: {
    //         ...StyleSheet.absoluteFillObject,
    //         flex: 1,
    //         justifyContent: 'flex-end',
    //         alignItems: 'center',
    //     },
    //     map: {
    //         ...StyleSheet.absoluteFillObject,
    //     },
    // });

    // export default function LOCATION() {

    //     const [markersList, setmarkerList] = useState([
    //         {

    //             id: 1,
    //             latitude: 31.600791501404007,
    //             longitude: 73.03674226553963,
    //             title: 'SFC',
    //             description: 'Student Facilation Center',
    //         },
    //         {

    //             id: 2,
    //             latitude: 31.603291983218153,
    //             longitude: 73.03586947447167,
    //             title: 'Football Ground',
    //             description: 'Playing Area',
    //         },
    //         {






    //             id: 3,
    //             latitude: 31.601677813823322,
    //             longitude: 73.03560234216219,
    //             title: 'FSM',
    //             description: 'cafe\nauditorium\nlibrary',
    //         },

    //         {


    //             id: 4,
    //             latitude: 31.601881193684026,
    //             longitude: 73.03624056637959,
    //             title: 'Cricket Ground',
    //             description: 'Fitness Center',
    //         },

    //         {


    //             id: 5,
    //             latitude: 31.601058143059394,
    //             longitude: 73.03655150650509,
    //             title: 'basketball Court',
    //             description: 'Badminton',
    //         },
    //         {




    //             id: 6,
    //             latitude: 31.601604325090502,
    //             longitude: 73.03703725515523,
    //             title: 'Futsall Ground',
    //             description: '',
    //         },
    //         {




    //             id: 7,
    //             latitude: 31.601954873191197,
    //             longitude: 73.0348776944143,
    //             title: 'Parking',
    //             description: 'Car parking',
    //         },




    //     ])

    //     const MyCustomMarkerView=()=>{
    //         return (
    //             <Image source={require('../assets/marker.png')}

    //             style={{

    //                 width:30,
    //                 height:30,
    //             }}
    //             />
    //         )
    //     }


    //     // const MyCustomCalloutView=()=>{
    //     //     return(<View>
    //     //         <Text>CFD</Text>
    //     //     </View>)
    //     // } 
    //     const MyCustomCalloutView = () => {
    //         return (
    //             <View style={{ width: 300, height: 100 }}>
    //                 <Text>CFD</Text>
    //             </View>
    //         );
    //     };

    //     return (
    //         <View style={styles.container}>
    //             <MapView
    //                 provider={PROVIDER_GOOGLE}
    //                 style={styles.map}
    //                 region={{
    //                     latitude: 31.601125557441485,
    //                     longitude: 73.03560170317493,
    //                     latitudeDelta: 0.01,
    //                     longitudeDelta: 0.001,
    //                 }}
    //             >
    //                 <Marker
    //                  coordinate={{ latitude:31.601125557441485,
    //                   longitude: 73.03560170317493}}
    //                   >


    //                     <MyCustomMarkerView />

    //   <Callout>
    //     <MyCustomCalloutView style={{width:300,height:100}} />
    //   </Callout>
    //                 </Marker>;
    //                 {
    //                     markersList.map((maker) => {
    //                         return (
    //                             <Marker
    //                                 key={maker.id}
    //                                 coordinate={{ latitude: maker.latitude, longitude: maker.longitude }}
    //                                 title={maker.title}
    //                                 description={maker.description}
    //                             />

    //                         )
    //                     })
    //                 }
    //             </MapView>
    //         </View>
    //     );


}