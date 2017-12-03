import React from 'react';
import { Text, View } from 'react-native';
import { createStyle, getStyle } from 'react-native-styler';
import Color from 'color';

createStyle({
    gameBoardGoal: {
        borderRadius: '2h4s',
        height: '18h4s',
        paddingLeft: '8h4s',
        paddingRight: '8h4s',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '8h4s',

        label: {
            fontSize: '10h4s'
        }
    }
});

function GameBoardGoal(props) {
    const { goal } = props;

    return (
        <View
            style={[getStyle('gameBoardGoal'), { backgroundColor: Color(props.tintColor).fade(0.7) }, props.style]}
        >
            <Text
                style={getStyle('gameBoardGoal__label')}
            >
                {getLabelByType(goal.get('goal_type'))}
            </Text>
        </View>
    );

    function getLabelByType(goalType) {
        switch (goalType) {
            case 'VISIT':
                return 'Visiting';

            case 'WALK':
                return 'Walking';

            case 'MEET':
                return 'Meeting people';

            default:
                return 'Surprise';
        }
    }
}

export default GameBoardGoal;
