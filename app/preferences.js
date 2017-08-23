import React, { Component } from 'react';
import Immutable from 'immutable';
import AuthBackground from '../components/auth-background/auth-background';
import Article from '../components/article/article';
import Footer from '../components/footer/footer';
import PrimaryButton from '../components/button/primary-button';
import CategoryList from '../components/category-list/category-list';
import { MIN_CATEGORIES } from '../constants';

/**
 * <Preferences />
 */
class Preferences extends React.PureComponent
{
    static navigationOptions = {
        header: null,
        navigationOptions: {
            gesturesEnabled: false
        }
    };

    constructor() {
        super();

        this._selectCategory = this._selectCategory.bind(this);
        this._deselectCategory = this._deselectCategory.bind(this);
        this._continue = this._continue.bind(this);
        this._renderButtonCopy = this._renderButtonCopy.bind(this);

        // Immutable for consistency reasons
        this.state = {
            selectedCategories: Immutable.fromJS([])
        };
    }

    componentWillMount() {
        this.props.loadCategories();
    }

    _selectCategory(category : string) {
        const selectedCategories = this.state.selectedCategories.push(category);

        this.setState({ selectedCategories });
    }

    _deselectCategory(category : string) {
        const selectedCategories = this.state.selectedCategories
            .filter(selectedCategory => selectedCategory !== category);

        this.setState({ selectedCategories });
    }

    _continue() {
        this.props.updateCategories(this.state.selectedCategories.toJS());
        this.props.navigation.navigate('Dashboard');
    }

    render() {
        const categories = this.props.event.get('categories')
            .filter(a => a !== null)
            .map(categoryName => categoryName.toLowerCase());
        const categoriesArray = categories.toArray();
        const distinctCategories = categories.filter((catName, index) => categoriesArray.indexOf(catName) === index);

        return (
            <AuthBackground>
                <Article>
                    <CategoryList
                        categories={distinctCategories}
                        onItemSelect={this._selectCategory}
                        onItemDeselect={this._deselectCategory}
                        selectedCategories={this.state.selectedCategories.toArray()}
                    />
                </Article>
                <Footer>
                    <PrimaryButton
                        disabled={this.state.selectedCategories.count() < 2}
                        onPress={this._continue}
                    >
                        {this._renderButtonCopy()}
                    </PrimaryButton>
                </Footer>
            </AuthBackground>
        );
    }

    _renderButtonCopy() {
        if (this.state.selectedCategories.count() === 0) {
            return `Choose at least ${MIN_CATEGORIES}`;
        }

        else if (this.state.selectedCategories.count() < MIN_CATEGORIES) {
            return `Choose ${MIN_CATEGORIES - this.state.selectedCategories.count()} more`;
        }

        return `Continue`;
    }
}

export default Preferences;
