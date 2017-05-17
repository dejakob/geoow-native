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
            score: {
                color: 'theme:ok',
                fontSize: '18h4s',
                fontWeight: '600',
                margin: '10h4s'
            },
            badScore: {
                color: 'theme:notok',
                fontSize: '18h4s',
                fontWeight: '600',
                margin: '10h4s'
            },
            date: {
                fontSize: '10h4s',
                fontStyle: 'italic',
                color: 'theme:subtext'
            },
            footer: {
                flexDirection: 'row'
            },
            description: {
                flex: 1
            }
        }
    }
});
