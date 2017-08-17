import React from 'react';
import { View, Text } from 'react-native';
import { getStyle } from 'react-native-styler';
import Touchable from '../button/touchable';

/**
 * <HeaderCredits />
 */
function HeaderCredits(props) {
    return (
        <Touchable
            onPress={props.onPress}
        >
            <View
                style={getStyle('headerCredits')}
            >
                <Text
                    style={getStyle('headerCredits__score')}
                >
                    {props.score}
                </Text>
            </View>
        </Touchable>
    );
}

export default HeaderCredits;
