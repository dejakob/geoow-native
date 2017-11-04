import React from 'react';
import Color from 'color';
import { View, FlatList, Image, StyleSheet, Text, TouchableOpacity, Linking } from 'react-native';
import { createStyle, getStyle } from 'react-native-styler';
import ParallaxKeyboardAwareScrollView from 'react-native-keyboard-aware-parallax-scroll-view'; 
import Footer from '../footer/footer';
import PrimaryButton from '../button/primary-button';
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

            map: {
                height: '70h4s',
                width: '70h4s',
                borderRadius: '35h4s'
            },
            description: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',

                text: {
                    fontSize: '18h4s',
                    color: 'theme:subtext',
                    textAlign: 'center',
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

/**
 * <Level />
 */
function Level(props) {
    console.log('Level', props);

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
                    onPress={() => { console.log('START') }}
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
            {props.level.get('goals').map(LevelGoal)}
        </View>
    );
}

function LevelGoal(goal) {
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
            )
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

export default Level;
