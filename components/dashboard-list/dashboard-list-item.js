import moment from 'moment';
import React from 'react';
import { View, Text } from 'react-native';
import { getStyle } from 'react-native-styler';
import { getDescription } from '../../helpers/user-stats-helper';

/**
 * <DashboardList />
 * @constructor
 */
function DashboardListItem(props) {
    const { item } = props;

    return (
        <View
            style={getStyle('dashboard__listItem')}
        >
            <View
                style={getStyle('dashboard__listItem__descriptionContainer')}
            >
                <Text
                    style={getStyle('dashboard__listItem__description')}
                >
                    {getDescription(item.get('type'), item.get('data').toJS())}
                </Text>
            </View>
            <View
                style={getStyle('dashboard__listItem__dateContainer')}
            >
                <Text
                    style={getStyle('dashboard__listItem__date')}
                >
                    {moment(item.get('createdAt')).format('DD MMM')}
                </Text>
            </View>
            <View
                style={item.get('score') > 0 ? getStyle('dashboard__listItem__scoreContainer') : getStyle('dashboard__listItem__badScoreContainer')}
            >
                <Text
                    style={item.get('score') > 0 ? getStyle('dashboard__listItem__score') : getStyle('dashboard__listItem__badScore')}
                >
                    {item.get('score')}
                </Text>
            </View>
        </View>
    );
}

export default DashboardListItem;
