import React, { Component } from 'react';
import { View } from 'react-native';
import PublicBackground from '../components/public-background/public-background';

/**
 * <Auth />
 */
class Auth extends Component
{
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <PublicBackground>
                <View>

                </View>
            </PublicBackground>
        );
    }
}

export default Auth;
