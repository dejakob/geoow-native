import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { getStyle } from 'react-native-styler';

/**
 * <DirectionsMapMap />
 * @param props
 * @returns {XML}
 * @constructor
 */
function DirectionsMapMap(props) {
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

    const initialRegion = {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00421,
    };

    return (
        <View
            style={getStyle('directionsMap__wrapper')}
        >
            <MapView
                initialRegion={initialRegion}
                showsUserLocation={true}
                logoIsHidden={true}
                annotations={annotations}
                style={getStyle('directionsMap')}
                ref={mapView => this._mapView = mapView}
            />
            {props.children}
        </View>
    );
}

export default DirectionsMapMap;
