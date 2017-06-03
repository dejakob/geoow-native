import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { getStyle } from 'react-native-styler';
import store from '../services/store';
import HeaderTitle from '../components/header/header-title';
import HeaderCredits from '../components/header/header-credits';
import PublicBackground from '../components/public-background/public-background';
import DashboardList from '../components/dashboard-list/dashboard-list';
import DashboardPrimaryAction from '../components/dashboard-primary-action/dashboard-primary-action';
import '../components/header/header.style.js';

/**
 * <Dashboard />
 */
class Dashboard extends Component
{
    static navigationOptions = (props) => ({
        headerStyle: getStyle('header'),
        headerLeft: <HeaderTitle>Dashboard</HeaderTitle>,
        headerRight: (
            <HeaderCredits
                score={store.getState().user.getIn(['me', 'score'])}
                onPress={() => props.navigation.navigate('Scan')}
            />
        ),
        gesturesEnabled: false
    });

    componentWillMount() {
        this.props.loadStats();
        this.props.loadMe();
    }

    render() {
        return (
            <PublicBackground>
                <DashboardList
                    me={this.props.user}
                    stats={this.props.user.getIn(['me', 'stats'])}
                    navigation={this.props.navigation}
                />
                <DashboardPrimaryAction
                    onPress={() => this.props.navigation.navigate('Discover')}
                />
            </PublicBackground>
        );
    }
}

export default Dashboard;
