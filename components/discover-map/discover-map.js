import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Image } from 'react-native';
import { getStyle } from 'react-native-styler';
import DiscoverMapMap from './discover-map-map';
import { getGoogleMapsToken } from '../../services/directions';
import * as Router from '../../services/router';
import './discover-map.style';

const API_VERSION = 21;

/**
 * <DirectionsMap />
 * @constructor
 */
class DiscoverMap extends React.PureComponent
{
    constructor() {
        super();

        this.state = {
            showMap: true
        };

        this._handleRouteChange = this._handleRouteChange.bind(this);
        this.renderMap = this.renderMap.bind(this);
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

        return this.renderMap();
    }

    renderMap() {
        return (
            <DiscoverMapMap
                {...this.props}
            />
        )
    }

    renderStaticMap() {
        const annotations = this.props.events.map(event => ({
            latitude: event.getIn(['location', 'geocoords', 1]),
            longitude: event.getIn(['location', 'geocoords', 0]),
        })).toJS();

        const flattenedStyle = StyleSheet.flatten(getStyle('discoverMap'));
        const size = `${parseInt(flattenedStyle.width, 10)}x${parseInt(flattenedStyle.height, 10)}`;

        const markers = annotations
            .map(annotation => `markers=color:red%7C${annotation.latitude},${annotation.longitude}`)
            .join('&');

        return (
            <Image
                style={[getStyle('discoverMap')]}
                source={{ uri: `https://maps.googleapis.com/maps/api/staticmap?center=${this.props.latitude},${this.props.longitude}&zoom=15&size=${size}&maptype=roadmap&style=element:geometry%7Ccolor:0x1d2c4d&style=element:labels.text.fill%7Ccolor:0x8ec3b9&style=element:labels.text.stroke%7Ccolor:0x1a3646&style=feature:administrative.country%7Celement:geometry.stroke%7Ccolor:0x4b6878&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0x64779e&style=feature:administrative.province%7Celement:geometry.stroke%7Ccolor:0x4b6878&style=feature:landscape.man_made%7Celement:geometry.stroke%7Ccolor:0x334e87&style=feature:landscape.natural%7Celement:geometry%7Ccolor:0x023e58&style=feature:poi%7Celement:geometry%7Ccolor:0x283d6a&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x6f9ba5&style=feature:poi%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d&style=feature:poi.park%7Celement:geometry.fill%7Ccolor:0x023e58&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x3C7680&style=feature:road%7Celement:geometry%7Ccolor:0x304a7d&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x98a5be&style=feature:road%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d&style=feature:road.highway%7Celement:geometry%7Ccolor:0x2c6675&style=feature:road.highway%7Celement:geometry.stroke%7Ccolor:0x255763&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0xb0d5ce&style=feature:road.highway%7Celement:labels.text.stroke%7Ccolor:0x023e58&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x98a5be&style=feature:transit%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d&style=feature:transit.line%7Celement:geometry.fill%7Ccolor:0x283d6a&style=feature:transit.station%7Celement:geometry%7Ccolor:0x3a4762&style=feature:water%7Celement:geometry%7Ccolor:0x0e1626&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x4e6d70&scale=2&key=${getGoogleMapsToken()}` }}
            />
        );
    }
}

export default DiscoverMap;
