import React from 'react';
import { FlatList } from 'react-native';
import DiscoverListItem from './discover-list-item';

/**
 * <DiscoverList />
 * @constructor
 */
function DiscoverList(props) {
    return (
        <FlatList
            data={props.events.toArray()}
            renderItem={renderItem}
        />
    );

    function renderItem({ item, index }) {
        return (
            <DiscoverListItem
                key={index}
                event={item}
            />
        )
    }
}

export default DiscoverList;
