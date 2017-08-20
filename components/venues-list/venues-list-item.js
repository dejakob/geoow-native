import React from 'react';
import { View } from 'react-native';
import Avatar from '../avatar/avatar';

/**
 * <VenuesListItem />
 * @returns {XML}
 * @constructor
 *
 * props.venue is not immutable!
 */
function VenuesListItem(props) {
    return (
        <View>
            <Avatar
                image={props.venue.cover && props.venue.cover.source}
            />
        </View>
    );
}

export default VenuesListItem;
