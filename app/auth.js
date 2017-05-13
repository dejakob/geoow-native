import React, { Component } from 'react';
import { View } from 'react-native';
import PublicBackground from '../components/public-background/public-background';
import Article from '../components/article/article';
import Footer from '../components/footer/footer';
import PrimaryButton from '../components/button/primary-button';
import Logo from '../components/logo/logo';

/**
 * <Auth />
 */
class Auth extends Component
{
    static navigationOptions = {
        header: null
    };

    constructor() {
        super();

        this._signUp = this._signUp.bind(this);
    }

    render() {
        return (
            <PublicBackground>
                <Article>
                    <Logo />
                </Article>
                <Footer>
                    <PrimaryButton
                        onPress={this._signUp}
                    >
                        SIGN UP
                    </PrimaryButton>
                </Footer>
            </PublicBackground>
        );
    }

    _signUp() {
        this.props.navigation.navigate('Register');
    }
}

export default Auth;
