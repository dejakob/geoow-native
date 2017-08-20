import React from 'react';
import { View, Text } from 'react-native';
import { getStyle } from 'react-native-styler';
import Avatar from '../avatar/avatar';
import Touchable from '../button/touchable';

/**
 * <VenuesListItem />
 * @returns {XML}
 * @constructor
 *
 * props.venue is not immutable!
 */
function VenuesListItem(props) {
    return (
        <Touchable
            onPress={props.onPress}
        >
            <View
                style={props.index % 2 === 0 ? getStyle('venuesList__item__odd') : getStyle('venuesList__item__even')}
            >
                <Avatar
                    image={props.venue.getIn(['cover', 'source'])}
                    style={getStyle('venuesList__item__avatar')}
                />
                <View
                    style={getStyle('venuesList__item__details')}
                >
                    <Text
                        style={getStyle('venuesList__item__title')}
                    >
                        {props.venue.get('name')}
                    </Text>
                    <Text
                        style={getStyle('venuesList__item__tags')}
                    >
                        {(props.venue.get('tags') || []).join(' • ')}
                    </Text>
                </View>
            </View>
        </Touchable>
    );
}

export default VenuesListItem;
