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
        <View>
            <View
                style={getStyle('dashboard__listItem__descriptionContainer')}
            >
                <Text
                    style={getStyle('dashboard__listItem__description')}
                >
                    {getDescription(item.type, item.data)}
                </Text>
            </View>
            <Text
                style={getStyle('dashboard__listItem__date')}
            >
                {moment(item.createdAt).format('DD MMM, HH[h]')}
            </Text>
        </View>
    );
}

export default DashboardListItem;
