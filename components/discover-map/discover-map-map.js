import moment from 'moment'
import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { getStyle } from 'react-native-styler';

/**
 * <DiscoverMapMap />
 * @param props
 * @returns {XML}
 * @constructor
 */
function DiscoverMapMap(props) {
    const annotations = props.events.map(event => ({
        coordinate: {
            latitude: event.getIn(['location', 'geocoords', 1]),
            longitude: event.getIn(['location', 'geocoords', 0])
        },
        title: event.get('name'),
        description: `${moment(event.get('startTime')).format('ddd')} • ${moment(event.get('endTime')).format('HH:mm')}`,
        id: event.get('_id')
    })).toJS();

    const initialRegion = {
        latitude: props.latitude,
        longitude: props.longitude,
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00421,
    };

    return (
        <MapView
            initialRegion={initialRegion}
            style={getStyle('discoverMap')}
            initialZoomLevel={13}
        >
            {annotations.map(annotation =>
                <MapView.Marker
                    {...annotation}
                />
            )}
        </MapView>
    );
}

export default DiscoverMapMap;
