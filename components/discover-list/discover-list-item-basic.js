import moment from 'moment';
import React from 'react';
import { View, Image, Text } from 'react-native';
import { getStyle } from 'react-native-styler';

/**
 * <DiscoverListItemBasic />
 * @param props
 * @param props.name
 * @param props.image
 * @param props.startTime
 * @param props.endTime
 * @constructor
 */
function DiscoverListItemBasic(props) {
    return (
        <View
            style={getStyle('discoverListItem')}
        >
            <View
                style={getStyle('discoverListItem__top')}
            >
                <Image
                    style={getStyle('discoverListItem__image')}
                    source={props.image}
                />
                <Image
                    style={getStyle('discoverListItem__staticMap')}
                />
            </View>
            <View
                style={getStyle('discoverListItem__bottom')}
            >
                <View>
                    <Text
                        style={getStyle('discoverListItem__name')}
                    >
                        {props.name}
                    </Text>
                    <Text
                    >
                        {moment(props.startTime).format('HH[h]mm')} - {moment(props.endTime).format('HH[h]mm')}
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default DiscoverListItemBasic;
