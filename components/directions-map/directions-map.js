import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { getStyle } from 'react-native-styler';
import * as Router from '../../services/router';
import './directions-map.style';

const API_VERSION = 21;

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

        const majorVersionIOS = parseInt(Platform.Version, 10);

        if (Platform.OS === 'android' && majorVersionIOS < API_VERSION) {
            return (
                <View
                    style={{ flex: 1 }}
                >
                    {this.props.children}
                </View>
            );
        }

        return (
            <DirectionsMap
                {...this.props}
            />
        )
    }

}

export default DirectionsMap;
