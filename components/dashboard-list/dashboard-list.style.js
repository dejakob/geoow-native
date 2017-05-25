import { StyleSheet } from 'react-native'
import { createStyle } from 'react-native-styler';

createStyle({
    dashboard: {
        list: {
            paddingLeft: '8w4s',
            paddingRight: '8w4s',

            header: {
                paddingTop: '40h4s'
            }
        },

        listItem: {
            paddingTop: 0,
            paddingBottom: 0,
            margin: 0,
            alignItems: 'center',

            line: {
                color: 'theme:sheet2'
            },
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
            },
            badge: {
                position: 'absolute'
            }
        }
    }
});
