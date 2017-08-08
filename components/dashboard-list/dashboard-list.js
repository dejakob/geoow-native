import React from 'react';
import { FlatList, StyleSheet, View, ScrollView } from 'react-native';
import { getStyle } from 'react-native-styler';
import { getDescription } from '../../helpers/user-stats-helper';
import DashboardHeader from '../dashboard-header/dashboard-header';
import DashboardListItem from './dashboard-list-item';
import './dashboard-list.style';

/**
 * <DashboardList />
 * @constructor
 */
function DashboardList(props) {
    const data = props.stats
        .toJS()
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .map(item => ({
            time: '',
            title: item.score,
            description: getDescription(item.type, item.data),
            ...item
        }));

    const header = (
        <DashboardHeader
            me={props.user.get('me')}
        />
    );

    return (
        <FlatList
            data={data}
            style={getStyle('dashboard__list')}
            renderItem={renderListItem}
            ListHeaderComponent={header}
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
