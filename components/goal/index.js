import React from 'react';
import { Text, View } from 'react-native';
import { createStyle, getStyle } from 'react-native-styler';
import MapView from 'react-native-maps';
import Color from 'color';
import { Main } from '../wrappers';

createStyle({
    goal: {
        header: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            paddingTop: '12h4s',
            color: 'theme:primary'
        },
        map: {
            height: '100vh',
            width: '100vw'
        }
    }
})

/**
 * Goal component
 */
function Goal(props) {
    const { goal, level } = props;
    const goalType = goal.get('goal_type');

    let content = null;
    
    switch (goalType) {
        case 'VISIT':

            content = (
                <GoalMap
                    goal={goal}
                />
            );
    }

    return (
        <Main>
            <GoalHeader
                level={level}
                color={props.color}
            />
            {content}
        </Main>
    );
}

function GoalHeader(props) {
    return (
        <View
            style={[getStyle('goal__header'), { backgroundColor: Color(props.color).darken(0.3) }]}
        >
            <Text>{props.level.get('title')}</Text>
        </View>
    );
}

function GoalMap(props) {
    const { goal } = props;
    const latitude = goal.getIn(['checkpoint', 'latitude']);
    const longitude = goal.getIn(['checkpoint', 'longitude']);

    return (
        <MapView
            style={getStyle('goal__map')}
            provider="google"
            initialRegion={{
                latitude,
                longitude,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
            }}
        >
            <MapView.Marker
                coordinate={{ latitude, longitude }}
                title="Where you need to go"
                description="Description"
            />
        </MapView>
    );
}

export default Goal;
