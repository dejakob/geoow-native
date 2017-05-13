import React from 'react';
import { TextInput as RNTextInput, View } from 'react-native';
import { getStyle } from 'react-native-styler';
import './text-input.style';

/**
 * <TextInput />
 * @returns {XML}
 * @constructor
 */
function TextInput(props) {
    return (
        <RNTextInput
            {...props}
            style={getStyle('textInput__content')}
        />
    );
}

export default TextInput;
