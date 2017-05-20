import React from 'react';
import { getStyle } from 'react-native-styler';
import MapView from 'react-native-maps';
import './discover-map.style';

/**
 * <DiscoverMap />
 * @constructor
 */
function DiscoverMap() {
    return (
        <MapView
            style={getStyle('discoverMap')}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
        />
    )
}

export default DiscoverMap;
