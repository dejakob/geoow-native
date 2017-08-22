import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getStyle } from 'react-native-styler';

let Mapbox = null;
let MapView = null;

/**
 * <DirectionsMapMapbox />
 * @param props
 * @returns {XML}
 * @constructor
 */
function DirectionsMapMapbox(props) {
    try {
        if (!Mapbox) {
            Mapbox = require('react-native-mapbox-gl');
            MapView = Mapbox.MapView;
        }
    }
    catch (ex) {
        console.log(ex);
    }

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

    return (
        <View
            style={getStyle('directionsMap__wrapper')}
        >
            <MapView
                initialCenterCoordinate={{ latitude: 0, longitude: 0 }}
                initialZoomLevel={13}
                styleURL='mapbox://styles/mapbox/dark-v9'
                showsUserLocation={true}
                userTrackingMode={Mapbox.userTrackingMode.follow}
                logoIsHidden={true}
                annotations={annotations}
                style={getStyle('directionsMap')}
                ref={mapView => this._mapView = mapView}
            />
            {props.children}
        </View>
    );
}

export default DirectionsMapMapbox;
