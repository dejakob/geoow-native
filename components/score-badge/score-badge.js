import React from 'react';
import { View, Text } from 'react-native';
import { getStyle } from 'react-native-styler';
import './score-badge.style';

/**
 * <ScoreBadge />
 * @constructor
 */
function ScoreBadge(props) {
    const { score } = props;
    let containerStyle = null;
    let textStyle = null;

    if (score > 0) {
        containerStyle = getStyle('scoreBadge__scoreContainer');
        textStyle = getStyle('scoreBadge__score');
    }
    else {
        containerStyle = getStyle('scoreBadge__badScoreContainer');
        textStyle = getStyle('scoreBadge__badScore');
    }

    return (
        <View
            style={containerStyle}
        >
            <Text
                style={textStyle}
            >
                {score}
            </Text>
        </View>
    )
}

export default ScoreBadge;
