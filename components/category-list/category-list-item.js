import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getStyle } from 'react-native-styler';
import Card from '../card/card';
import Touchable from '../button/touchable';
import EntypoIcon from 'react-native-vector-icons/Entypo';

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
                {renderCheck()}
            </Card>
        </Touchable>
    );

    function renderCheck() {
        if (!props.selected) {
            return null;
        }

        const checkStyle = StyleSheet.flatten(getStyle('categoryListItem__checkIcon'));

        return (
            <View
                style={getStyle('categoryListItem__checkIconStyle')}
            >
                <EntypoIcon
                    name="check"
                    size={checkStyle.height}
                    color={checkStyle.color}
                />
            </View>
        )
    }
}

export default CategoryListItem;
