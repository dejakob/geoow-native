import { createStyle } from 'react-native-styler';

createStyle({
    dashboardMe: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '200h4s',
        paddingBottom: '20h4s',
        backgroundColor: 'theme:background',

        firstName: {
            fontSize: 'theme:h2',
            fontWeight: '100',
            color: 'theme:primary',
            marginTop: '16h4s'
        }
    }
});