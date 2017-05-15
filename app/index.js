import React, { Component } from 'react';
import { connectStyler } from 'react-native-styler';
import { StackNavigator } from 'react-navigation';
import { connect as connectRedux } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../actions';
import store from '../services/store';
import Auth from './auth';
import Register from './register';
import Plan from './plan';
import Preferences from './preferences';
import Dashboard from './dashboard';
import '../themes';

const App = StackNavigator({
    Auth: { screen: connect(Auth) },
    Register: { screen: connect(Register) },
    Plan: { screen: connect(Plan) },
    Preferences: { screen: connect(Preferences) },
    Dashboard: { screen: connect(Dashboard) }
}, {
    mode: 'modal'
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

export default connectStyler(<App />);
