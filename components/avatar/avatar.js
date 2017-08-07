import React from 'react';
import { Image, View } from 'react-native';
import { getStyle } from 'react-native-styler';
import './avatar.style';

function Avatar(props) {
    return (
        <View
            style={[getStyle('avatar__wrapper'), props.style]}
        >
            <Image
                style={[getStyle('avatar'), props.style]}
                source={props.image ? { uri: props.image} : require('../../assets/female.png')}
            />
        </View>
    )
}

export default Avatar;
