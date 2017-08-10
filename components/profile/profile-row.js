import React from 'react';
import { View, StyleSheet } from 'react-native';
import { getStyle } from 'react-native-styler';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

/**
 * <ProfileRow />
 * @param props
 * @returns {XML}
 * @constructor
 */
function ProfileRow(props) {
    return (
        <View
            style={getStyle('profile__list__item')}
        >
            <View
                style={getStyle('profile__list__item__icon__wrapper')}
            >
                <MaterialIcon
                    name={props.icon}
                    size={StyleSheet.flatten(getStyle('profile__list__item__icon')).fontSize}
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
