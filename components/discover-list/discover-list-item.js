import moment from 'moment';
import React from 'react';
import { View, Text, Image } from 'react-native';
import * as CategoryImageHelper from '../../helpers/category-image-helper';
import Touchable from '../button/touchable';
import { getStyle } from 'react-native-styler';

/**
 * <DiscoverListItem />
 * @constructor
 */
function DiscoverListItem(props) {
    const { event } = props;

    let image = {};

    if (event.getIn([ 'cover', 'source'])) {
        image.uri = event.getIn([ 'cover', 'source']);
    }
    else {
        const tag = event.get('tags').find(tag => CategoryImageHelper.getImageForCategory(tag) !== null);
        image = CategoryImageHelper.getImageForCategory(tag);
    }

    return (
        <Touchable
            onPress={props.onPress}
        >
            <View
                style={getStyle('discoverListItem')}
            >
                <Image
                    source={image}
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
                        {`${event.getIn(['location', 'street'])} • ${moment(event.get('startTime')).format('ddd')} • ${moment(event.get('startTime')).format('HH:mm')}`}
                    </Text>
                </View>
            </View>
        </Touchable>
    );
}

export default DiscoverListItem;
