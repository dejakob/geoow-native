import { createStyle } from 'react-native-styler';

createStyle({
    directionsMap: {
        height: '100vh',
        width: '100vw',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,

        wrapper: {
            position: 'relative',
            height: '100vh',
            width: '100vw'
        },
        polygon: {
            color: 'theme:primary'
        }
    }
})