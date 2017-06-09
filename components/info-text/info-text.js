import React from 'react';
import { Text } from 'react-native';
import { getStyle } from 'react-native-styler';

import './info-text.style';

function InfoText(props) {
    return (
        <Text
            style={getStyle('infoText')}
        >
            {props.children}
        </Text>
    )

}

export default InfoText;
