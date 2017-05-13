import React from 'react';
import { View } from 'react-native';
import { getStyle } from 'react-native-styler';
import './footer.style';

/**
 * <Footer />
 * @constructor
 */
function Footer(props) {
    return (
        <View
            style={getStyle('footer')}
        >
            {props.children}
        </View>
    );
}

export default Footer;
