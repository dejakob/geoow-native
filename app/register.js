import React, { Component } from 'react';
import AuthBackground from '../components/auth-background/auth-background';
import Article from '../components/article/article';
import Footer from '../components/footer/footer';
import PrimaryButton from '../components/button/primary-button';
import Avatar from '../components/avatar/avatar';
import TextInput from '../components/text-input/text-input';

class Register extends Component
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
            <AuthBackground>
                <Article>
                    <Avatar />
                    <TextInput
                        placeholder="Email"
                    />
                    <TextInput
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                </Article>
                <Footer>
                    <PrimaryButton
                        onPress={this._signUp}
                    >
                        SIGN UP
                    </PrimaryButton>
                </Footer>
            </AuthBackground>
        );
    }

    _signUp() {

    }
}

export default Register;
