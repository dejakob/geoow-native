import React from 'react';
import { View, Image } from 'react-native';
import { getStyle } from 'react-native-styler';

/**
 * <DashboardListItemMedia />
 * @param props
 * @returns {XML}
 * @constructor
 */
function DashboardListItemMedia(props) {
    const { media } = props.feedItem;

    if (!media || media.type !== 'image') {
        return null;
    }

    return (
        <Image
            resizeMode='contain'
            source={{ uri: media.path }}
            style={getStyle('dashboard__listItemMedia__image')}
        />
    );
}

export default DashboardListItemMedia;
