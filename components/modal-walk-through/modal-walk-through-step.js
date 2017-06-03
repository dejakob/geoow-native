import React from 'react';
import { View } from 'react-native';

/**
 * <ModalWalkThroughStep />
 * @constructor
 */
function ModalWalkThroughStep(props) {
    return (
        <View
            style={{ flex: 1 }}
        >
            {props.children}
        </View>
    )
}

export default ModalWalkThroughStep;
