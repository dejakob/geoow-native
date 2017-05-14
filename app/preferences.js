import React, { Component } from 'react';
import { getStyle } from 'react-native-styler';
import AuthBackground from '../components/auth-background/auth-background';
import Article from '../components/article/article';
import Footer from '../components/footer/footer';
import PrimaryButton from '../components/button/primary-button';
import TextInput from '../components/text-input/text-input';

/**
 * <Preferences />
 */
class Preferences extends Component
{
    static navigationOptions = {
        headerTitle: <TextInput />,
    };

    componentWillMount() {
        this.props.loadCategories();
    }

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
