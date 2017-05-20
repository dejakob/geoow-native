import React from 'react';
import moment from 'moment';
import { FlatList, StyleSheet, View } from 'react-native';
import Timeline from 'react-native-timeline-listview';
import { getDescription } from '../../helpers/user-stats-helper';
import { getStyle } from 'react-native-styler';
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
        .map(item => ({
            time: '',
            title: item.score,
            description: getDescription(item.type, item.data),
            icon: require('../../assets/happy.jpg'),
            ...item
        }));

    return (
        <Timeline
            data={data}
            columnFormat='two-column'
            renderDetail={renderListItem}
            circleColor={StyleSheet.flatten(getStyle('dashboard__listItem__line')).color}
            lineColor={StyleSheet.flatten(getStyle('dashboard__listItem__line')).color}
            lineWidth={1}
            detailContainerStyle={getStyle('dashboard__listItem')}
            timeStyle={getStyle('dashboard__listItem__date')}
            renderCircle={renderBadge}
            separator={false}
            style={getStyle('dashboard__list')}
            innerCircle='icon'
        />
    );

    function renderListItem(item) {
        return (
            <DashboardListItem
                item={item}
            />
        )
    }

    function renderBadge(item) {
        return (
            <View
                style={getStyle('dashboard__listItem__badge')}
            >
                <ScoreBadge
                    score={item.score}
                />
            </View>
        )
    }
}

export default DashboardList;
