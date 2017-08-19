import React from 'react';
import { View, Text } from 'react-native';
import { getStyle } from 'react-native-styler';
import './auth-title.style';

/**
 * <AuthTitle />
 * @constructor
 */
function AuthTitle(props) {
    return (
        <Text
            style={getStyle('auth__title')}
        >
            {props.children}
        </Text>
    );
}

export default AuthTitle;
