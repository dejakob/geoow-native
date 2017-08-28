import React from 'react';
import { View, Button, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { getStyle } from 'react-native-styler';
import * as CategoryImageHelper from '../../helpers/category-image-helper';
import DiscoverListItemBasic from './discover-list-item-basic';

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
        <TouchableWithoutFeedback
            onPress={props.onPress}
        >
            <DiscoverListItemBasic
                image={image}
                name={event.get('name')}
                startTime={event.get('startTime')}
                endTime={event.get('endTime')}
                latitude={event.getIn(['location', 'geocoords', 1])}
                longitude={event.getIn(['location', 'geocoords', 0])}
            />
        </TouchableWithoutFeedback>
    );
}

export default DiscoverListItem;
