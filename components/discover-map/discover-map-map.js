import moment from 'moment'
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import * as CategoryImageHelper from '../../helpers/category-image-helper';
import { getStyle } from 'react-native-styler';
import { getMapStyling } from '../../services/directions';

/**
 * <DiscoverMapMap />
 * @param props
 * @returns {XML}
 * @constructor
 */
function DiscoverMapMap(props) {
    const annotations = props.events.map(event => {
        let image = {};

        if (event.getIn([ 'cover', 'source'])) {
            image.uri = event.getIn([ 'cover', 'source']);
        }
        else {
            const tag = event.get('tags').find(tag => CategoryImageHelper.getImageForCategory(tag) !== null);
            image = CategoryImageHelper.getImageForCategory(tag);
        }

        return {
            coordinate: {
                latitude: event.getIn(['location', 'geocoords', 1]),
                    longitude: event.getIn(['location', 'geocoords', 0])
            },
            title: event.get('name'),
                description: `${moment(event.get('startTime')).format('ddd')} • ${moment(event.get('endTime')).format('HH:mm')}`,
            id: event.get('_id'),
            image
        };
    }).toJS();

    const initialRegion = {
        latitude: props.latitude,
        longitude: props.longitude,
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00421,
    };

    return (
        <MapView
            initialRegion={initialRegion}
            provider={PROVIDER_GOOGLE}
            style={getStyle('discoverMap')}
            initialZoomLevel={13}
            customMapStyle={getMapStyling()}
            showsUserLocation={true}
            followsUserLocation={true}
            loadingEnabled={true}
        >
            {annotations.map(annotation =>
                <MapView.Marker
                    coordinate={annotation.coordinate}
                    pinColor="blue"
                >
                    <MapView.Callout
                        onPress={() => props.onAnnotationPress(annotation)}
                        style={getStyle('discoverMap__callout')}
                        tooltip={true}
                    >
                        <Image
                            source={annotation.image}
                            style={getStyle('discoverMap__callout__image')}
                        />
                            <Text
                                style={getStyle('discoverMap__callout__text')}
                            >
                                {annotation.title}
                            </Text>
                    </MapView.Callout>
                </MapView.Marker>
            )}

        </MapView>
    );
}

export default DiscoverMapMap;
