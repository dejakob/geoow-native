import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getStyle } from 'react-native-styler';
import Touchable from '../button/touchable';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
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
            <View>
                <Touchable
                    onPress={() => props.navigation.navigate('Scan')}
                >
                    <MaterialCommunityIcon
                        name="qrcode-scan"
                        color={StyleSheet.flatten(getStyle('dashboardMe__cameraIcon')).color}
                        size={StyleSheet.flatten(getStyle('dashboardMe__cameraIcon')).fontSize}
                    />
                </Touchable>
            </View>
        </View>
    );
}

export default DashboardMe;
