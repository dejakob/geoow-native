import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { getStyle } from 'react-native-styler';
import Avatar from '../avatar/avatar';
import './dashboard-header.style';

/**
 * <DashboardHeader />
 */
class DashboardHeader extends Component
{
    render() {
        return (
            <TouchableWithoutFeedback
                onPress={this.props.onPress}
            >
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
            </TouchableWithoutFeedback>
        )
    }
}

export default DashboardHeader;