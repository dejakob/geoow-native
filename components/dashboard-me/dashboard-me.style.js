import { StyleSheet } from 'react-native';
import { createStyle } from 'react-native-styler';

createStyle({
    dashboardMe: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '150h4s',
        paddingBottom: '20h4s',
        backgroundColor: 'theme:background',

        score: {
            height: '50h4s',
            width: '50h4s',
            borderRadius: '25h4s',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: 'theme:primary',
            borderStyle: 'solid',

            text: {
                fontSize: '16h4s',
                color: 'theme:primary'
            }
        }
    }
});
