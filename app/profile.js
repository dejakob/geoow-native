import React, { Component } from 'react';
import { getStyle } from 'react-native-styler';
import MainBackground from '../components/main-background/main-background';
import ProfileComponent from '../components/profile/profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import '../components/header/header.style.js';
import '../components/tab-bar/tab-bar.style.js';

/**
 * <Profile />
 */
class Profile extends Component
{
    static navigationOptions = (props) => ({
        header: null,

        tabBarIcon: ({ tintColor }) => <Icon name="wunderlist" style={[getStyle('tabBar__icon'), { color: tintColor }]} />
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
