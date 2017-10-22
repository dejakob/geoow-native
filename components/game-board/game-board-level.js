import React from 'react';
import { ListItemCard } from '../cards';

/**
 * <GameBoardLevel />
 * @param {Object} props 
 */
function GameBoardLevel(props) {
    console.log('goals', props.level.get('goals').toJS());

    return (
        <ListItemCard
            title={props.level.get('title')}
            tintColor={props.color}
        />
    )
}

export default GameBoardLevel;
