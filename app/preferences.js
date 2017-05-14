import React, { Component } from 'react';
import AuthBackground from '../components/auth-background/auth-background';
import Article from '../components/article/article';
import Footer from '../components/footer/footer';
import PrimaryButton from '../components/button/primary-button';
import TextInput from '../components/text-input/text-input';
import CategoryList from '../components/category-list/category-list';

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
                    <CategoryList
                        categories={this.props.event.get('categories')}
                        onItemSelect={this.props.selectCategory}
                    />
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
