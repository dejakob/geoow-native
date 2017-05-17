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
                style={getStyle('dashboard__listItem__content')}
            >
                <Text
                    style={getStyle('dashboard__listItem__description')}
                >
                    {getDescription(item.get('type'), item.get('data').toJS())}
                </Text>
                <Text
                    style={item.get('score') > 0 ? getStyle('dashboard__listItem__score') : getStyle('dashboard__listItem__badScore')}
                >
                    {item.get('score')}
                </Text>
            </View>
            <View
                style={getStyle('dashboard__listItem__footer')}
            >
                <Text
                    style={getStyle('dashboard__listItem__date')}
                >
                    {item.get('createdAt')}
                </Text>
            </View>
        </View>
    );
}

export default DashboardListItem;
