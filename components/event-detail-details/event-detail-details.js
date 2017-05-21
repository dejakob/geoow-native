import moment from 'moment';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { getStyle } from 'react-native-styler';
import './event-detail-details.style';

/**
 * <EventDetailDetails />
 */
function EventDetailDetails(props) {
    const data = [
        { type: 'start', value: moment(props.event.get('startTime')).format('ddd DD MMMM, HH[h]mm') },
        { type: 'location', value: `${props.event.getIn(['location', 'street'])}, ${props.event.getIn(['location', 'zip'])} ${props.event.getIn(['location', 'city'])}` },
        { type: 'reward', value: 100 }
    ];

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            style={getStyle('eventDetailDetails__list')}
        />
    );

    function renderItem({ item, index }) {
        return (
            <View
                style={getStyle('eventDetailDetails__listItem')}
            >
                <Text
                    style={getStyle('eventDetailDetails__listItem__type')}
                >
                    {item.type}
                </Text>
                <Text
                    style={getStyle('eventDetailDetails__listItem__value')}
                >
                    {item.value}
                </Text>
            </View>
        )
    }
}

export default EventDetailDetails;
