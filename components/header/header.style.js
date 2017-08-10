import { createStyle } from 'react-native-styler';

createStyle({
    header: {
        backgroundColor: 'theme:headerBackground',
        paddingLeft: '8w4s',
        paddingRight: '8w4s',

        title: {
            fontWeight: '300',
            fontSize: 'theme:title',
            color: 'theme:primary'
        },

        icon: {
            color: 'theme:primary',
            fontSize: 'theme:h2'
        }
    },

    headerCredits: {
        flexDirection: 'row',
        alignItems: 'center',

        coinsIcon: {
            color: 'theme:primary',
            fontSize: '12h4s'
        },
        payIcon: {
            color: 'theme:primary',
            fontSize: '22h4s'
        },
        score: {
            color: 'theme:primary',
            paddingLeft: '8w4s',
            paddingRight: '8w4s'
        }
    }
});
