import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { getStyle } from 'react-native-styler';
import store from '../services/store';
import HeaderTitle from '../components/header/header-title';
import HeaderCredits from '../components/header/header-credits';
import PublicBackground from '../components/public-background/public-background';
import InfoText from '../components/info-text/info-text';

import '../components/header/header.style.js';
import '../components/tab-bar/tab-bar.style.js';

/**
 * <Profile />
 */
class Profile extends Component
{
    static navigationOptions = (props) => ({
        headerStyle: getStyle('header'),
        headerLeft: <HeaderTitle>Info</HeaderTitle>,
        headerRight: (
            <HeaderCredits
                score={store.getState().user.getIn(['me', 'score'])}
                onPress={() => props.navigation.navigate('Scan')}
            />
        ),
        gesturesEnabled: false,
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
