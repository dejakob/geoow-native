import React from 'react';
import { Text } from 'react-native';
import { getStyle } from 'react-native-styler';
import './flat-icon.style';

/**
 * <FlatIcon />
 * @constructor
 */
function FlatIcon(props) {
    return (
        <Text
            style={[getStyle('flatIcon'), props.style]}
        >
            {String.fromCharCode(parseInt(getIconContent(), 16))}
        </Text>
    );

    function getIconContent() {
        switch (props.name) {
            case 'qr-code':
                return 'f100';
            case 'coins':
                return 'f101';
            case 'user':
                return 'f102';
            case 'list':
                return 'f103';
            case 'notebook':
                return 'f104';
        }

        return '';
    }
}

export default FlatIcon;
