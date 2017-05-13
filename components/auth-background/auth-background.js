import React from 'react';
import { View } from 'react-native';
import { getStyle } from 'react-native-styler';
import './auth-background.style';

/**
 * <AuthBackground />
 * @constructor
 */
function AuthBackground(props) {
    return (
        <View
            style={getStyle('authBackground')}
        >
            {props.children}
        </View>
    );
}

export default AuthBackground;
