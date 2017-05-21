import React from 'react';
import { getStyle } from 'react-native-styler';
import MapView from 'react-native-maps';
import './discover-map.style';

/**
 * <DiscoverMap />
 * @constructor
 */
function DiscoverMap(props) {
    return (
        <MapView
            style={getStyle('discoverMap')}
            region={{
              latitude: props.latitude,
              longitude: props.longitude,
              latitudeDelta: 0.0018,
              longitudeDelta: 0.0321,
            }}
        />
    )
}

export default DiscoverMap;
