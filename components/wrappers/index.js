import React from 'react';
import { View } from 'react-native';
import { createStyle, getStyle } from 'react-native-styler';

createStyle({
    wrapper: {
        main: {
            flex: 1,
            position: 'relative'
        },
        center: {
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
        }
    }
})

function WrapperComponent(props) {
    return <View {...props} style={[getStyle(props.__styleName), props.style]}></View>;
}

const Main = props => <WrapperComponent {...props} __styleName={'wrapper__main'} />;
const Center = props => <WrapperComponent {...props} __styleName={'wrapper__center'} />;

export {
    Main,
    Center
}