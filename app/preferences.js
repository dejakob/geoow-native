import React, { Component } from 'react';
import AuthBackground from '../components/auth-background/auth-background';
import Article from '../components/article/article';
import Footer from '../components/footer/footer';
import PrimaryButton from '../components/button/primary-button';

/**
 * <Preferences />
 */
class Preferences extends Component
{
    render() {
        return (
            <AuthBackground>
                <Article>

                </Article>
                <Footer>
                    <PrimaryButton>
                        SELECT AT LEAST 2 TO CONTINUE
                    </PrimaryButton>
                </Footer>
            </AuthBackground>
        );
    }
}

export default Preferences;
