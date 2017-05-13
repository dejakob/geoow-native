import React from 'react';
import { View } from 'react-native';
import { getStyle } from 'react-native-styler';
import TimeTableHeadCell from './time-table-head-cell';

/**
 * <TimeTableHeader />
 * @constructor
 */
function TimeTableHeader(props) {
    return (
        <View
            style={getStyle('timeTable__header')}
        >
            {props.days.map(renderHeaderCell)}
        </View>
    );

    function renderHeaderCell(day, index) {
        return (
            <TimeTableHeadCell
                key={index}
                day={day}
            />
        )
    }
}

export default TimeTableHeader;
