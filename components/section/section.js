import React from 'react';
import { View } from 'react-native';

/**
 * <Section />
 * @constructor
 */
function Section(props) {
    return (
        <View
            style={{ width: '100%' }}
        >
            {props.children}
        </View>
    )
}

export default Section;
