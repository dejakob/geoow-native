import React, { Component } from 'react';
import AuthBackground from '../components/auth-background/auth-background';
import Article from '../components/article/article';
import Footer from '../components/footer/footer';
import PrimaryButton from '../components/button/primary-button';

/**
 * <Plan />
 */
class Plan extends Component
{
    constructor() {
        super();

        this._save = this._save.bind(this);
    }

    render() {
        return (
            <AuthBackground>
                <Article>

                </Article>
                <Footer>
                    <PrimaryButton
                        onPress={this._save}
                    >
                        SAVE
                    </PrimaryButton>
                </Footer>
            </AuthBackground>
        );
    }

    _save() {

    }
}

export default Plan;
