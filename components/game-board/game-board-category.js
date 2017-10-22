import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { H1 } from '../typography';

/**
 * <GameBoardCategory />
 */
class GameBoardCategory extends Component
{
    render() {
        return (
            <View style={{ flex: 1 }}>
                <H1>{this.props.category.get('label')}</H1>
            </View>
        );
    }
}

export default GameBoardCategory;
