import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { createStyle, getStyle } from 'react-native-styler';
import MapView from 'react-native-maps';
import Camera from 'react-native-camera';
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
        },
        camera: {
            flex: 1,

            wrapper: {
                flex: 1,
                position: 'relative'
            },

            bottomCenter: {
                width: '100vw',
                position: 'absolute',
                bottom: '30h4s',
                alignItems: 'center',
            },
            primaryAction: {
                height: '50h4s',
                width: '50h4s',
                borderRadius: '25h4s',
                borderWidth: 1,
                borderColor: 'theme:primary'
            }
        }
    }
});

/**
 * Goal component
 */
function Goal(props) {
    const { goal, goalIndex, level } = props;
    const goalType = goal.get('goal_type');

    console.log('goal type', goalType);

    let content = null;
    let description = '';
    
    switch (goalType) {
        case 'VISIT':

            description = 'Visit the place on the map';
            content = (
                <GoalMap
                    level={level}
                    goal={goal}
                    goalIndex={goalIndex}
                    finishGoal={props.finishGoal}
                />
            );

        case 'CAMERA_PICTURE':
        
            description = 'Selfie this!';
            content = (
                <GoalCameraPicture
                    level={level}
                    goal={goal}
                    goalIndex={goalIndex}
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
            alert('hooray');
            console.log('level', this.props.level)
            this.props.finishGoal(this.props.level.get('_id'), this.props.goalIndex);
        }
        catch (ex) {
            console.log('ex', ex);
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

class GoalCameraPicture extends React.Component {
    constructor() {
        super();

        this.takePicture = this.takePicture.bind(this);
    }

    async takePicture() {
        try {
            const data = await this.refs.camera.capture();
            console.log('data', data);
        }
        catch (ex) {
            console.log('ex', ex);
        }
    }

    render() {
        return (
            <View
                style={getStyle('goal__camera__wrapper')}
            >
                <Camera
                    style={getStyle('goal__camera')}
                    ref="camera"
                    captureMode={Camera.constants.CaptureMode.still}
                    captureTarget={Camera.constants.CaptureTarget.disk}
                    flashMode={Camera.constants.FlashMode.off}
                    torchMode={Camera.constants.TorchMode.off}
                    captureAudio={false}
                    mirrorImage={false}
                    fixOrientation={Platform.OS === 'ios'}
                />
                <View
                    style={getStyle('goal__camera__bottomCenter')}
                >
                    <TouchableOpacity
                        style={getStyle('goal__camera__primaryAction')}
                        onPress={this.takePicture}
                    ></TouchableOpacity>
                </View>    
            </View>
        );
    }
}

export default Goal;
