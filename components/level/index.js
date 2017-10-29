import React from 'react';
import { View } from 'react-native';
import { createStyle, getStyle } from 'react-native-styler';
import ParallaxKeyboardAwareScrollView from 'react-native-keyboard-aware-parallax-scroll-view'; 
import { Main } from '../wrappers';
import { Title } from '../typography';

createStyle({
    level: {
        backgroundColor: 'theme:sheet',

        section: {
            backgroundColor: 'theme:sheet',
            paddingTop: '12w4s',
            paddingLeft: '12w4s',
            paddingRight: '12w4s'
        }
    }
});

/**
 * <Level />
 */
function Level(props) {
    return (
        <Main
            style={getStyle('level')}
        >
            <ParallaxKeyboardAwareScrollView
                backgroundImage={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Amsterdam_%28NL%29%2C_Anne-Frank-Huis_--_2015_--_7185.jpg/1920px-Amsterdam_%28NL%29%2C_Anne-Frank-Huis_--_2015_--_7185.jpg' }}
                imageHeight={160}
                onScroll={props.onScroll}
            >
                <View
                    style={getStyle('level__section')}
                >
                    <Title>
                        {props.level.get('title')}
                    </Title>
                </View>
            </ParallaxKeyboardAwareScrollView>
        </Main>
    );
}

export default Level;
