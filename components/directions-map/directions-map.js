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
            />
            {props.children}
        </View>
    );
}

export default DirectionsMap;
