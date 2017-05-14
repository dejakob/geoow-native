import React from 'react';
import { View } from 'react-native';
import { getStyle } from 'react-native-styler';
import './card.style';

/**
 * <Card />
 * @param {Object} props
 * @returns {XML}
 * @constructor
 */
function Card(props) {
    return (
        <View
            style={getStyle('card')}
        >
            {props.children}
        </View>
    )
}

export default Card;
