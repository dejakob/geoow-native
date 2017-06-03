import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { getStyle } from 'react-native-styler';
import store from '../services/store';
import HeaderTitle from '../components/header/header-title';
import HeaderCredits from '../components/header/header-credits';
import PublicBackground from '../components/public-background/public-background';
import FlatIcon from '../components/flat-icon/flat-icon';
import '../components/header/header.style.js';
import '../components/tab-bar/tab-bar.style.js';

/**
 * <Profile />
 */
class Profile extends Component
{
    static navigationOptions = (props) => ({
        headerStyle: getStyle('header'),
        headerLeft: <HeaderTitle>Profile</HeaderTitle>,
        headerRight: (
            <HeaderCredits
                score={store.getState().user.getIn(['me', 'score'])}
                onPress={() => props.navigation.navigate('Scan')}
            />
        ),
        gesturesEnabled: false,

        tabBarIcon: ({ tintColor }) => <FlatIcon name="user" style={[getStyle('tabBar__icon'), { color: tintColor }]} />
    });

    componentWillMount() {
    }

    render() {
        return (
            <PublicBackground>
            </PublicBackground>
        );
    }
}

export default Profile;
