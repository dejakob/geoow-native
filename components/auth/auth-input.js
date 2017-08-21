import React from 'react';
import { TextInput } from 'react-native';
import { getStyle } from 'react-native-styler';
import './auth-input.style';

/**
 * <AuthInput />
 * @param props
 * @returns {XML}
 * @constructor
 */
function AuthInput(props) {
    return (
        <TextInput
            {...props}
            style={[props.invalid ? getStyle('auth__input__invalid') : getStyle('auth__input'), props.style]}
        />
    )
}

export default AuthInput;
