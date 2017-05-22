import React from 'react';
import { View, Text } from 'react-native';
import { getStyle } from 'react-native-styler';
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
            <View
                style={getStyle('dashboardMe__score')}
            >
                <Text
                    style={getStyle('dashboardMe__score__text')}
                >
                    {props.me.getIn(['me', 'score'])}
                </Text>
            </View>
        </View>
    );
}

export default DashboardMe;
