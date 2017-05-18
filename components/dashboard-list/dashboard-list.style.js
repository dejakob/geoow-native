import { createStyle } from 'react-native-styler';

createStyle({
    dashboard: {
        listItem: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'theme:sheet',
            padding: '10h4s',

            scoreContainer: {
                borderRadius: '2h4s',
                backgroundColor: 'theme:okSoft',
                padding: '4h4s',
                width: '30h4s'
            },
            score: {
                color: 'theme:ok',
                fontSize: 'theme:p',
                fontWeight: '600',
                textAlign: 'center'
            },
            badScoreContainer: {
                borderRadius: '2h4s',
                backgroundColor: 'theme:notokSoft',
                padding: '3h4s',
                width: '30h4s'
            },
            badScore: {
                color: 'theme:notok',
                fontSize: 'theme:p',
                fontWeight: '600',
                textAlign: 'center'
            },
            dateContainer: {
                width: '100h4s'
            },
            date: {
                fontSize: 'theme:p',
                fontWeight: '600',
                color: 'theme:subtext',
                textAlign: 'center'
            },
            descriptionContainer: {
                flex: 1
            },
            description: {
                fontSize: 'theme:small'
            }
        }
    }
});
