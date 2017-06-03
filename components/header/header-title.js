import React from 'react';
import { View, Text } from 'react-native';
import { getStyle } from 'react-native-styler';

/**
 * <HeaderTitle />
 * @constructor
 */
function HeaderTitle(props) {
    return (
        <View>
            <Text
                style={getStyle('header__title')}
            >
                {props.children}
            </Text>
        </View>
    )
}

export default HeaderTitle;
