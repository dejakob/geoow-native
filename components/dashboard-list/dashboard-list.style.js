import { StyleSheet } from 'react-native'
import { createStyle } from 'react-native-styler';

createStyle({
    dashboard: {
        list: {
            flexDirection: 'row',
            flex: 1,
            paddingTop: '30h4s',

            header: {
                paddingTop: '40h4s'
            },
            column: {
                flexDirection: 'column',
                width: '50%'
            }
        },

        listItem: {
            backgroundColor: 'theme:sheet',
            borderRadius: '3h4s',
            margin: '4h4s',

            date: {
                fontSize: 'theme:small',
                fontWeight: '600',
                fontStyle: 'italic',
                textAlign: 'right',
                color: 'theme:subtext',
            },
            descriptionContainer: {
                backgroundColor: 'theme:lighten8',
                padding: '4w4s',
                borderRadius: '2h4s'
            },
            description: {
                fontSize: 'theme:small',
                textAlign: 'center'
            }
        }
    }
});
