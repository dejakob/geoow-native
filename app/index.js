import React, { Component } from 'react';
import { Platform } from 'react-native';
import { connectStyler, getCurrentTheme } from 'react-native-styler';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { connect as connectRedux } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../actions';
import store from '../services/store';
import Auth from './auth';
import AuthEmail from './auth-email';
import AuthVerify from './auth-verify';
import GameBoard from './game-board';
import * as Router from '../services/router';
import '../themes';
import '../constants/'

// on Android, the URI prefix typically contains a host in addition to scheme
const prefix = 'geoow://';

const App = StackNavigator({
    Auth: { screen: connect(Auth) },
    AuthEmail: { screen: connect(AuthEmail) },
    AuthVerify: {
        screen: connect(AuthVerify),
        path: 'auth/:verificationToken',
    },
    GameBoard: { screen: connect(GameBoard) }
}, {
    mode: 'modal',
    onTransitionStart: (trans) => {
        Router.triggerTransitionListeners(trans.scene.route.routeName, trans.scene.route.params);
    },
    navigationOptions: {
        gesturesEnabled: false
    }
});

function mapStateToProps (state) {
    return {
        ...state,
        store
    };
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators(Actions, dispatch);
}


function connect (component) {
    const ConnectedComponentToRedux = connectRedux(mapStateToProps, mapDispatchToProps)(component);
    const connected = props => <ConnectedComponentToRedux {...props} store={store} />;

    connected.navigationOptions = component.navigationOptions;

    return connected;
}

export default connectStyler(<App ref={router => Router._setRouter(router)} uriPrefix={prefix} />);
