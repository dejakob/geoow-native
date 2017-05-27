import React from 'react';
import { View, Text, Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import './button.style';

const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

/**
 * <Button />
 * @constructor
 */
function Button(props) {
    const shadow = {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        marginBottom: 10
    };

    return (
        <Touchable
            onPress={props.onPress}
            disabled={props.disabled}
            style={[ props.touchStyle, props.disabled ? { opacity: 0.5 } : {} ]}
        >
            <View
                style={[props.containerStyle, shadow]}
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
