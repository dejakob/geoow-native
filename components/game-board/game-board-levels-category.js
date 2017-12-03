import React, { Component } from 'react';
import { View } from 'react-native';
import { createStyle, getStyle } from 'react-native-styler';
import GameBoardLevel from './game-board-level';
import Level from '../level';
import ModalizedList from '../modalized-list';

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
        const items = this.props.levels.map((level, index) => ({
            preview: <GameBoardLevel level={level} color={this.props.color} index={index} />,
            active: <Level level={level} color={this.props.color} {...this.props} />,
            locked: level.get('locked')
        }));

        return (
            <ModalizedList
                style={getStyle('gameBoardLevels')}
                items={items}
                header={this.props.header}
            />
        )
        
            
    }
}

export default GameBoardLevelsCategory;
