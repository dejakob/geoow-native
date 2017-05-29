import { StyleSheet } from 'react-native';
import { createStyle } from 'react-native-styler';

createStyle({
    dashboardMe: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '40h4s',
        paddingLeft: '8h4s',
        paddingRight: '8h4s',

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
            flex: 1,
            marginRight: '16w4s',

            text: {
                fontSize: '48h4s',
                fontWeight: '100',
                color: 'theme:primary'
            }
        },
        cameraIcon: {
            color: 'theme:primary',
            fontSize: '48h4s'
        }
    }
});
