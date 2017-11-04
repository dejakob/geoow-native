import React from 'react';
import Color from 'color';
import { View } from 'react-native';
import { createStyle, getStyle } from 'react-native-styler';
import ParallaxKeyboardAwareScrollView from 'react-native-keyboard-aware-parallax-scroll-view'; 
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
            paddingRight: '12w4s'
        },
        h2: {
            paddingTop: '10h4s'
        },
        p: {
            color: 'theme:subtext'
        }
    }
});

/**
 * <Level />
 */
function Level(props) {
    console.log('Level', props);

    const image = props.level.getIn(['info', 'pictures', 0]);

    if (!image) {
        return (
            <Main
                style={getStyle('level')}
            >
                <LevelContent
                    level={props.level}
                    color={props.color}
                />
            </Main>
        )
    }

    return (
        <Main
            style={getStyle('level')}
        >
            <ParallaxKeyboardAwareScrollView
                backgroundImage={{ uri: image.indexOf('http') === 0 ? image : `${API.URL}/${image}` }}
                imageHeight={160}
                onScroll={handleScroll}
            >
                <LevelContent
                    level={props.level}
                    color={props.color}
                />
            </ParallaxKeyboardAwareScrollView>
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
        </View>
    );
}

function LevelWiki(props) {
    const wiki = props.level.getIn(['info', 'wiki']);

    if (!wiki) {
        return null;
    }

    const intro = wiki.get('intro')
        .replace(/ {2,}/gi, '')
        .replace(/\n/gi, '')
        .substr(0, 300) + '...';

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
        </View>
    )
}

export default Level;
