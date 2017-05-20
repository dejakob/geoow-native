import { createStyle } from 'react-native-styler';

createStyle({
    scoreBadge: {
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
        }
    }
});
