import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { createStyle, getStyle } from 'react-native-styler';
import { ListItemCard } from '../cards';
import GameBoardGoal from './game-board-goal';


/**
 * <GameBoardLevel />
 * @param {Object} props 
 */
class GameBoardLevel extends Component {
    render() {
        const { props } = this;

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
        );
    }
}

export default GameBoardLevel;
