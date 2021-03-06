import React, { Component } from 'react';
import { FlatList } from 'react-native';
import CategoryListItem from './category-list-item';
import { getStyle } from 'react-native-styler';
import './category-list.style';

/**
 * <CategoryList />
 */
class CategoryList extends React.PureComponent
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
        const selected = this.props.selectedCategories.includes(item);

        const onPress = () => {
            if (selected) {
                this.props.onItemDeselect(item);
            }
            else {
                this.props.onItemSelect(item);
            }
        };

        return (
            <CategoryListItem
                key={index}
                category={item}
                onPress={onPress}
                selected={selected}
            />
        )
    }
}

export default CategoryList;
