import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Mapbox, { MapView } from 'react-native-mapbox-gl';
import { getStyle } from 'react-native-styler';
import './directions-map.style';

/**
 * <DirectionsMap />
 * @constructor
 */
function DirectionsMap(props) {
    const annotations = [{
        coordinates: props.directions,
        type: 'polyline',
        strokeColor: StyleSheet.flatten(getStyle('directionsMap__polygon')).color,
        strokeWidth: 4,
        strokeAlpha: .5,
        id: 'directions'
    }, {
        coordinates: props.destination,
        type: 'point',
        id: 'destination'
    }];

    return (
        <View
            style={getStyle('directionsMap__wrapper')}
        >
            <MapView
                initialCenterCoordinate={{ latitude: props.latitude, longitude: props.longitude }}
                style={getStyle('directionsMap')}
                styleURL='mapbox://styles/mapbox/dark-v9'
                showsUserLocation={true}
                userTrackingMode={Mapbox.userTrackingMode.follow}
                logoIsHidden={true}
                annotations={annotations}
                annotationsAreImmutable
            />
            {props.children}
        </View>
    );
}

export default DirectionsMap;
