import React, { Component } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { getStyle } from 'react-native-styler';
import Icon from 'react-native-vector-icons/MaterialIcons'
import HeaderTitle from '../components/header/header-title';
import MainBackground from '../components/main-background/main-background'
import Touchable from '../components/button/touchable';
import ProfileComponent from '../components/profile/profile';

import '../components/header/header.style.js';
import '../components/tab-bar/tab-bar.style.js';

/**
 * <Profile />
 */
class Profile extends Component
{
    static navigationOptions = (props) => ({
        headerStyle: getStyle('header'),
        headerLeft: null,
        headerTitle: <HeaderTitle>Profile</HeaderTitle>,
        headerRight: (
            <Touchable
                onPress={() => props.navigation.goBack()}
            >
                <Icon
                    name="close"
                    color={StyleSheet.flatten(getStyle('header__icon')).color}
                    size={StyleSheet.flatten(getStyle('header__icon')).fontSize}
                />
            </Touchable>
        ),
    });

    render() {
        return (
            <MainBackground>
                <ProfileComponent
                    {...this.props}
                />
            </MainBackground>
        );
    }
}

export default Profile;
