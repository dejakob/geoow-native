import React from 'react';
import { Image } from 'react-native';
import { getStyle } from 'react-native-styler';
import './logo.style';

/**
 * <Logo />
 * @constructor
 */
function Logo() {
    return (
        <Image
            style={getStyle('logo')}
            source={require('../../assets/logo.png')}
            resizeMode="contain"
        />
    );
}

export default Logo;
