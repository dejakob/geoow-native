import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AuthTitle from '../components/auth/auth-title';
import AuthBackground from '../components/auth-background/auth-background';
import AuthInput from '../components/auth/auth-input';
import Footer from '../components/footer/footer';
import PrimaryButton from '../components/button/primary-button';

class AuthVerify extends Component
{
    static navigationOptions = {
        header: null
    };

    constructor() {
        super();
        this.handleLink = this.handleLink.bind(this);
    }

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

    handleLink(link) {
        const verificationToken = link.trim().replace('geoow://auth/', '');
        this.props.authVerify(verificationToken);
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
                    <AuthInput
                        placeholder='Enter geoow link'
                        onChangeText={this.handleLink}
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