import React from 'react';
import { View, Text } from 'react-native';
import { getStyle } from 'react-native-styler';

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
                <Text>{item.get('type')}</Text>
                <Text>{item.get('score')}</Text>
            </View>
            <View
                style={getStyle('dashboard__listItem__footer')}
            >
                <Text>{item.get('createdAt')}</Text>
            </View>
        </View>
    );
}

export default DashboardListItem;
