import { createStyle } from 'react-native-styler';

createStyle({
    button: {
        primary: {
            touch: {
                flex: 1,
                height: '40h4s'
            },
            container: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'theme:primary',
                borderRadius: '20h4s'
            },
            text: {
                color: 'theme:background',
                textAlign: 'center',
                fontSize: 'theme:button'
            }
        }
    }
});
