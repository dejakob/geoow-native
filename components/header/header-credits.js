import React from 'react';
import { View, Text } from 'react-native';

/**
 * <HeaderCredits />
 */
function HeaderCredits(props) {
    return (
        <View>
            <Text>{props.score}</Text>
        </View>
    );
}

export default HeaderCredits;
