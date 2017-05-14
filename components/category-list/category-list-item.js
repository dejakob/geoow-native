import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { getStyle } from 'react-native-styler';
import Card from '../card/card';
import Touchable from '../button/touchable';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import * as CategoryImageHelper from '../../helpers/category-image-helper';

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
                <Image
                    style={getStyle('categoryListItem__backgroundImage')}
                    resizeMode='cover'
                    source={CategoryImageHelper.getImageForCategory(props.category)}
                />
                <View
                    style={getStyle('categoryListItem__overlay')}
                >
                    <Text
                        style={getStyle('categoryListItem__text')}
                    >
                        {props.category.toUpperCase()}
                    </Text>
                    {renderCheck()}
                </View>
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
