import React from 'react';
import { Image, View } from 'react-native';
import { getStyle } from 'react-native-styler';
import { loadImageOrPlaceholder } from '../../helpers/image-helper';
import './avatar.style';

/**
 * <Avatar />
 * @param props
 * @returns {XML}
 * @constructor
 */
function Avatar(props) {
    return (
        <View
            style={[getStyle('avatar__wrapper'), props.style]}
        >
            <Image
                style={[getStyle('avatar'), props.style]}
                source={loadImageOrPlaceholder(props.image, require('../../assets/female.png'))}
                resizeMode='cover'
            />
        </View>
    )
}

export default Avatar;
