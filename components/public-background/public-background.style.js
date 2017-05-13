import { createStyle } from 'react-native-styler';

createStyle({
    publicBackground: {
        container: {
            flex: 1,
            position: 'relative'
        },
        image: {
            height: '100vh',
            width: '100vw',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        },
        content: {
            flex: 1,
            backgroundColor: 'theme:backgroundTransparent'
        }
    }
});
