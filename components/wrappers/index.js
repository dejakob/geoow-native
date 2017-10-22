import React from 'react';
import { View } from 'react-native';
import { createStyle, getStyle } from 'react-native-styler';

createStyle({
    wrapper: {
        main: {
            flex: 1,
            paddingTop: '24h4s',
            paddingLeft: '12w4s',
            paddingRight: '12w4s',
            paddingBottom: '12h4s'
        }
    }
})

function WrapperComponent(props) {
    return <View {...props} style={[getStyle(props.__styleName), props.style]}></View>;
}

const Main = props => <WrapperComponent {...props} __styleName={'wrapper__main'} />;

export {
    Main
}