import React from 'react';
import { View, StyleSheet } from 'react-native';
import { getStyle } from 'react-native-styler';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

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

    return (
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
}

export default ProfileRow;
