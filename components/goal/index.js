import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { createStyle, getStyle } from 'react-native-styler';
import MapView from 'react-native-maps';
import Color from 'color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Main } from '../wrappers';
import * as BackgroundLocation from '../../services/background-location';

createStyle({
    goal: {
        header: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            paddingTop: '24h4s',
            paddingLeft: '12w4s',
            paddingRight: '12w4s',
            paddingBottom: '10h4s',

            title: {
                fontSize: '14h4s',
                fontWeight: '300',
                color: 'theme:primary',
            },
            description: {
                color: 'theme:primary',
                fontSize: '10h4s',
                fontWeight: '600'
            },
            closeButton: {
                position: 'absolute',
                top: '24h4s',
                right: '12w4s'
            }
        },
        primaryButton: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0
        },
        map: {
            height: '100vh',
            width: '100vw'
        }
    }
});

/**
 * Goal component
 */
function Goal(props) {
    const { goal, level } = props;
    const goalType = goal.get('goal_type');

    let content = null;
    let description = '';
    
    switch (goalType) {
        case 'VISIT':

            description = 'Visit the place on the map';
            content = (
                <GoalMap
                    goal={goal}
                    finishGoal={props.finishGoal}
                />
            );
    }

    return (
        <Main>
            {content}
            <GoalHeader
                level={level}
                color={props.color}
                description={description}
                onClose={props.onClose}
            />
        </Main>
    );
}

function GoalHeader(props) {
    return (
        <View
            style={[getStyle('goal__header'), { backgroundColor: Color(props.color).darken(0.5) }]}
        >
            <Text
                style={getStyle('goal__header__title')}
            >
                {props.level.get('title')}
            </Text>
            <Text
                style={getStyle('goal__header__description')}
            >
                {props.description}
            </Text>
            <View
                style={getStyle('goal__header__closeButton')}
            >
                <TouchableOpacity
                    onPress={props.onClose}
                >
                    <MaterialCommunityIcons
                        name="close" 
                        color={StyleSheet.flatten(getStyle('goal__header__title')).color}
                        size={StyleSheet.flatten(getStyle('goal__header__title')).fontSize * 2}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

class GoalMap extends React.Component {
    constructor() {
        super();

        this.handleLayout = this.handleLayout.bind(this);
        this.play = this.play.bind(this);
    }

    get latitude() {
        const { props } = this;
        const { goal } = props;

        return goal.getIn(['checkpoint', 'latitude']);
    }

    get longitude() {
        const { props } = this;
        const { goal } = props;

        return goal.getIn(['checkpoint', 'longitude']);
    }

    componentDidMount() {
        this.play();

        try {
            this.handleLayout();
        }
        catch (ex) {

        }

    }

    async play() {
        try {
            await BackgroundLocation.questTillLocation(this.latitude, this.longitude);
            this.props.finishGoal();
        }
        catch (ex) {

        }
    }

    handleLayout() {
        this.refs.map.animateToRegion({
            latitude: this.latitude,
            longitude: this.longitude,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0121,
        })
    }

    render() {        
        return (
            <MapView
                style={getStyle('goal__map')}
                provider="google"
                ref="map"
                onLayout={(e) => console.log('layout', this.refs.map)}
                showsUserLocation={true}
                showsMyLocationButton={true}
                initialRegion={{
                    latitude: this.latitude,
                    longitude: this.longitude,
                    latitudeDelta: 0.0222,
                    longitudeDelta: 0.0121,
                }}
            >
                <MapView.Marker
                    coordinate={{ latitude: this.latitude, longitude: this.longitude }}
                    title="Where you need to go"
                    description="Description"
                />
            </MapView>
        );
    }
    
}

export default Goal;
