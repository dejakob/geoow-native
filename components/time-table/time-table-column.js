import React from 'react';
import { View } from 'react-native';
import { getStyle } from 'react-native-styler';
import TimeTableHeadCell from './time-table-head-cell';

/**
 * <TimeTableColumn />
 * @constructor
 */
function TimeTableColumn(props) {
    return (
        <View
            style={getStyle(props.even ? 'timeTable__column__even' : 'timeTable__column__odd')}
        >
            <TimeTableHeadCell
                day={props.day}
            />
        </View>
    );
}

export default TimeTableColumn;
