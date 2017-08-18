import React, { Component } from 'react';
import { Platform } from 'react-native';
import { connectStyler, getCurrentTheme } from 'react-native-styler';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Mapbox from 'react-native-mapbox-gl';
import { connect as connectRedux } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../actions';
import store from '../services/store';
import Auth from './auth';
import AuthVerify from './auth-verify';
import Plan from './plan';
import Preferences from './preferences';
import Dashboard from './dashboard';
import Discover from './discover';
import EventDetail from './event-detail';
import Scan from './scan';
import People from './people';
import Profile from './profile';
import * as Router from '../services/router';
import { MAPBOX_TOKEN } from '../constants';
import '../themes';
import '../constants/'

Mapbox.setAccessToken(MAPBOX_TOKEN);

// on Android, the URI prefix typically contains a host in addition to scheme
const prefix = Platform.OS == 'android' ? 'geoow://geoow/' : 'geoow://';

const DashboardNavigation = StackNavigator({
    DashboardMain: { screen: connect(Dashboard) },
    Profile: { screen: connect(Profile) },
},
{
    initialRouteName: 'DashboardMain'
});
const TabNavigation = TabNavigator({
    Discover: { screen: connect(Discover) },
    Dashboard: { screen: DashboardNavigation },
    // People: { screen: connect(People) }, // V2!
    Scan: { screen: connect(Scan) },
}, {
    tabBarPosition: 'bottom',
    initialRouteName: 'Discover',
    navigationOptions: {
        gesturesEnabled: false
    },
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: {
        activeTintColor: getCurrentTheme().colors.active,
        inactiveTintColor: getCurrentTheme().colors.inactive,
        activeBackgroundColor: getCurrentTheme().colors.sheet,
        inactiveBackgroundColor: getCurrentTheme().colors.sheet,
        showIcon: true,
        showLabel: false,
        style: {
            backgroundColor: getCurrentTheme().colors.sheet,
        },
        tabStyle: {
            backgroundColor: getCurrentTheme().colors.sheet,
            opacity: 1,
        },
        indicatorStyle: {
            backgroundColor: getCurrentTheme().colors.active,
        },
        pressColor: getCurrentTheme().colors.active,
    },
    lazy: false
});
const App = StackNavigator({
    Auth: { screen: connect(Auth) },
    Plan: { screen: connect(Plan) },
    Preferences: { screen: connect(Preferences) },
    Tabs: { screen: TabNavigation },
    EventDetail: { screen: connect(EventDetail) },
    Chat: {
        screen: connect(AuthVerify),
        path: 'auth/:verificationToken',
    }
}, {
    mode: 'modal',
    onTransitionStart: params => {
        Router.triggerTransitionListeners(params);
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
