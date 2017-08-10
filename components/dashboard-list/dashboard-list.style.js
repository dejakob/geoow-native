import { StyleSheet } from 'react-native'
import { createStyle } from 'react-native-styler';

createStyle({
    dashboard: {
        list: {
            flexDirection: 'column',
            flex: 1,
            position: 'relative'
        },

        listItem: {
            flexDirection: 'row',
            backgroundColor: 'theme:sheet',
            overflow: 'hidden',
            minHeight: '50h4s',

            line: {
                width: 1,
                backgroundColor: 'theme:lightBorder',
                left: '24h4s',
                top: 0,
                bottom: 0,
                position: 'absolute'
            },
            dot: {
                height: '6h4s',
                width: '6h4s',
                borderRadius: '3h4s',
                backgroundColor: 'theme:secondary',
                position: 'absolute',
                top: '21h4s',
                left: '21h4s'
            },
            date: {
                fontSize: 'theme:small',
                fontWeight: '600',
                textAlign: 'center',
                color: 'theme:subtext',
            },
            descriptionContainer: {
                flex: 1,
                backgroundColor: 'theme:lighten8',
                paddingLeft: '4w4s',
                paddingRight: '4w4s',
                borderRadius: '2h4s',
                justifyContent: 'space-around'
            },
            description: {
                fontSize: 'theme:small',
                textAlign: 'center'
            }
        }
    }
});
