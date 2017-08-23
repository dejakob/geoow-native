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
            initialZoomLevel={13}
            annotations={annotations}
            showsUserLocation={false}
            logoIsHidden={true}
        />
    );
}

export default DiscoverMapMap;
