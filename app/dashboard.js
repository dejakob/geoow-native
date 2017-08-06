import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { getStyle } from 'react-native-styler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PublicBackground from '../components/public-background/public-background';
import DashboardList from '../components/dashboard-list/dashboard-list';
import DashboardPrimaryAction from '../components/dashboard-primary-action/dashboard-primary-action';
import '../components/header/header.style.js';
import '../components/tab-bar/tab-bar.style.js';

/**
 * <Dashboard />
 */
class Dashboard extends Component
{
    static navigationOptions = (props) => ({
        header: null,
        gesturesEnabled: false,

        tabBarIcon: ({ tintColor }) => <Icon name="wunderlist" style={[getStyle('tabBar__icon'), { color: tintColor }]} />
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
                >
                    Discover
                </DashboardPrimaryAction>
            </PublicBackground>
        );
    }
}

export default Dashboard;
