import React from 'react';
import Color from 'color';
import { View, FlatList, Image, StyleSheet, Text, TouchableOpacity, Linking } from 'react-native';
import { createStyle, getStyle } from 'react-native-styler';
import ParallaxKeyboardAwareScrollView from 'react-native-keyboard-aware-parallax-scroll-view'; 
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Footer from '../footer/footer';
import PrimaryButton from '../button/primary-button';
import Goal from '../goal';
import { getStaticMapUrl } from '../../services/directions';
import { goBack } from '../modalized-list';
import { Main } from '../wrappers';
import { Title, P, H2 } from '../typography';
import { API } from '../../constants';

createStyle({
    level: {
        backgroundColor: 'theme:sheet',

        section: {
            backgroundColor: 'theme:sheet',
            paddingTop: '12w4s',
            paddingLeft: '12w4s',
            paddingRight: '12w4s',
            paddingBottom: '60h4s'
        },
        h2: {
            paddingTop: '20h4s'
        },
        p: {
            color: 'theme:subtext'
        },
        link: {
            fontSize: '12h4s',
            textAlign: 'right',
            padding: '6h4s'
        },
        goal: {
            flexDirection: 'row',
            justifyContent: 'center',   
            paddingTop: '6h4s',
            paddingBottom: '6h4s',

            map: {
                height: '50h4s',
                width: '50h4s',
                borderRadius: '25h4s'
            },
            iconBg: {
                height: '50h4s',
                width: '50h4s',
                borderRadius: '25h4s',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1
            },
            icon: {
                fontSize: '16h4s'
            },
            description: {
                flex: 1,
                justifyContent: 'center',
                paddingLeft: '6w4s',

                text: {
                    fontSize: '14h4s',
                    color: 'theme:subtext',
                    textAlign: 'left',
                    fontWeight: '300'
                }
            }
        },
        primaryButton: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            
            text: {
                color: 'theme:primary'
            }
        }
    }
});

class StatedLevel extends React.Component {
    constructor() {
        super();

        this.setActiveGoal = this.setActiveGoal.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
        
    componentWillMount() {
        this.state = {
            activeGoal: null,
            activeGoalIndex: -1
        };
    }

    render() {
        if (this.state.activeGoal) {
            return (
                <Goal
                    {...this.props}
                    level={this.props.level}
                    goal={this.state.activeGoal}
                    goalIndex={this.state.activeGoalIndex}
                    onClose={this.handleClose}
                    color={this.props.color}
                />
            );
        }

        return (
            <Level
                {...this.props}
                setActiveGoal={this.setActiveGoal}
            />
        );
    }

    handleClose() {
        this.setState({ activeGoal: null });
    }

    setActiveGoal(goalIndex) {
        this.setState({
            activeGoal: this.props.level.getIn(['goals', goalIndex]),
            activeGoalIndex: goalIndex
        });
    }
}

/**
 * <Level />
 */
function Level(props) {
    const parallaxProps = {
        imageHeight: 160,
        onScroll: handleScroll
    };

    const image = props.level.getIn(['info', 'pictures', 0]);

    if (image) {
        parallaxProps.backgroundImage = { uri: image.indexOf('http') === 0 ? image : `${API.URL}/${image}` };
    }
    else {
        parallaxProps.background = () => <View style={{ flex: 1, backgroundColor: props.color }}></View>;
    }

    return (
        <Main
            style={getStyle('level')}
        >
            <ParallaxKeyboardAwareScrollView
                {...parallaxProps}
            >
                <LevelContent
                    level={props.level}
                    color={props.color}
                />
            </ParallaxKeyboardAwareScrollView>
            
            <Footer
                style={getStyle('level__primaryButton')}
            >
                <PrimaryButton
                    onPress={() => props.setActiveGoal(0)}
                    containerStyle={{ backgroundColor: Color(props.color).darken(0.3) }}
                    textStyle={getStyle('level__primaryButton__text')}
                >
                    Do it!
                </PrimaryButton>
            </Footer>
        </Main>
    );

    function handleScroll(eventData) {
        if (eventData.nativeEvent.contentOffset.y < -100) {
            goBack();
        }
    }
}

function LevelContent(props) {
    return (
        <View
            style={getStyle('level__section')}
        >
            <Title
                style={{ color: Color(props.color).darken(0.3) }}
            >
                {props.level.get('title')}
            </Title>

            <LevelDescription
                level={props.level}
                color={props.color}
            />

            <LevelWiki
                level={props.level}
                color={props.color}
            />
        </View>
    );
}

function LevelDescription(props) {
    return (
        <View>
            <H2
                style={[getStyle('level__h2'), { color: Color(props.color).darken(0.5) }]}
            >
                The challenge
            </H2>
            {props.level.get('goals').map(goal => <LevelGoal goal={goal} color={props.color} />)}
        </View>
    );
}

function LevelGoal(props) {
    const { goal } = props;
    const goalType = goal.get('goal_type');

    switch (goalType) {
        case 'VISIT':
            const latitude = goal.getIn(['checkpoint', 'latitude']);
            const longitude = goal.getIn(['checkpoint', 'longitude']);
            const imageUri = getStaticMapUrl(
                latitude,
                longitude,
                StyleSheet.flatten(getStyle('level__goal__map')).height,
                StyleSheet.flatten(getStyle('level__goal__map')).width
            );

            return (
                <View
                    style={getStyle('level__goal')}
                >
                    <Image
                        style={getStyle('level__goal__map')}
                        source={{ uri: imageUri }}
                    />
                    <View
                        style={getStyle('level__goal__description')}
                    >
                        <Text
                            style={getStyle('level__goal__description__text')}
                        >
                            Discover a new spot in the city
                        </Text>
                    </View>
                </View>
            );

        case 'CAMERA_PICTURE':
            return (
                <View
                    style={getStyle('level__goal')}
                >
                    <View
                        style={[getStyle('level__goal__iconBg'), { borderColor: props.color }]}
                    >
                        <MaterialCommunityIcon
                            name="camera"
                            size={StyleSheet.flatten(getStyle('level__goal__icon')).fontSize}
                            color={props.color}
                        />
                    </View>
                    <View
                        style={getStyle('level__goal__description')}
                    >
                        <Text
                            style={getStyle('level__goal__description__text')}
                        >
                            Take a picture to memorize
                        </Text>
                    </View>
                </View>
            );    
    }

    return null;
}

function LevelWiki(props) {
    const wiki = props.level.getIn(['info', 'wiki']);

    if (!wiki) {
        return null;
    }

    const intro = wiki.get('intro')
        .replace(/ {2,}/gi, '')
        .replace(/\n/gi, '')
        .substr(0, 500) + '...';

    return (
        <View>
            <H2
                style={[getStyle('level__h2'), { color: Color(props.color).darken(0.5) }]}
            >
                More information
            </H2>
            <P
                style={getStyle('level__p')}
            >
                {intro}
            </P>
            <TouchableOpacity
                onPress={() => Linking.openURL(wiki.get('source'))}
            >
                <Text
                    style={[getStyle('level__link'), { color: Color(props.color).darken(0.5) }]}
                >
                    Read more...
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default StatedLevel;
