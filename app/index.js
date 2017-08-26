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
import Plan from './plan';
import Preferences from './preferences';
import Dashboard from './dashboard';
import Discover from './discover';
import EventDetail from './event-detail';
import Scan from './scan';
import People from './people';
import Profile from './profile';
import * as Router from '../services/router';
import '../themes';
import '../constants/'

// on Android, the URI prefix typically contains a host in addition to scheme
const prefix = 'geoow://';

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
    ...Platform.select({
        ios: { People: { screen: connect(People) } },
        android: {}
    }),
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
    lazy: true
});
const App = StackNavigator({
    Auth: { screen: connect(Auth) },
    AuthEmail: { screen: connect(AuthEmail) },
    AuthVerify: {
        screen: connect(AuthVerify),
        path: 'auth/:verificationToken',
    },
    Plan: { screen: connect(Plan) },
    Preferences: { screen: connect(Preferences) },
    Tabs: { screen: TabNavigation },
    EventDetail: { screen: connect(EventDetail) }
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
