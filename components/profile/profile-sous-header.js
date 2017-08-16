import React from 'react';
import { View, TouchableWithoutFeedback, Image, Text } from 'react-native';
import { getStyle } from 'react-native-styler';
import Avatar from '../avatar/avatar';

/**
 * <ProfileSousHeader />
 * @param props
 * @returns {XML}
 * @constructor
 */
function ProfileSousHeader(props) {
    return (
        <View
            style={getStyle('profile__sousHeader')}
        >
            <View
                style={getStyle('profile__sousHeader__backgroundImage')}
            >
                <Image
                    source={{ uri: props.avatar }}
                    blurRadius={16}
                    resizeMode='cover'
                    style={getStyle('profile__sousHeader__backgroundImage__img')}
                />
                <View
                    style={getStyle('profile__sousHeader__overlay')}
                />
            </View>
            <TouchableWithoutFeedback
                onPress={props.chooseAvatar}
            >
                <View>
                    <Avatar
                        image={props.avatar}
                    />
                    <Text
                        style={getStyle('profile__sousHeader__score')}
                    >
                        {props.score}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

export default ProfileSousHeader;
