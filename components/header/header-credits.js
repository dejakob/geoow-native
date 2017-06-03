import React from 'react';
import { View, Text } from 'react-native';
import { getStyle } from 'react-native-styler';
import FlatIcon from '../flat-icon/flat-icon';
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
                <FlatIcon
                    name="coins"
                    style={getStyle('headerCredits__coinsIcon')}
                />
                <Text
                    style={getStyle('headerCredits__score')}
                >
                    {props.score}
                </Text>
                <FlatIcon
                    name="qr-code"
                    style={getStyle('headerCredits__payIcon')}
                />
            </View>
        </Touchable>
    );
}

export default HeaderCredits;
