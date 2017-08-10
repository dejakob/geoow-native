import moment from 'moment';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { getStyle } from 'react-native-styler';
import { getDescription } from '../../helpers/user-stats-helper';

/**
 * <DashboardList />
 * @constructor
 */
function DashboardListItem(props) {
    const { item } = props;

    const overlayStyle = item.score > 0 ?
        getStyle('dashboard__listItem__header__overlay__ok') :
        getStyle('dashboard__listItem__header__overlay__notok');

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
        </View>
    );

    return (
        <View
            style={getStyle('dashboard__listItem')}
        >
            <Image
                style={getStyle('dashboard__listItem__header__image')}
                source={require('../../assets/beach-pexels.jpeg')}
                resizeMode='cover'
            />
            <View
                style={getStyle('dashboard__listItem__header')}
            >
                <View
                    style={[getStyle('dashboard__listItem__header__overlay'), overlayStyle]}
                >
                    <Text
                        style={getStyle('dashboard__listItem__header__score')}
                    >
                        {item.score}
                    </Text>
                </View>
            </View>
            <View
                style={getStyle('dashboard__listItem__descriptionContainer')}
            >
                <Text
                    style={getStyle('dashboard__listItem__description')}
                >
                    {getDescription(item.type, item.data)}
                </Text>
                <Text
                    style={getStyle('dashboard__listItem__date')}
                >
                    {moment(item.createdAt).format('DD MMM, HH[h]')}
                </Text>
            </View>
        </View>
    );
}

export default DashboardListItem;
