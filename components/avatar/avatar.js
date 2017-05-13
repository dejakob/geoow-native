import React from 'react';
import { Image } from 'react-native';
import { getStyle } from 'react-native-styler';
import './avatar.style';

function Avatar() {
    return (
        <Image
            style={getStyle('avatar')}
        />
    )
}

export default Avatar;
