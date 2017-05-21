import React from 'react';
import { View, Image, Text } from 'react-native';
import { getStyle } from 'react-native-styler';
import './event-detail-header.style';

/**
 * <EventDetailHeader />
 * @constructor
 */
function EventDetailHeader(props) {
    console.log('event', props.event.toJS());

    return (
        <View
            style={getStyle('eventDetailHeader')}
        >
            <Image
                source={{ uri: props.event.getIn([ 'cover', 'source']) }}
                style={getStyle('eventDetailHeader__background')}
            />
            <View
                style={getStyle('eventDetailHeader__content')}
            >
                <Image
                    style={getStyle('eventDetailHeader__content__logo')}
                    source={{ uri: `https://graph.facebook.com/${props.event.getIn(['venue', 'fbid'])}/picture?type=large` }}
                />
                <View>
                    <Text
                        style={getStyle('eventDetailHeader__title')}
                    >
                        {props.event.get('name')}
                    </Text>
                    <Text
                        style={getStyle('eventDetailHeader__venueTitle')}
                    >
                        {props.event.getIn(['venue', 'name'])}
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default EventDetailHeader;
