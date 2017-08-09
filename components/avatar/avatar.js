import React from 'react';
import { Image, View } from 'react-native';
import { getStyle } from 'react-native-styler';
import './avatar.style';

function Avatar(props) {
    console.log('avatar', props.image);

    return (
        <View
            style={[getStyle('avatar__wrapper'), props.style]}
        >
            <Image
                style={[getStyle('avatar'), props.style]}
                source={props.image ? { uri: props.image} : require('../../assets/female.png')}
                resizeMode='cover'
            />
        </View>
    )
}

export default Avatar;
