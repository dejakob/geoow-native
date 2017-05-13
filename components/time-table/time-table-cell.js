import React from 'react';
import { View } from 'react-native';
import { getStyle } from 'react-native-styler';

/**
 * <TimeTableCell />
 * @constructor
 */
function TimeTableCell(props) {
    return (
        <View
            style={getStyle('timeTable__cell')}
        >

        </View>
    );
}

export default TimeTableCell;
