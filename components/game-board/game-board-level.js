import React from 'react';
import { View } from 'react-native';
import { ListItemCard } from '../cards';
import GameBoardGoal from './game-board-goal';

/**
 * <GameBoardLevel />
 * @param {Object} props 
 */
function GameBoardLevel(props) {
    console.log('props.level.get(goals)', props.level.get('goals').toJS());

    const content = (
        <View style={{ flexDirection: 'row' }}>
            {props.level.get('goals').map((goal, index) =>
                <GameBoardGoal
                    goal={goal}
                    key={index}
                    tintColor={props.color}
                />
            )}
        </View>
    );

    return (
        <ListItemCard
            title={props.level.get('title')}
            content={content}
            tintColor={props.color}
        />
    )
}

export default GameBoardLevel;
