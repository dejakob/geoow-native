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
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '4h4s',
            paddingBottom: '4h4s',
            paddingLeft: '24w4s',
            paddingRight: '24w4s',
            borderWidth: 1,
            borderColor: 'theme:primary',
            borderStyle: 'solid',
            borderRadius: '3h4s',

            text: {
                fontSize: '48h4s',
                fontWeight: '100',
                color: 'theme:primary'
            }
        }
    }
});
