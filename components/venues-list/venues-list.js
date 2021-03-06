import React from 'react';
import { FlatList } from 'react-native';
import VenuesListItem from './venues-list-item';
import './venues-list.style';

/**
 * <VenuesList />
 * @constructor
 */
function VenuesList(props) {
    return (
        <FlatList
            data={props.venues.toArray()}
            renderItem={renderVenue}
        />
    );

    function renderVenue({ item, index }) {
        return (
            <VenuesListItem
                key={index}
                venue={item}
                index={index}
                onPress={() => props.onSelectVenue(item)}
            />
        )
    }
}

export default VenuesList;
