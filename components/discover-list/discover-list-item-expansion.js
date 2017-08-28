import React from 'react';
import { View, Text, Button } from 'react-native';
import { getStyle } from 'react-native-styler';

/**
 * <DiscoverListItemExpansion />
 * @param props
 * @returns {XML}
 * @constructor
 */
function DiscoverListItemExpansion(props) {
    return (
        <View
            style={getStyle('discoverListItem__expansion')}
        >
            <View
                style={getStyle('discoverListItem__expansion__header')}
            >
                <Text
                    style={getStyle('discoverListItem__expansion__headerText')}
                >
                    Earn 100 credits with this quest
                </Text>
            </View>
            {props.children}
            <View
                style={getStyle('discoverListItem__expansion__footer')}
            >
                <Button
                    title="Start quest ▶"
                    color="#ffffff"
                    onPress={props.onStartQuestPress}
                />
            </View>
        </View>
    );
}

export default DiscoverListItemExpansion;