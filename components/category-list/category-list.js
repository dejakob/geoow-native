import React, { Component } from 'react';
import { FlatList } from 'react-native';
import CategoryListItem from './category-list-item';
import { getStyle } from 'react-native-styler';
import './category-list.style';

/**
 * <CategoryList />
 */
class CategoryList extends Component
{
    constructor() {
        super();

        this._renderItem = this._renderItem.bind(this);
    }

    render() {
        return (
            <FlatList
                data={this.props.categories.toArray()}
                renderItem={this._renderItem}
                style={getStyle('categoryList')}
            />
        )
    }

    _renderItem({ item, index }) {
        return (
            <CategoryListItem
                key={index}
                category={item}
            />
        )
    }
}

export default CategoryList;
