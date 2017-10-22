import React, { Component } from 'react';
import ColorizedCarousel from '../components/colorized-carousel';
import GameBoardCategory from '../components/game-board/game-board-category';

/**
 * <GameBoard />
 */
class GameBoard extends Component
{
    static navigationOptions = {
        header: null
    };

    get categories() {
        console.log('categories levels', this.props.gameBoard.get('categories').map(c => c.get('levels')).toJS());
        console.log('levels', this.props.gameBoard.get('levels').toJS());

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

        return (
            <ColorizedCarousel
                scenes={scenes}
            />
        );
    }
}

export default GameBoard;