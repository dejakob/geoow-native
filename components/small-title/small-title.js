import React from 'react';
import { View, Text } from 'react-native';
import { getStyle } from 'react-native-styler';
import './small-title.style';

/**
 * <SmallTitle />
 * @param {Object} props
 * @constructor
 */
function SmallTitle(props) {
    return (
        <View
            style={getStyle('smallTitle')}
        >
            <Text
                style={getStyle('smallTitle__text')}
            >
                {props.children}
            </Text>
        </View>
    );
}

export default SmallTitle;
