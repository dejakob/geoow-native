import { createStyle } from 'react-native-styler';

createStyle({
    dashboardGraph: {
        count: {
            borderColor: 'theme:secondary',
            borderStyle: 'solid',
            borderWidth: 1,
            height: '72h4s',
            width: '72h4s',
            borderRadius: '12vh',
            alignItems: 'center',
            justifyContent: 'center',

            text: {
                fontSize: '48h4s',
                fontWeight: '100',
                backgroundColor: 'transparent',
                color: 'theme:secondary'
            }
        }
    }
})