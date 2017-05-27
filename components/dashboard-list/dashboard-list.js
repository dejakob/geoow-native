import React from 'react';
import moment from 'moment';
import { FlatList, StyleSheet, View, ScrollView } from 'react-native';
import Timeline from 'react-native-timeline-listview';
import { getDescription } from '../../helpers/user-stats-helper';
import { getStyle } from 'react-native-styler';
import DashboardMe from '../dashboard-me/dashboard-me';
import DashboardListItem from './dashboard-list-item';
import ScoreBadge from '../score-badge/score-badge';
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
            <DashboardMe
                me={props.me}
            />
            <View
                style={getStyle('dashboard__list')}
            >
                <View
                    style={getStyle('dashboard__list__column')}
                >
                    {data.filter((item, index) => index % 2 === 0).map(renderListItem)}
                </View>
                <View
                    style={getStyle('dashboard__list__column')}
                >
                    {data.filter((item, index) => index % 2 === 1).map(renderListItem)}
                </View>
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

    function renderBadge(item) {
        return null;
    }
}

export default DashboardList;
