import moment from 'moment';
import React, { Component } from 'react';
import { View } from 'react-native';
import { getStyle } from 'react-native-styler';
import TimeTableColumn from './time-table-column';
import './time-table.style';

/**
 * <TimeTable />
 */
class TimeTable extends Component
{
    constructor() {
        super();

        this._renderDay = this._renderDay.bind(this);
    }

    get days() {
        return new Array(7)
            .fill(null)
            .map((nothing, index) => moment().add(index, 'day'));
    }

    render() {
        return (
            <View
                style={getStyle('timeTable__container')}
            >
                {this.days.map(this._renderDay)}
            </View>
        );
    }

    _renderDay(day, index) {
        return (
            <TimeTableColumn
                key={index}
                day={day}
                even={index % 2 === 1}
            />
        )
    }
}

export default TimeTable;
