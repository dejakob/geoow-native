import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { getStyle } from 'react-native-styler';
import AuthTitle from '../auth/auth-title';
import AuthBackground from '../auth-background/auth-background';
import AuthInput from '../auth/auth-input';
import Footer from '../footer/footer';
import PrimaryButton from '../button/primary-button';
import './auth-verify.style';

/**
 * <AuthVerify />
 * @param props
 * @returns {XML}
 * @constructor
 */
function AuthVerify(props) {
    return (
        <AuthBackground>
            <View
                style={getStyle('authVerify')}
            >
                <AuthTitle>Open your inbox and find the link</AuthTitle>
                <ActivityIndicator
                    size="large"
                    color="white"
                />
                <AuthInput
                    placeholder='Enter verification code'
                    onChangeText={handleLink}
                    underlineColorAndroid="transparent"
                    style={getStyle('authVerify__input')}
                />
            </View>
            <Footer>
                <PrimaryButton
                    onPress={() => props.navigation.navigate('AuthEmail')}
                >
                    TRY AGAIN
                </PrimaryButton>
            </Footer>
        </AuthBackground>
    );

    function handleLink(link) {
        const verificationToken = link.trim().replace('geoow://auth/', '');
        props.authVerify(verificationToken);
    }
}

export default AuthVerify