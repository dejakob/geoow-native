import moment from 'moment';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Mapbox, { MapView } from 'react-native-mapbox-gl';
import { getStyle } from 'react-native-styler';
import * as Router from '../../services/router';
import './discover-map.style';

/**
 * <DirectionsMap />
 * @constructor
 */
class DiscoverMap extends Component
{
    constructor() {
        super();

        this.state = {
            showMap: true
        };

        this._handleRouteChange = this._handleRouteChange.bind(this);
    }

    componentWillMount() {
        Router.addOnTransitionListener(this._handleRouteChange);
    }

    componentWillUnmount() {
        Router.removeOnTransitionListener(this._handleRouteChange);
    }

    _handleRouteChange(params) {
        const lastRouteName = params.navigation.state.routes[params.navigation.state.routes.length - 1].routeName;

        this.setState({
            showMap: lastRouteName === 'Tabs'
        });
    }

    render () {
        if (!this.state.showMap) {
            return (
                <View
                    style={[getStyle('discoverMap'), { backgroundColor: 'black' }]}
                />
            );
        }

        const { props } = this;
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
}

export default DiscoverMap;
