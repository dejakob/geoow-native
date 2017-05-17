import React from 'react';
import { Text, View } from 'react-native';
import { getStyle } from 'react-native-styler';
import './dashboard-graph.style';

/**
 * <DashboardGraph />
 * @param props
 * @returns {XML}
 * @constructor
 */
function DashboardGraph(props) {

    // Todo: save score seperately on user
    return (
        <View
            style={getStyle('dashboardGraph__count')}
        >
            <Text
                style={getStyle('dashboardGraph__count__text')}
            >
                {props.score}
            </Text>
        </View>
    )
}

export default DashboardGraph;
