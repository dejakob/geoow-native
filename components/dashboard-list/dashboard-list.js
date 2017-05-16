import React from 'react';
import { FlatList } from 'react-native';
import DashboardListItem from './dashboard-list-item';
import './dashboard-list.style';

/**
 * <DashboardList />
 * @constructor
 */
function DashboardList(props) {
    return (
        <FlatList
            data={props.stats}
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
