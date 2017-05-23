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
    return (
        <FlatList
            data={props.events.toArray()}
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
