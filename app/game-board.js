import React, { Component } from 'react';

/**
 * <GameBoard />
 */
class GameBoard extends Component
{
    static navigationOptions = {
        header: null
    };

    componentWillMount() {
        this.props.loadCategories();
    }
    
    render() {
        return null;
    }
}

export default GameBoard;