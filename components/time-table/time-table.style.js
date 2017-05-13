import { createStyle } from 'react-native-styler';

createStyle({
    timeTable: {
        container: {
            flex: 1,
            backgroundColor: 'theme:sheet',
            flexDirection: 'row'
        },
        column: {
            even: {
                flex: 1,
                backgroundColor: 'theme:sheet'
            },
            odd: {
                flex: 1,
                backgroundColor: 'theme:sheet2'
            }
        },
        headCell: {
            backgroundColor: 'theme:sheet',
            alignItems: 'center',
            justifyContent: 'center',
            height: '40h4s'
        }
    }
});
