import React from 'react';
import { View } from 'react-native';
import { getStyle } from 'react-native-styler';
import './list-separator.style';

/**
 * <ListSeparator />
 * @returns {XML}
 * @constructor
 */
function ListSeparator() {
    return (
        <View
            style={getStyle('listSeparator')}
        />
    )
}

export default ListSeparator;
