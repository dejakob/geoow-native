import moment from 'moment';
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { getStyle } from 'react-native-styler';
import { getGoogleMapsToken } from '../../services/directions';
import { humanizeDistance } from '../../helpers/distance-helper';

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
    const staticMapStyle = StyleSheet.flatten(getStyle('discoverListItem__image'));
    const staticMapSize = `${staticMapStyle.width}x${staticMapStyle.width}`;

    return (
        <View
            style={[getStyle('discoverListItem'), props.expanded ? { marginLeft: undefined, marginRight: undefined, marginBottom: undefined, borderRadius: undefined } : undefined]}
        >
            <View
                style={[getStyle('discoverListItem__top'), props.expanded ? { borderTopLeftRadius: undefined, borderTopRightRadius: undefined } : undefined]}
            >
                <Image
                    style={[getStyle('discoverListItem__image'), props.expanded ? { borderTopRightRadius: undefined } : undefined]}
                    source={{ uri: `https://maps.googleapis.com/maps/api/staticmap?size=${staticMapSize}&${markers}&zoom=13&maptype=roadmap&style=element:geometry%7Ccolor:0x1d2c4d&style=element:labels.text.fill%7Ccolor:0x8ec3b9&style=element:labels.text.stroke%7Ccolor:0x1a3646&style=feature:administrative.country%7Celement:geometry.stroke%7Ccolor:0x4b6878&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0x64779e&style=feature:administrative.province%7Celement:geometry.stroke%7Ccolor:0x4b6878&style=feature:landscape.man_made%7Celement:geometry.stroke%7Ccolor:0x334e87&style=feature:landscape.natural%7Celement:geometry%7Ccolor:0x023e58&style=feature:poi%7Celement:geometry%7Ccolor:0x283d6a&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x6f9ba5&style=feature:poi%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d&style=feature:poi.park%7Celement:geometry.fill%7Ccolor:0x023e58&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x3C7680&style=feature:road%7Celement:geometry%7Ccolor:0x304a7d&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x98a5be&style=feature:road%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d&style=feature:road.highway%7Celement:geometry%7Ccolor:0x2c6675&style=feature:road.highway%7Celement:geometry.stroke%7Ccolor:0x255763&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0xb0d5ce&style=feature:road.highway%7Celement:labels.text.stroke%7Ccolor:0x023e58&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x98a5be&style=feature:transit%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d&style=feature:transit.line%7Celement:geometry.fill%7Ccolor:0x283d6a&style=feature:transit.station%7Celement:geometry%7Ccolor:0x3a4762&style=feature:water%7Celement:geometry%7Ccolor:0x0e1626&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x4e6d70&scale=2&key=${getGoogleMapsToken()}` }}
                    resizeMode="cover"
                />
            </View>
            <View
                style={[getStyle('discoverListItem__bottom'), props.expanded ? { borderBottomColor: undefined, borderBottomWidth: undefined, borderBottomLeftRadius: undefined, borderBottomRightRadius: undefined } : undefined]}
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
                    <Text>{humanizeDistance(props.distance)}</Text>
                </View>
            </View>
            <Image
                source={props.image}
                style={getStyle('discoverListItem__avatar')}
            />
        </View>
    );
}

export default DiscoverListItemBasic;
