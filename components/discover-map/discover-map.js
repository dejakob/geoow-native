import moment from 'moment';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Mapbox, { MapView } from 'react-native-mapbox-gl';
import { getStyle } from 'react-native-styler';
import './discover-map.style';

/**
 * <DiscoverMap />
 * @constructor
 */
function DiscoverMap(props) {
    const annotations = props.events.map(event => ({
        coordinates: event.getIn(['location', 'geocoords']).toJS().reverse(),
        type: 'point',
        title: event.get('name'),
        subtitle: `${moment(event.get('startTime')).format('ddd')} • ${moment(event.get('endTime')).format('HH:mm')}`,
        id: event.get('_id')
    })).toJS();

    return (
        <MapView
            initialCenterCoordinate={{ latitude: props.latitude, longitude: props.longitude }}
            style={getStyle('discoverMap')}
            styleURL='mapbox://styles/mapbox/dark-v9'
            annotations={annotations}
            showsUserLocation={true}
            annotationsAreImmutable
            userTrackingMode={Mapbox.userTrackingMode.follow}
        />
    );
}

export default DiscoverMap;
