import moment from 'moment'
import React, { Component } from 'react';

let Mapbox = null;
let MapView = null;

/**
 * <DiscoverMapMapbox />
 * @param props
 * @returns {XML}
 * @constructor
 */
function DiscoverMapMapbox(props) {
    try {
        if (!Mapbox) {
            Mapbox = require('react-native-mapbox-gl');
            MapView = Mapbox.MapView;
        }
    }
    catch (ex) {
        console.log(ex);
    }

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
            styleURL='mapbox://styles/mapbox/dark-v9'
            annotations={annotations}
            showsUserLocation={false}
            userTrackingMode={Mapbox.userTrackingMode.follow}
            logoIsHidden={true}
        />
    );
}

export default DiscoverMapMapbox;
