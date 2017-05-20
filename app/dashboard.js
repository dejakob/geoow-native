import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import PublicBackground from '../components/public-background/public-background';
import DashboardList from '../components/dashboard-list/dashboard-list';
import DashboardMe from '../components/dashboard-me/dashboard-me';
import { getStyle } from 'react-native-styler';
import '../components/header/header.style.js'

/**
 * <Dashboard />
 */
class Dashboard extends Component
{
    static navigationOptions = {
        header: null
    };

    componentWillMount() {
        this.props.loadStats();
        this.props.loadMe();
    }

    render() {
        return (
            <PublicBackground>
                <DashboardMe
                    me={this.props.user}
                />
                <DashboardList
                    stats={this.props.user.getIn(['me', 'stats'])}
                />
            </PublicBackground>
        );
    }
}

export default Dashboard;
