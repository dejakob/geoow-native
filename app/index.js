import React, { Component } from 'react';
import { connectStyler, getCurrentTheme } from 'react-native-styler';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Mapbox from 'react-native-mapbox-gl';
import { connect as connectRedux } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../actions';
import store from '../services/store';
import Auth from './auth';
import Plan from './plan';
import Preferences from './preferences';
import Dashboard from './dashboard';
import Diary from './diary';
import Profile from './profile';
import Discover from './discover';
import EventDetail from './event-detail';
import Scan from './scan';
import * as Router from '../services/router';
import { MAPBOX_TOKEN } from '../constants';
import '../themes';
import '../constants/'

Mapbox.setAccessToken(MAPBOX_TOKEN);

const TabNavigation = TabNavigator({
    Dashboard: { screen: connect(Dashboard) },
    Diary: { screen: connect(Diary) },
    // Profile: { screen: connect(Profile) },
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: getCurrentTheme().colors.active,
        inactiveTintColor: getCurrentTheme().colors.inactive,
        showLabel: false,
        activeBackgroundColor: getCurrentTheme().colors.sheet,
        inactiveBackgroundColor: getCurrentTheme().colors.sheet,
        showIcon: true,
        style: {
            backgroundColor: getCurrentTheme().colors.sheet,
        },
        indicatorStyle: {
            backgroundColor: getCurrentTheme().colors.active,
        },
        pressColor: getCurrentTheme().colors.active
    },
});
const App = StackNavigator({
    Auth: { screen: connect(Auth) },
    Plan: { screen: connect(Plan) },
    Preferences: { screen: connect(Preferences) },
    Tabs: { screen: TabNavigation },
    Discover: { screen: connect(Discover) },
    EventDetail: { screen: connect(EventDetail) },
    Scan: { screen: connect(Scan) }
}, {
    mode: 'modal',
    onTransitionStart: params => {
        Router.triggerTransitionListeners(params);
    },
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

export default connectStyler(<App ref={router => Router._setRouter(router)} />);
