import React from 'react';
import { View, StyleSheet } from 'react-native';
import { getStyle } from 'react-native-styler';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Touchable from '../button/touchable';

/**
 * <ProfileRow />
 * @param props
 * @returns {XML}
 * @constructor
 */
function ProfileRow(props) {
    let Icon = MaterialIcon;

    switch (props.iconFamily) {
        case 'MaterialCommunityIcons':
            Icon = MaterialCommunityIcon;
            break;
        case 'FontAwesomeIcons':
            Icon = FontAwesomeIcon;
            break;
    }

    const content = (
        <View
            style={[getStyle('profile__list__item'), props.style]}
        >
            <View
                style={getStyle('profile__list__item__icon__wrapper')}
            >
                <Icon
                    name={props.icon}
                    size={StyleSheet.flatten(getStyle('profile__list__item__icon')).fontSize}
                    color={StyleSheet.flatten(getStyle('profile__list__item__icon')).color}
                />
            </View>
            <View
                style={getStyle('profile__list__item__content')}
            >
                {props.children}
            </View>
        </View>
    );

    if (typeof props.onPress === 'function') {
        return (
            <Touchable
                onPress={props.onPress}
            >
                {content}
            </Touchable>
        )
    }

    return content;
}

export default ProfileRow;
