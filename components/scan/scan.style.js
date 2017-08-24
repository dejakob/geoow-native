import { createStyle } from 'react-native-styler';

createStyle({
    scan: {
        wrapper: {
            backgroundColor: '#000000',
            position: 'relative',
            flex: 1
        },
        camera: {
            flex: 1
        },
        footer: {
            position: 'absolute',
            bottom: '22h4s',
            left: 0,
            right: 0,
            height: '50h4s',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',

            back: {
                backgroundColor: 'transparent'
            },

            primary: {
                borderRadius: '25h4s',
                height: '50h4s',
                width: '50h4s',
                borderColor: 'theme:primary',
                borderWidth: 1,
                borderStyle: 'solid'
            }
        },
        overlay: {
            position: 'absolute',
            backgroundColor: 'theme:secondary80',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center'
        }
    }
});
