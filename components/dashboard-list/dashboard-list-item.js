import moment from 'moment';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { getStyle } from 'react-native-styler';
import { getDescription } from '../../helpers/user-stats-helper';
import ScoreBadge from '../score-badge/score-badge';
import DashboardListItemMedia from './dashboard-list-item-media';

/**
 * <DashboardList />
 * @constructor
 */
function DashboardListItem(props) {
    const { item } = props;
    let media = null;

    if (item.data && item.data.feedItem) {
        media = (
            <DashboardListItemMedia
                feedItem={item.data.feedItem}
            />
        );
    }

    return (
        <View
            style={getStyle('dashboard__listItem')}
        >
            {media}
            <View
                style={getStyle('dashboard__listItem__details')}
            >
                <Text>{getDescription(item.type, item.data)}</Text>
                <View
                    style={getStyle('dashboard__listItem__bottom')}
                >
                    <Text
                        style={getStyle('dashboard__listItem__date')}
                    >
                        {moment(item.createdAt).format('DD MMM, HH[h]mm')}
                    </Text>
                    <ScoreBadge
                        score={item.score}
                    />
                </View>
            </View>
        </View>
    );
}

export default DashboardListItem;
