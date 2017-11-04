import React, { Component } from 'react';
import { View } from 'react-native';
import ColorizedCarousel from '../components/colorized-carousel';
import GameBoardCategory from '../components/game-board/game-board-category';
import { ModalizedListModalStack } from '../components/modalized-list';

/**
 * <GameBoard />
 */
class GameBoard extends Component
{
    static navigationOptions = {
        header: null
    };

    get categories() {
        return this.props.gameBoard.get('categories')
            .update(categories => 
                categories.map(category =>
                    category.set('levels',
                        category.get('levels').map(levelId =>
                            this.props.gameBoard.getIn(['levels', levelId])
                        )
                    )
                )
            );
    }

    componentWillMount() {
        this.props.loadCategories();
    }
    
    render() {
        const scenes = this.categories.toArray().map(category => ({
            color: category.get('color'),
            component: <GameBoardCategory category={category} color={category.get('color')} />
        }))

        console.log('scenes', scenes);

        return (
            <View
                style={{ flex: 1, position: 'relative' }}
            >
                <ColorizedCarousel
                    scenes={scenes}
                />
                <ModalizedListModalStack />
            </View>
        );
    }
}

export default GameBoard;