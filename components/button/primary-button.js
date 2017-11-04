import React from 'react';
import { getStyle } from 'react-native-styler';
import Button from './button';

/**
 * <PrimaryButton />
 * @constructor
 */
function PrimaryButton(props) {
    return (
        <Button
            onPress={props.onPress}
            disabled={props.disabled}
            containerStyle={[getStyle('button__primary__container'), props.containerStyle]}
            textStyle={[getStyle('button__primary__text'), props.textStyle]}
            touchStyle={[getStyle('button__primary__touch'), props.touchStyle]}
        >
            {props.children}
        </Button>
    );
}

export default PrimaryButton;
