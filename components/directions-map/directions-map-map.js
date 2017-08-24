import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { getMapStyling } from '../../services/directions';
import { getStyle } from 'react-native-styler';

/**
 * <DirectionsMapMap />
 * @param props
 * @returns {XML}
 * @constructor
 */
function DirectionsMapMap(props) {
    const destinationCoord = {
        latitude: props.destination[1],
        longitude: props.destination[0],
    };

    const initialRegion = {
        latitude: props.destination[1],
        longitude: props.destination[0],
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00421,
    };

    return (
        <View
            style={getStyle('directionsMap__wrapper')}
        >
            <MapView
                initialRegion={initialRegion}
                customMapStyle={getMapStyling()}
                style={getStyle('directionsMap')}
                showsUserLocation={true}
                followsUserLocation={true}
                loadingEnabled={true}
            >
                <MapView.Marker
                    coordinate={destinationCoord}
                />
                <MapView.Polyline
                    coordinates={props.directions}
                    strokeColor={StyleSheet.flatten(getStyle('directionsMap__polyline')).color}
                    strokeWidth={StyleSheet.flatten(getStyle('directionsMap__polyline')).width}
                />
            </MapView>
            {props.children}
        </View>
    );
}

export default DirectionsMapMap;
