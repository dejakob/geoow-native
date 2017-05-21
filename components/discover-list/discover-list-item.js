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
            <Text>{event.get('startTime')}</Text>
        </View>
    );
}

export default DiscoverListItem;
