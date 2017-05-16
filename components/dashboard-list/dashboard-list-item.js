import React from 'react';
import { View, Text } from 'react-native';

/**
 * <DashboardList />
 * @constructor
 */
function DashboardListItem(props) {
    const { item } = props;

    return (
        <View>
            <Text>{item.get('type')}</Text>
            <Text>{item.get('score')}</Text>
            <Text>{item.get('createdAt')}</Text>
        </View>
    );
}

export default DashboardListItem;
