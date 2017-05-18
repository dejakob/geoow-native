import React from 'react';
import { View, Text } from 'react-native';
import { getStyle } from 'react-native-styler';
import Avatar from '../avatar/avatar';
import './dashboard-me.style';

/**
 * <dashboard-me />
 * @constructor
 */
function DashboardMe(props) {
    return (
        <View
            style={getStyle('dashboardMe')}
        >
            <Avatar />
            <Text
                style={getStyle('dashboardMe__firstName')}
            >
                {props.me.get('firstName') || "What's your name?"}
            </Text>
        </View>
    );
}

export default DashboardMe;
