import React from 'react';
import { getStyle } from 'react-native-styler';
import Button from './button';

/**
 * <DangerButton />
 * @constructor
 */
function DangerButton(props) {
    return (
        <Button
            onPress={props.onPress}
            disabled={props.disabled}
            containerStyle={getStyle('button__danger__container')}
            textStyle={getStyle('button__danger__text')}
            touchStyle={getStyle('button__danger__touch')}
        >
            {props.children}
        </Button>
    );
}

export default DangerButton;
