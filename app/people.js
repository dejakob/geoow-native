import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { getStyle } from 'react-native-styler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MainBackground from '../components/main-background/main-background';

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
            <MainBackground>
                <Text>People around (horizontal swipe)</Text>
                <Text>Gifted chat view</Text>
            </MainBackground>
        )
    }
}

export default People;
