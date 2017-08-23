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
    console.log('directions map', props);

    const annotations = [{
        coordinates: props.directions,
        type: 'polyline',
        strokeColor: StyleSheet.flatten(getStyle('directionsMap__polygon')).color,
        strokeWidth: 4,
        strokeAlpha: 1,
        id: 'directions'
    }, {
        coordinates: props.destination,
        type: 'point',
        id: 'destination'
    }];

    const destinationCoord = {
        latitude: props.destination[1],
        longitude: props.destination[0],
    }

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
                provider={PROVIDER_GOOGLE}
                initialRegion={initialRegion}
                customMapStyle={getMapStyling()}
                style={getStyle('directionsMap')}
                showsUserLocation={true}
                followsUserLocation={true}
            />
            {props.children}
        </View>
    );
}

export default DirectionsMapMap;
