import moment from 'moment';
import React from 'react';
import { View, Image, Text } from 'react-native';
import * as CategoryImageHelper from '../../helpers/category-image-helper';
import ScoreBadge from '../score-badge/score-badge';
import { getStyle } from 'react-native-styler';
import './event-detail-header.style';

/**
 * <EventDetailHeader />
 * @constructor
 */
function EventDetailHeader(props) {
    return (
        <View
            style={getStyle('eventDetailHeader__wrapper')}
        >
            <View
                style={getStyle('eventDetailHeader')}
            >
                {renderImage()}
                <View
                    style={getStyle('eventDetailHeader__description')}
                >
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
            <View
                style={getStyle('eventDetailHeader__bottom')}
            >
                <Text>
                    {moment(props.event.get('startTime')).format('ddd DD MMMM, HH[h]mm')}
                </Text>
                <ScoreBadge
                    score={100}
                />
            </View>
        </View>
    );

    function renderImage() {
        if (props.event.getIn(['venue', 'fbid'])) {
            return (
                <Image
                    style={getStyle('eventDetailHeader__logo')}
                    source={{ uri: `https://graph.facebook.com/${props.event.getIn(['venue', 'fbid'])}/picture?type=large` }}
                />
            );
        }

        if (props.event.getIn(['venue', 'cover', 'source'])) {
            return (
                <Image
                    style={getStyle('eventDetailHeader__logo')}
                    source={{ uri: props.event.getIn(['venue', 'cover', 'source']) }}
                />
            );
        }

        const tag = props.event.get('tags').find(tag => CategoryImageHelper.getImageForCategory(tag) !== null);
        const image = CategoryImageHelper.getImageForCategory(tag);

        if (image) {
            return (
                <Image
                    style={getStyle('eventDetailHeader__logo')}
                    source={image}
                />
            );
        }

        return null;
    }
}

export default EventDetailHeader;
