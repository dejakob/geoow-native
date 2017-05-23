import { StyleSheet } from 'react-native'
import { createStyle } from 'react-native-styler';

createStyle({
    listSeparator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'theme:border',
        width: '100%'
    }
});
