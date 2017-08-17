import { createStyle } from 'react-native-styler';

createStyle({
    partialModal: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: 'theme:darken',
        justifyContent: 'center',
        alignItems: 'center',

        content: {
            backgroundColor: 'theme:sheet',
            borderRadius: '6h4s',
            width: '80%',
            paddingBottom: '10h4s'
        }
    }
});
