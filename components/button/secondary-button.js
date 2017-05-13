import React from 'react';
import Button from './button';
import { getStyle } from 'react-native-styler';

/**
 * <SecondaryButton />
 * @constructor
 */
function SecondaryButton(props) {
    return (
        <Button
            onPress={props.onPress}
            containerStyle={getStyle('button__secondary__container')}
            textStyle={getStyle('button__secondary__text')}
            touchStyle={getStyle('button__secondary__touch')}
        >
            {props.children}
        </Button>
    );
}

export default SecondaryButton;
