import { createStyle } from 'react-native-styler';

createStyle({
    dashboard: {
        listItem: {
            backgroundColor: 'theme:sheet',
            padding: '10h4s',

            content: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            },
            footer: {
                flexDirection: 'row'
            }
        }
    }
});
