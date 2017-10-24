import React from 'react';
import { ListItemCard } from '../cards';

/**
 * <GameBoardLevel />
 * @param {Object} props 
 */
function GameBoardLevel(props) {

    const goalsDescription = 'Goals:\n' + props.level.get('goals').map(goal => {
        switch (goal.get('goal_type')) {
            case 'VISIT':
                return '* Visit a place';

            case 'WALK':
                return '* Walk';

            case 'MEET':
                return '* Meet someone';    

            default:
                return '';
        }
    }).join('\n')

    

    return (
        <ListItemCard
            title={props.level.get('title')}
            content={goalsDescription}
            tintColor={props.color}
        />
    )
}

export default GameBoardLevel;
