import React from 'react';
import { Text } from 'react-native';

/**
 * <DashboardGraph />
 * @param props
 * @returns {XML}
 * @constructor
 */
function DashboardGraph(props) {

    // Todo: save score seperately on user
    return (
        <Text>
            {props.score}
        </Text>
    )
}

export default DashboardGraph;
