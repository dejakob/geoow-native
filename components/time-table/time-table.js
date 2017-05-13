import moment from 'moment';
import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { getStyle } from 'react-native-styler';
import TimeTableColumn from './time-table-column';
import TimeTableSlot from './time-table-slot';
import TimeTableHeader from './time-table-header';
import './time-table.style';

/**
 * <TimeTable />
 */
class TimeTable extends Component
{
    constructor() {
        super();

        this._renderDay = this._renderDay.bind(this);
        this._renderSlot = this._renderSlot.bind(this);
    }

    get days() {
        return new Array(7)
            .fill(null)
            .map((nothing, index) => moment().add(index, 'day'));
    }

    render() {
        const { days } = this;

        return (
            <View
                style={{ flex: 1 }}
            >
                <TimeTableHeader
                    days={days}
                />
                <ScrollView
                    bounces={false}
                >
                    <View
                        style={getStyle('timeTable__container')}
                    >
                        {days.map(this._renderDay)}
                        {this.props.slots.map(this._renderSlot)}
                    </View>
                </ScrollView>
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

    _renderSlot(slot, index) {
        return (
            <TimeTableSlot
                key={index}
                slot={slot}
            />
        )
    }
}

export default TimeTable;
