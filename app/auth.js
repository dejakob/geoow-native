import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import AuthBackground from '../components/auth-background/auth-background';
import Article from '../components/article/article';
import Footer from '../components/footer/footer';
import PrimaryButton from '../components/button/primary-button';
import Logo from '../components/logo/logo';
import * as PushNotifications from '../services/push-notifications';

/**
 * <Auth />
 */
class Auth extends React.PureComponent
{
    static navigationOptions = {
        header: null
    };

    constructor() {
        super();

        this.state = {
            triedAutoLogin: false
        };

        this._signUp = this._signUp.bind(this);
        this._renderFooter = this._renderFooter.bind(this);
    }

    componentWillMount() {
        AsyncStorage
            .getItem('token')
            .then(token => {
                if (token) {
                    this.props.loadMe();
                }

                this.setState({ triedAutoLogin: true });
            })
            .catch(() => {
                this.setState({ triedAutoLogin: true });
            });

        PushNotifications.init();
    }

    componentWillReceiveProps(nextProps) {
        if (
            !this.props.user.getIn(['me', 'email']) &&
            nextProps.user.getIn(['me', 'email']) &&
            this.props.event.get('events').count() === 0
        ) {
            if (nextProps.user.getIn(['me', 'categories']).count() === 0) {
                this.props.navigation.navigate('Preferences');
            }
            else {
                this.props.navigation.navigate('Dashboard');
            }
        }
    }

    _signUp() {
        this.props.navigation.navigate('AuthEmail');
    }

    render() {
        return (
            <AuthBackground>
                <Article>
                    <Logo />
                </Article>
                {this._renderFooter()}
            </AuthBackground>
        );
    }

    _renderFooter() {
        if (
            !this.state.triedAutoLogin ||
            this.props.user.get('isLoadingProfile')
        ) {
            return null;
        }

        return (
            <Footer>
                <PrimaryButton
                    onPress={this._signUp}
                >
                    SIGN UP
                </PrimaryButton>
            </Footer>
        )
    }
}

export default Auth;
