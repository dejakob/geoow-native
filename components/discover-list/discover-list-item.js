import moment from 'moment';
import React from 'react';
import { View, Text, Image } from 'react-native';
import Touchable from '../button/touchable';
import { getStyle } from 'react-native-styler';

/**
 * <DiscoverListItem />
 * @constructor
 */
function DiscoverListItem(props) {
    const { event } = props;

    return (
        <Touchable
            onPress={props.onPress}
        >
            <View
                style={getStyle('discoverListItem')}
            >
                <Image
                    source={{ uri: event.getIn([ 'cover', 'source']) }}
                    style={getStyle('discoverListItem__avatar')}
                />
                <View
                    style={getStyle('discoverListItem__content')}
                >
                    <Text
                        style={getStyle('discoverListItem__title')}
                    >
                        {event.get('name')}
                    </Text>
                    <Text
                        style={getStyle('discoverListItem__address')}
                    >
                        {`${event.getIn(['location', 'street'])} • ${moment(event.get('startTime')).format('ddd')} • ${moment(event.get('endTime')).format('HH:mm')}`}
                    </Text>
                </View>
            </View>
        </Touchable>
    );
}

export default DiscoverListItem;
