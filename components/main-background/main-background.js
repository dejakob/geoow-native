import React from 'react';
import { View } from 'react-native';
import { getStyle } from 'react-native-styler';
import './main-background.style';

/**
 * <MainBackground />
 * @returns {XML}
 * @constructor
 */
function MainBackground(props) {
    return (
        <View
            style={getStyle('mainBackground')}
        >
            {props.children}
        </View>
    )
}

export default MainBackground;
