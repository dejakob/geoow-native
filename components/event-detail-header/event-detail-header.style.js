import { createStyle } from 'react-native-styler';

createStyle({
    eventDetailHeader: {
        position: 'relative',
        height: '200h4s',

        background: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'theme:background'
        },
        content: {
            flexDirection: 'row',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'theme:lighten8',

            logo: {
                height: '50h4s',
                width: '50h4s',
                borderRadius: '25h4s',
                margin: '8h4s'
            }
        }
    }
});
