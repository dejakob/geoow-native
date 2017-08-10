import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { getStyle } from 'react-native-styler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MainBackground from '../components/main-background/main-background';
import DashboardList from '../components/dashboard-list/dashboard-list';
import ProfileSousHeader from '../components/profile/profile-sous-header';
import * as BackgroundLocation from '../services/background-location';
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
        BackgroundLocation.start();
    }

    render() {
        return (
            <MainBackground>
                <ProfileSousHeader
                    avatar={this.props.user.getIn(['me', 'avatar'])}
                    chooseAvatar={() => this.props.navigation.navigate('Profile')}
                />
                <DashboardList
                    user={this.props.user}
                    stats={this.props.user.getIn(['me', 'stats'])}
                    navigation={this.props.navigation}
                />
            </MainBackground>
        );
    }
}

export default Dashboard;
