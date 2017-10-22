import React, { Component } from 'react';
import { H1 } from '../typography';
import { Main } from '../wrappers';

/**
 * <GameBoardCategory />
 */
class GameBoardCategory extends Component
{
    render() {
        return (
            <Main>
                <H1>{this.props.category.get('label')}</H1>
            </Main>
        );
    }
}

export default GameBoardCategory;
