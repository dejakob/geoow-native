import React from 'react';
import { Text } from 'react-native';
import { createStyle, getStyle } from 'react-native-styler';

createStyle({
    typo: {
        h1: {
            fontSize: 'theme:h1',
            fontWeight: '600',
            color: 'theme:h1',
            width: '100%',
            textAlign: 'center',
            paddingBottom: '6h4s'
        },
        h2: {
            fontSize: 'theme:h1',
            color: 'theme:h1'
        },
        p: {
            fontSize: 'theme:h1',
            color: 'theme:h1'
        },
        em: {
            fontSize: 'theme:h1',
            color: 'theme:h1'
        }
    }
})

function TypoComponent(props) {
    return <Text {...props} style={[getStyle(props.__styleName), props.style]}></Text>;
}

const H1 = props => <TypoComponent {...props} __styleName={'typo__h1'} children={props.children.toUpperCase()} />;
const H2 = props => <TypoComponent {...props} __styleName={'typo__h2'} />;
const P = props => <TypoComponent {...props} __styleName={'typo__p'} />;
const EM = props => <TypoComponent {...props} __styleName={'typo__em'} />;

export {
    H1,
    H2,
    P,
    EM
}