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
            borderRadius: '25h4s',
            alignItems: 'center',
            justifyContent: 'center',

            text: {
                fontSize: '48h4s',
                fontWeight: '100',
                color: 'theme:primary'
            }
        }
    }
});
