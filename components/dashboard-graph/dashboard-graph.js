import React from 'react';
import { Text } from 'react-native';

/**
 * <DashboardGraph />
 * @param props
 * @returns {XML}
 * @constructor
 */
function DashboardGraph(props) {
    return (
        <Text>
            {props.score}
        </Text>
    )
}

export default DashboardGraph;
