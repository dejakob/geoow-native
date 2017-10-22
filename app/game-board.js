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
        return this.props.gameBoard.get('categories');
    }

    componentWillMount() {
        this.props.loadCategories();
    }
    
    render() {
        const scenes = this.categories.toArray().map(category => ({
            color: category.get('color'),
            component: <GameBoardCategory category={category} />
        }))

        return (
            <ColorizedCarousel
                scenes={scenes}
            />
        );
    }
}

export default GameBoard;