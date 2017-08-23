import { createStyle } from 'react-native-styler';

createStyle({
    discoverMap: {
        width: '100vw',
        height: '200h4s',

        callout: {
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: '2h4s',
            marginBottom: '3h4s',
            backgroundColor: 'theme:sheet',

            image: {
                height: '30h4s',
                width: '30h4s'
            },
            text: {
                color: 'theme:subtext',
                paddingLeft: '6w4s',
                paddingRight: '6w4s',
            }
        }
    }
});
