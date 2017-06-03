import React from 'react';
import { View } from 'react-native';
import { getStyle } from 'react-native-styler';
import PrimaryButton from '../../components/button/primary-button';
import './dashboard-primary-action.style';

/**
 * <DashboardPrimaryAction />
 * @constructor
 */
function DashboardPrimaryAction(props) {
    return (
        <View
            style={getStyle('dashboardPrimaryAction')}
        >
            <PrimaryButton
                onPress={props.onPress}
            >
                {props.children}
            </PrimaryButton>
        </View>
    )
}

export default DashboardPrimaryAction;
