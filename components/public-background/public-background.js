import React from 'react';
import { View, Image } from 'react-native';
import { getStyle } from 'react-native-styler';
import './public-background.style';

/**
 * <PublicBakground />
 * @constructor
 */
function PublicBackground(props) {
    return (
        <View
            style={getStyle('publicBackground__container')}
        >
            <Image
                resizeMode="cover"
                source={require('../../assets/beach-pexels.jpeg')}
                style={getStyle('publicBackground__image')}
            >

            </Image>
            <View
                style={getStyle('publicBackground__content')}
            >
                {props.children}
            </View>
        </View>
    )
}

export default PublicBackground;
