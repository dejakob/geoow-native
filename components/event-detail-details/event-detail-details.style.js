import { createStyle } from 'react-native-styler';

createStyle({
    eventDetailDetails: {
        list: {
            paddingTop: '16h4s'
        },
        listItem: {
            flexDirection: 'row',
            paddingTop: '8h4s',

            type: {
                color: 'theme:primary',
                fontSize: 'theme:p',
                fontWeight: '600',
                width: '70w4s'
            },
            value: {
                color: 'theme:primary',
                fontSize: 'theme:p'
            }
        }
    }
});
