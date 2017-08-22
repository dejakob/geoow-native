import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Image } from 'react-native';
import { getStyle } from 'react-native-styler';
import DiscoverMapMapbox from './discover-map-mapbox';
import { getGoogleMapsToken } from '../../services/directions';
import * as Router from '../../services/router';
import './discover-map.style';

const API_VERSION = 21;

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
        this.renderMapbox = this.renderMapbox.bind(this);
        this.renderStaticMap = this.renderStaticMap.bind(this);
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

        const majorVersionIOS = parseInt(Platform.Version, 10);

        if (Platform.OS === 'android' && majorVersionIOS < API_VERSION) {
            return this.renderStaticMap();
        }

        return this.renderMapbox();
    }

    renderMapbox() {
        return (
            <DiscoverMapMapbox
                {...this.props}
            />
        )
    }

    renderStaticMap() {
        const latLng = `${this.props.latitude},${this.props.longitude}`;
        const flattenedStyle = StyleSheet.flatten(getStyle('discoverMap'));
        const size = `${parseInt(flattenedStyle.width, 10)}x${parseInt(flattenedStyle.height, 10)}`;

        const markers = `markers=color:red%7Clabel:C%7C40.718217,-73.998284`

        return (
            <Image
                style={[getStyle('discoverMap')]}
                source={{ uri: `https://maps.googleapis.com/maps/api/staticmap?center=${latLng}&zoom=15&size=${size}&style=element:labels|visibility:off&style=element:geometry.stroke|visibility:off&style=feature:landscape|element:geometry|saturation:-100&style=feature:water|saturation:-100|invert_lightness:true&key=${getGoogleMapsToken()}` }}
            />
        );
    }
}

export default DiscoverMap;
