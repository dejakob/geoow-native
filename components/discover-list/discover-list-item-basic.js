import moment from 'moment';
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { getStyle } from 'react-native-styler';
import { getGoogleMapsToken } from '../../services/directions';

/**
 * <DiscoverListItemBasic />
 * @param props
 * @param props.name
 * @param props.image
 * @param props.startTime
 * @param props.endTime
 * @param props.latitude
 * @param props.longitude
 * @constructor
 */
function DiscoverListItemBasic(props) {
    const markers = `markers=color:red%7C${props.latitude},${props.longitude}`;
    const staticMapStyle = StyleSheet.flatten(getStyle('discoverListItem__staticMap'));
    const staticMapSize = `${staticMapStyle.maxWidth}x${staticMapStyle.height}`;

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
                    resizeMode="cover"
                />
                <Image
                    style={getStyle('discoverListItem__staticMap')}
                    source={{ uri: `https://maps.googleapis.com/maps/api/staticmap?size=${staticMapSize}&${markers}&zoom=13&maptype=roadmap&style=element:geometry%7Ccolor:0x1d2c4d&style=element:labels.text.fill%7Ccolor:0x8ec3b9&style=element:labels.text.stroke%7Ccolor:0x1a3646&style=feature:administrative.country%7Celement:geometry.stroke%7Ccolor:0x4b6878&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0x64779e&style=feature:administrative.province%7Celement:geometry.stroke%7Ccolor:0x4b6878&style=feature:landscape.man_made%7Celement:geometry.stroke%7Ccolor:0x334e87&style=feature:landscape.natural%7Celement:geometry%7Ccolor:0x023e58&style=feature:poi%7Celement:geometry%7Ccolor:0x283d6a&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x6f9ba5&style=feature:poi%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d&style=feature:poi.park%7Celement:geometry.fill%7Ccolor:0x023e58&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x3C7680&style=feature:road%7Celement:geometry%7Ccolor:0x304a7d&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x98a5be&style=feature:road%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d&style=feature:road.highway%7Celement:geometry%7Ccolor:0x2c6675&style=feature:road.highway%7Celement:geometry.stroke%7Ccolor:0x255763&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0xb0d5ce&style=feature:road.highway%7Celement:labels.text.stroke%7Ccolor:0x023e58&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x98a5be&style=feature:transit%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d&style=feature:transit.line%7Celement:geometry.fill%7Ccolor:0x283d6a&style=feature:transit.station%7Celement:geometry%7Ccolor:0x3a4762&style=feature:water%7Celement:geometry%7Ccolor:0x0e1626&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x4e6d70&scale=2&key=${getGoogleMapsToken()}` }}
                    resizeMode="cover"
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
