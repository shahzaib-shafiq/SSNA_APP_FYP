import React, { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default function LOCATION() {

    const [markersList, setmarkerList] = useState([
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


            id: 3,
            latitude: 31.601881193684026,
            longitude: 73.03624056637959,
            title: 'Cricket Ground',
            description: 'Fitness Center',
        },

        {


            id: 3,
            latitude: 31.601058143059394,
            longitude: 73.03655150650509,
            title: 'basketball Court',
            description: 'Badminton',
        },
        {




            id: 3,
            latitude: 31.601604325090502,
            longitude: 73.03703725515523,
            title: 'Futsall Ground',
            description: '',
        },
        {




            id: 3,
            latitude: 31.601954873191197,
            longitude: 73.0348776944143,
            title: 'Parking',
            description: 'Car parking',
        },




    ])



    // const MyCustomMarkerView = () => {
    //     return (
    //         <View>
    //             <Image source={require('../assets/hostel.png')} />

    //         </View>
    //     );
    // };

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                    latitude: 31.601125557441485,
                    longitude: 73.03560170317493,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.001,
                }}
            >
                {/* <Marker coordinate={{latitude:31.601005195088252,longitude:73.03574086779815}}

>
 <MyCustomMarkerView/>  
</Marker>; */}
                {
                    markersList.map((maker) => {
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
}



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
// }

