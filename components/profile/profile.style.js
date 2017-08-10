import { createStyle } from 'react-native-styler';

createStyle({
    profile: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'theme:sheet2',

        sousHeader: {
            height: '150h4s',
            width: '100vw',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',

            backgroundImage: {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,

                img: {
                    flex: 1
                }
            },
            overlay: {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'theme:secondary80'
            }
        }
    }
});