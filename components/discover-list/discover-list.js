import React from 'react';
import { FlatList } from 'react-native';
import DiscoverListItem from './discover-list-item';
import ListSeparator from '../list-separator/list-separator';
import './discover-list.style';

/**
 * <DiscoverList />
 * @constructor
 */
function DiscoverList(props) {

    // Filter out duplicates with exactly the same name
    const events = props.events
        .filter((event, index) =>
            props.events
                .map(event => event.get('name'))
                .toArray()
                .indexOf(event.get('name')) === index
        )
        .toArray();

    return (
        <FlatList
            data={events}
            renderItem={renderItem}
            ItemSeparatorComponent={ListSeparator}
            bounces={false}
        />
    );

    function renderItem({ item, index }) {
        return (
            <DiscoverListItem
                key={index}
                event={item}
                onPress={() => props.onItemPress(item)}
            />
        )
    }
}

export default DiscoverList;
