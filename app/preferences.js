import React, { Component } from 'react';
import Immutable from 'immutable';
import AuthBackground from '../components/auth-background/auth-background';
import Article from '../components/article/article';
import Footer from '../components/footer/footer';
import PrimaryButton from '../components/button/primary-button';
import CategoryList from '../components/category-list/category-list';

/**
 * <Preferences />
 */
class Preferences extends Component
{
    static navigationOptions = {
        header: null
    };

    constructor() {
        super();

        this._selectCategory = this._selectCategory.bind(this);
        this._deselectCategory = this._deselectCategory.bind(this);
        this._continue = this._continue.bind(this);

        // Immutable for consistency reasons
        this.state = {
            selectedCategories: Immutable.fromJS([])
        };
    }

    componentWillMount() {
        this.props.loadCategories();
    }

    render() {
        return (
            <AuthBackground>
                <Article>
                    <CategoryList
                        categories={this.props.event.get('categories')}
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
                        Select at least 2 to continue
                    </PrimaryButton>
                </Footer>
            </AuthBackground>
        );
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
    }
}

export default Preferences;
