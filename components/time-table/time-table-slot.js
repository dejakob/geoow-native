import moment from 'moment';
import React from 'react';
import { View, Dimensions } from 'react-native';
import { getStyle } from 'react-native-styler';

const { width } = Dimensions.get('window');

/**
 * <TimeTableSlot />
 * @returns {XML}
 * @constructor
 */
function TimeTableSlot(props) {
    const { slot } = props;
    const dayIndex = Math.round((slot.from.clone().startOf('day').toDate().getTime() - moment().startOf('day')) / 86400000);
    const startInHours = Number(slot.from.format('H')) + Number(slot.from.format('m')) / 60;
    const endInHours = Number(slot.till.format('H')) + Number(slot.till.format('m')) / 60;
    const top = Math.round(startInHours * 40);
    const height = (endInHours - startInHours) * 40;
    const left = Math.round(dayIndex * width / 7);

    const position = {
        top,
        height,
        left
    };

    return (
        <View
            style={[getStyle('timeTable__slot'), position]}
        >

        </View>
    )
}

export default TimeTableSlot;
