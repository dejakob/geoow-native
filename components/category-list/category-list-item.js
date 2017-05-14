import React from 'react';
import { Text } from 'react-native';
import Card from '../card/card';
import Touchable from '../button/touchable';

/**
 * <CategoryListItem />
 * @constructor
 */
function CategoryListItem(props) {
    return (
        <Touchable
            onPress={props.onPress}
        >
            <Card>
                <Text>{props.category.toUpperCase()}</Text>
            </Card>
        </Touchable>
    );
}

export default CategoryListItem;
