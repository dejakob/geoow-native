import { createStyle } from 'react-native-styler';

createStyle({
    header: {
        backgroundColor: 'theme:headerBackground',
        paddingLeft: '8w4s',
        paddingRight: '8w4s',

        title: {
            fontWeight: '300',
            fontSize: 'theme:h2',
            color: 'theme:primary'
        }
    }
})