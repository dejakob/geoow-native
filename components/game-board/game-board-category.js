import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { getStyle, createStyle } from 'react-native-styler';
import { H1 } from '../typography';
import { Center, Main } from '../wrappers';
import GameBoardLevelsList from './game-board-levels-category';
import GameBoardCategoryIcon from './game-board-category-icon';

createStyle({
    gameBoardCategory: {
        icon: {
            height: '60h4s',
            width: '60h4s',
            borderRadius: '30h4s',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: '2h4s',
            borderColor: 'theme:primary',
            marginBottom: '16h4s',

            font: {
                color: 'theme:primary',
                fontSize: '36h4s'
            }
        },
        list: {
            marginTop: '16h4s'
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
            <ScrollView>
                <Main>
                    <Center>
                        <View
                            style={getStyle('gameBoardCategory__icon')}
                        >
                            <GameBoardCategoryIcon
                                type={this.props.category.get('label')}
                                color={StyleSheet.flatten(getStyle('gameBoardCategory__icon__font')).color}
                                size={StyleSheet.flatten(getStyle('gameBoardCategory__icon__font')).fontSize}
                            />
                        </View>
                    </Center>
                    <H1>
                        {this.props.category.get('label')}
                    </H1>
                    <GameBoardLevelsList
                        color={this.props.color}
                        levels={this.props.category.get('levels')}
                        style={getStyle('gameBoardCategory__list')}
                    />
                </Main>
            </ScrollView>
        );
    }
}

export default GameBoardCategory;
