import React, { Component } from 'react';
import { View, Text } from 'react-native';

/**
 * <GameBoardCategory />
 */
class GameBoardCategory extends Component
{
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>{this.props.category.get('label')}</Text>
            </View>
        );
    }
}

export default GameBoardCategory;
