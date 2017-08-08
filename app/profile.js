import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { getStyle } from 'react-native-styler';
import Icon from 'react-native-vector-icons/MaterialIcons'
import HeaderTitle from '../components/header/header-title';
import PublicBackground from '../components/public-background/public-background';
import InfoText from '../components/info-text/info-text';
import Touchable from '../components/button/touchable';

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

    componentWillMount() {
    }

    render() {
        return (
            <PublicBackground>
                <View
                    style={{ flex: 1, justifyContent: 'center' }}
                >
                    <InfoText>You are registered with {this.props.user.getIn(['me', 'email'])}</InfoText>
                    <InfoText>By using Geoow, you agree to the Terms of Service, which can be found on geoow.com/terms</InfoText>
                    <InfoText>Icons used in the app are designed by Madebyoliver, Freepik and Oleksandr Yershov from Flaticon</InfoText>
                </View>
            </PublicBackground>
        );
    }
}

export default Profile;
