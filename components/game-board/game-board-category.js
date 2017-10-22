import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { getStyle, createStyle } from 'react-native-styler';
import { H1 } from '../typography';
import { Center, Main } from '../wrappers';
import GameBoardLevelsList from './game-board-levels-category';
import GameBoardCategoryIcon from './game-board-category-icon';

createStyle({
    gameBoardCategory: {
        icon: {
            color: 'theme:primary',
            fontSize: '36h4s'
        }
    }
})

/**
 * <GameBoardCategory />
 */
class GameBoardCategory extends Component
{
    render() {
        return (
            <Main>
                <Center>
                    <GameBoardCategoryIcon
                        type={this.props.category.get('label')}
                        color={StyleSheet.flatten(getStyle('gameBoardCategory__icon')).color}
                        size={StyleSheet.flatten(getStyle('gameBoardCategory__icon')).fontSize}
                    />
                </Center>
                <H1>{this.props.category.get('label')}</H1>
                <GameBoardLevelsList
                    levels={this.props.category.levels}
                />
            </Main>
        );
    }
}

export default GameBoardCategory;
