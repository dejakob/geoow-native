import React from 'react';
import { getStyle } from 'react-native-styler';
import MapView from 'react-native-maps';
import './discover-map.style';

/**
 * <DiscoverMap />
 * @constructor
 */
function DiscoverMap(props) {
    // Todo: coords should be opposite? No?

    return (
        <MapView
            style={getStyle('discoverMap')}
            region={{
              latitude: props.latitude,
              longitude: props.longitude,
              latitudeDelta: 0.0018,
              longitudeDelta: 0.0321,
            }}
        >
            {props.events.map(event => (
                <MapView.Marker
                    key={event.get('_id')}
                    coordinate={{ latitude: event.getIn(['location', 'geocoords', 1]), longitude: event.getIn(['location', 'geocoords', 0]) }}
                    title={event.get('name')}
                    description={event.get('description')}
                />
            ))}
        </MapView>
    )
}

export default DiscoverMap;
