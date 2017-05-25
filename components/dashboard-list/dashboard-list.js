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
            ...item
        }));

    return (
        <Timeline
            data={data}
            columnFormat='two-column'
            renderDetail={renderListItem}
            circleColor={StyleSheet.flatten(getStyle('dashboard__listItem__line')).color}
            lineColor={StyleSheet.flatten(getStyle('dashboard__listItem__line')).color}
            lineWidth={StyleSheet.hairlineWidth}
            detailContainerStyle={getStyle('dashboard__listItem')}
            descriptionStyle={{ margin: 0, padding: 0 }}
            timeStyle={getStyle('dashboard__listItem__date')}
            options={{ renderHeader: () => <View style={getStyle('dashboard__list__header')} /> }}
            renderCircle={renderBadge}
            separator={false}
            innerCircle='icon'
            style={getStyle('dashboard__list')}
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
