import React, { Component } from 'react';
import AuthBackground from '../components/auth-background/auth-background';
import Article from '../components/article/article';
import Footer from '../components/footer/footer';

class Register extends Component
{
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <AuthBackground>
                <Article>

                </Article>
                <Footer>

                </Footer>
            </AuthBackground>
        );
    }
}

export default Register;
