import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker as MapMarker } from 'react-native-maps';

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

    const markers = [
        {
            id: 1,
            latitude: 37.78825,
            longitude: -122.4324,
            title: 'You are here',
            description: 'Your current location',
        },
        {
            id: 2,
            latitude: 67.78825,
            longitude: -22.4324,
            title: 'You are here',
            description: 'Your current location',
        },
        {
            id: 3,
            latitude: 87.78825,
            longitude: -122.4324,
            title: 'You are here',
            description: 'Your current location',
        },
    ];

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                    
                    latitude: 31.60115140201088,
                    longitude: 73.03566576594405,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                {markers.map(marker => (
                    <MapMarker
                        key={marker.id}
                        coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                        title={marker.title}
                        description={marker.description}
                    />
                ))}
            </MapView>
        </View>
    );
}

