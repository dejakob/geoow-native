import { createStyle } from 'react-native-styler';

createStyle({
    categoryList: {
        flex: 1,
        width: '100%'
    },
    categoryListItem: {
        checkIcon: {
            height: '22h4s',
            color: 'theme:ok'
        },
        checkIconStyle: {
            position: 'absolute',
            left: '16w4s'
        },
        backgroundImage: {
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100h4s',
            width: '120%'
        },
        overlay: {
            backgroundColor: 'theme:darken',
            position: 'absolute',
            flex: 1,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center'
        },
        text: {
            color: 'theme:primary',
            fontSize: '24h4s',
            fontWeight: '100'
        }
    }
});
