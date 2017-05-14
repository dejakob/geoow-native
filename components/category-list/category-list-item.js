import React from 'react';
import { Text } from 'react-native';
import Card from '../card/card';

/**
 * <CategoryListItem />
 * @constructor
 */
function CategoryListItem(props) {
    return (
        <Card>
            <Text>{props.category.toUpperCase()}</Text>
        </Card>
    );
}

export default CategoryListItem;
