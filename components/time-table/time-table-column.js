import React from 'react';
import { View } from 'react-native';
import { getStyle } from 'react-native-styler';
import TimeTableCell from './time-table-cell';

/**
 * <TimeTableColumn />
 * @constructor
 */
function TimeTableColumn(props) {
    const slots = new Array(24)
        .fill(null)
        .map(index => props.day.startOf('day').add(index * 30, 'minute'));

    return (
        <View
            style={getStyle(props.even ? 'timeTable__column__even' : 'timeTable__column__odd')}
        >
            {slots.map(renderCell)}
        </View>
    );

    function renderCell(slot, index) {
        return (
            <TimeTableCell
                key={index}
            >
                {slot.format('HH:mm')}
            </TimeTableCell>
        );
    }
}

export default TimeTableColumn;
