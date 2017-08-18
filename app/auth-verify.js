import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AuthTitle from '../components/auth/auth-title';
import AuthBackground from '../components/auth-background/auth-background';
import Footer from '../components/footer/footer';
import PrimaryButton from '../components/button/primary-button';

class AuthVerify extends Component
{
    static navigationOptions = {
        header: null
    };

    componentWillMount() {
        try {
            const { verificationToken } = this.props.navigation.state.params;
            this.props.authVerify(verificationToken);
        }
        catch (ex) {
            console.log(ex);
        }
    }

    componentWillReceiveProps(newProps) {
        try {
            const { verificationToken } = newProps.navigation.state.params;
            this.props.authVerify(verificationToken);
        }
        catch (ex) {
            console.log(ex);
        }
    }

    render() {
        return (
            <AuthBackground>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <AuthTitle>Open your inbox and find the link</AuthTitle>
                    <ActivityIndicator
                        size="large"
                        color="white"
                    />
                </View>
                <Footer>
                    <PrimaryButton
                        onPress={() => this.props.navigation.navigate('AuthEmail')}
                    >
                        TRY AGAIN
                    </PrimaryButton>
                </Footer>
            </AuthBackground>
        );
    }
}

export default AuthVerify;