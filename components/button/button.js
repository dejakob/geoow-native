import React from 'react';
import { View, Text, Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import './button.style';

const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

/**
 * <Button />
 * @constructor
 */
function Button(props) {
    return (
        <Touchable
            onPress={props.onPress}
            disabled={props.disabled}
            style={[ props.touchStyle, props.disabled ? { opacity: 0.5 } : {} ]}
        >
            <View
                style={props.containerStyle}
                onPress={props.onPress}
            >
                <Text
                    style={props.textStyle}
                >
                    {props.children}
                </Text>
            </View>
        </Touchable>
    )
}

export default Button;
