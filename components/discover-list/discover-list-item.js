import moment from 'moment';
import React from 'react';
import { View, Text } from 'react-native';
import { getStyle } from 'react-native-styler';

/**
 * <DiscoverListItem />
 * @constructor
 */
function DiscoverListItem(props) {
    const { event } = props;

    return (
        <View
            style={getStyle('discoverListItem')}
        >
            <View>
                <Text>{moment(event.get('startTime')).format('ddd HH:mm')} - {moment(event.get('endTime')).format('HH:mm')}</Text>
            </View>
            <View>
                <Text
                    style={getStyle('discoverListItem__title')}
                >
                    {event.get('name')}
                </Text>
                <Text
                    style={getStyle('discoverListItem__address')}
                >
                    {event.getIn(['location', 'street'])}
                </Text>
            </View>
        </View>
    );
}

export default DiscoverListItem;
