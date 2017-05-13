import React from 'react';
import { View, Text } from 'react-native';
import { getStyle } from 'react-native-styler';

/**
 * <TimeTableHeadCell />
 * @param props
 * @returns {XML}
 * @constructor
 */
function TimeTableHeadCell(props) {
    return (
        <View
            style={getStyle('timeTable__headCell')}
        >
            <Text>
                {props.day.format('ddd')}
            </Text>
        </View>
    )
}

export default TimeTableHeadCell;
