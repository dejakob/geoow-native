import React, { Component } from 'react';
import { View } from 'react-native';
import { createStyle, getStyle } from 'react-native-styler';
import GameBoardLevel from './game-board-level'

createStyle({
    gameBoardLevels: {
        marginTop: '24h4s'
    }
})

/**
 * <GameBoardLevelsCategory />
 */
class GameBoardLevelsCategory extends Component
{
    render() {
        return (
            <View
                style={getStyle('gameBoardLevels')}
            >
                {this.props.levels.map(level =>
                    <GameBoardLevel level={level} color={this.props.color} />
                )}
            </View>
        )
        
            
    }
}

export default GameBoardLevelsCategory;
