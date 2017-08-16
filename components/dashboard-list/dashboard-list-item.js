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
            <View
                style={getStyle('dashboard__listItem__line')}
            />
            <View
                style={getStyle('dashboard__listItem__dot')}
            />
            <View
                style={getStyle('dashboard__listItem__content')}
            >
                <View>
                    <Text
                        style={getStyle('dashboard__listItem__content__day')}
                    >
                        {moment(item.createdAt).format('DD MMM')}
                    </Text>
                    <Text
                        style={getStyle('dashboard__listItem__content__hour')}
                    >
                        {moment(item.createdAt).format('HH[h]')}
                    </Text>
                </View>
                <View
                    style={getStyle('dashboard__listItem__content__descScore')}
                >
                    {media}
                    <Text
                        style={getStyle('dashboard__listItem__content__description')}
                    >
                        {getDescription(item.type, item.data)}
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
