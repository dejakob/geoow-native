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
                <Text>
                    {item.get('type')}
                </Text>
                <Text
                    style={getStyle('dashboard__listItem__score')}
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
