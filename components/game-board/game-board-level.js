import Color from 'color';
import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { createStyle, getStyle } from 'react-native-styler';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'
import { ListItemCard } from '../cards';
import GameBoardGoal from './game-board-goal';

createStyle({
    gameBoardLevel: {
        flexDirection: 'row',
        alignItems: 'center',

        badge: {
            height: '60h4s',
            width: '60h4s',
            alignItems: 'center',
            justifyContent: 'center'
        },
        badgeText: {
            color: 'theme:primary',
            fontSize: '16h4s'
        },
        content: {
            padding: '12w4s',
            color: 'theme:text'
        },
        goal: {
            marginRight: '3w4s'
        }
    }
})


/**
 * <GameBoardLevel />
 * @param {Object} props 
 */
class GameBoardLevel extends Component {
    render() {
        const { props } = this;

        let badge = (
            <Text
                style={getStyle('gameBoardLevel__badgeText')}
            >
                {props.index}
            </Text>
        );

        if (props.level.get('locked')) {
            badge = (
                <SimpleLineIcon
                    name="lock"
                    color={StyleSheet.flatten(getStyle('gameBoardLevel__badgeText')).color}
                    size={StyleSheet.flatten(getStyle('gameBoardLevel__badgeText')).fontSize}    
                />
            );
        }

        const content = (
            <View style={[getStyle('gameBoardLevel'), props.level.get('locked') ? { opacity: 0.3 } : undefined]}>
                <View style={[getStyle('gameBoardLevel__badge'), { backgroundColor: Color(props.color).darken(0.5) }]}>
                    {badge}
                </View>
                <View style={getStyle('gameBoardLevel__content')}>
                    <Text
                        style={[getStyle('cards__listItemCard__title'), props.level.get('locked') ? { backgroundColor: StyleSheet.flatten(getStyle('gameBoardLevel__content')).color } : undefined]}
                    >
                        {props.level.get('title')}
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        {props.level.get('goals').map((goal, index) =>
                            <GameBoardGoal
                                goal={goal}
                                key={index}
                                tintColor={props.color}
                                style={getStyle('gameBoardLevel__goal')}
                            />
                        )}
                    </View>
                </View>
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
