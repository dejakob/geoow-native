import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Mapbox, { MapView } from 'react-native-mapbox-gl';
import { getStyle } from 'react-native-styler';
import * as Router from '../../services/router';
import './directions-map.style';

/**
 * <DirectionsMap />
 * @constructor
 */
class DirectionsMap extends Component {
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
            showMap: lastRouteName === 'EventDetail'
        });
    }

    render() {
        if (!this.state.showMap) {
            return (
                <View
                    style={[getStyle('directionsMap'), { backgroundColor: 'black' }]}
                />
            );
        }

        const { props } = this;
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

}

export default DirectionsMap;
