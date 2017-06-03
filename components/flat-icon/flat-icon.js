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
            {getIconContent()}
        </Text>
    );

    function getIconContent() {
        switch (props.name) {
            case 'qr-code':
                return '\uf100';
            case 'coins':
                return '\uf101';
            case 'user':
                return '\uf102';
            case 'list':
                return '\uf103';
            case 'notebook':
                return '\uf104';
        }

        return '';
    }
}

export default FlatIcon;
