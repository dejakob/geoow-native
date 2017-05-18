import React from 'react';
import { FlatList } from 'react-native';
import { getStyle } from 'react-native-styler';
import DashboardListItem from './dashboard-list-item';
import './dashboard-list.style';

/**
 * <DashboardList />
 * @constructor
 */
function DashboardList(props) {
    return (
        <FlatList
            data={props.stats.filter(stat => stat.get('score') !== 0)}
            renderItem={renderListItem}
        />
    );

    function renderListItem({ item, index }) {
        return (
            <DashboardListItem
                key={index}
                item={item}
            />
        )
    }
}

export default DashboardList;
