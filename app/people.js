import React, { Component } from 'react';
import { View } from 'react-native';
import { getStyle } from 'react-native-styler';
import Icon from 'react-native-vector-icons/MaterialIcons';

/**
 * <People />
 */
class People extends Component
{
    static navigationOptions = {
        header: null,
        tabBarIcon: ({ tintColor }) => <Icon name="people" style={[getStyle('tabBar__icon'), { color: tintColor }]} />
    };

    render() {
        return (
            <View>

            </View>
        )
    }
}

export default People;
