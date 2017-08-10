import React, { Component } from 'react';
import MainBackground from '../components/main-background/main-background';
import ProfileComponent from '../components/profile/profile';

import '../components/header/header.style.js';
import '../components/tab-bar/tab-bar.style.js';

/**
 * <Profile />
 */
class Profile extends Component
{
    static navigationOptions = (props) => ({
        header: null
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
