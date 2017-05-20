import { createStyle } from 'react-native-styler';

createStyle({
    dashboard: {
        list: {
            backgroundColor: 'theme:secondary'
        },
        listItem: {
            paddingTop: 0,
            paddingBottom: 0,
            margin: 0,
            alignItems: 'center',
            backgroundColor: 'theme:sheet2',
            paddingLeft: '4w4s',
            paddingRight: '4w4s',
            marginLeft: '4w4s',
            marginRight: '4w4s',
            borderRadius: '2h4s',

            line: {
                color: 'theme:sheet2'
            },
            date: {
                fontSize: 'theme:p',
                fontWeight: '600',
                color: 'theme:subtext',
                textAlign: 'center'
            },
            descriptionContainer: {
                flex: 1,
                borderBottomWidth: 0
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
