import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { getStyle } from 'react-native-styler';
import Avatar from '../avatar/avatar';
import './dashboard-header.style';

/**
 * <DashboardHeader />
 */
class DashboardHeader extends Component
{
    render() {
        console.log('this.props.me', this.props.me.toJS());

        return (
            <View
                style={getStyle('dashboardHeader')}
            >
                <Avatar
                    image={this.props.me.get('avatar')}
                />
                <Text
                    style={getStyle('dashboardHeader__score')}
                >
                    Your score: {this.props.me.get('score')}
                </Text>
            </View>
        )
    }
}

export default DashboardHeader;