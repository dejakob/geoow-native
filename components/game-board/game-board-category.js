import React, { Component } from 'react';
import { Image, StyleSheet, View, ScrollView } from 'react-native';
import { getStyle, createStyle } from 'react-native-styler';
import { H1 } from '../typography';
import { Center, Main } from '../wrappers';
import GameBoardLevelsList from './game-board-levels-category';
import GameBoardCategoryIcon from './game-board-category-icon';
import { getImageForCategory } from '../../helpers/category-image-helper';

createStyle({
    gameBoardCategory: {
        bgImage: {
            position: 'absolute',
            top: '-30h4s',
            left: 0,
            right: 0,
            height: '230h4s',
            width: '100vw',
            opacity: 0.4
        },
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
                fontSize: '36h4s',
                backgroundColor: 'transparent'
            }
        },
        title: {
            backgroundColor: 'transparent',
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
            <ScrollView
                bounces={false}
            >
                <Image
                    source={getImageForCategory(this.props.category.get('label'))}
                    style={getStyle('gameBoardCategory__bgImage')}
                    resizeMode='cover'
                />
                <Main>
                    <Center>
                        <View
                            style={getStyle('gameBoardCategory__icon')}
                        >
                            <GameBoardCategoryIcon
                                type={this.props.category.get('label')}
                                color={StyleSheet.flatten(getStyle('gameBoardCategory__icon__font')).color}
                                size={StyleSheet.flatten(getStyle('gameBoardCategory__icon__font')).fontSize}
                                style={getStyle('gameBoardCategory__icon__font')}
                            />
                        </View>
                    </Center>
                    <H1
                        style={getStyle('gameBoardCategory__title')}
                    >
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
