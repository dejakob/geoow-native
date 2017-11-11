import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { getStyle } from 'react-native-styler';
import validator from 'validator';
import AuthBackground from '../components/auth-background/auth-background';
import Article from '../components/article/article';
import AuthTitle from '../components/auth/auth-title';
import AuthInput from '../components/auth/auth-input';
import Footer from '../components/footer/footer';
import PrimaryButton from '../components/button/primary-button';

/**
 * <AuthEmail />
 */
class AuthEmail extends React.PureComponent
{
    static navigationOptions = {
        header: null
    };

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        this.state = { isEmailValid: true };
    }

    handleSubmit() {
        const isEmailValid = typeof this.email === 'string' && this.email.length && validator.isEmail(this.email);

        this.setState({
            isEmailValid
        });

        if (isEmailValid) {
            this.props.authEmail(this.email);
            this.props.navigation.navigate('AuthVerify', {});
        }
    }

    render() {
        return (
            <AuthBackground>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <AuthTitle>Welcome!</AuthTitle>
                    <AuthInput
                        placeholder='Please enter your email'
                        onChangeText={email => this.email = email}
                        invalid={!this.state.isEmailValid}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                </View>
                <Footer>
                    <PrimaryButton
                        onPress={this.handleSubmit}
                    >
                        SIGN UP
                    </PrimaryButton>
                </Footer>
            </AuthBackground>
        );
    }
}

export default AuthEmail;
