import React from 'react';
import { View, Image } from 'react-native';
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
            </View>
        </View>
    );
}

export default EventDetailHeader;
