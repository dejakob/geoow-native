import React from 'react';
import moment from 'moment';
import { FlatList, StyleSheet, View, ScrollView } from 'react-native';
import { getDescription } from '../../helpers/user-stats-helper';
import { getStyle } from 'react-native-styler';
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

    return (
        <ScrollView>
            <View
                style={getStyle('dashboard__list')}
            >
                {data.filter((item, index) => index % 2 === 0).map(renderListItem)}
            </View>
        </ScrollView>
    );

    function renderListItem(item, index) {
        return (
            <DashboardListItem
                key={index}
                item={item}
            />
        )
    }
}

export default DashboardList;
