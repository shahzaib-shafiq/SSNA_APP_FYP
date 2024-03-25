import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
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
            
            latitude: 31.601005195088252,
            longitude: 73.03574086779815,
            title: 'CFD Campus',
            description: 'Fast University',
        },
        // {
            
        //     id: 2,
        //     latitude: 31.604715969663634,
        //     longitude:73.03705512591637 ,
        //     title: 'Boys Hostel',
        //     description: 'Faculty and Boys Hostel',
        // },
        // {
        //     id: 3,
        //     latitude: 31.60394923517809,
        //     longitude: 73.03672950072392,
        //     title: 'Tennis Court',
        //     description: 'Fitness Center',
        // },

    ])



    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                    latitude: 31.601125557441485,
                    longitude: 73.03560170317493,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >



                {
                    markersList.map((maker) => {
                        return (
                            <Marker
                                key={maker.id}
                                coordinate={{latitude:maker.latitude,longitude:maker.longitude}}
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

