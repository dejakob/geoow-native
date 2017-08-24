import { Platform } from 'react-native';
import { createStyle } from 'react-native-styler';

createStyle({
    eventDetailHeader: {
        flexDirection: 'row',
        backgroundColor: Platform.OS === 'ios' ? 'theme:secondary80' : 'theme:lighten',
        alignItems: 'center',
        borderTopLeftRadius: '3h4s',
        borderTopRightRadius: '3h4s',

        wrapper: {
            marginLeft: '20w4s',
            marginRight: '20w4s',
            marginTop: '22h4s'
        },
        logo: {
            height: '50h4s',
            width: '50h4s',
            borderRadius: '25h4s',
            margin: '8h4s'
        },
        description: {
            flex: 1
        },
        title: {
            fontWeight: '600',
            fontSize: 'theme:p',
            color: Platform.OS === 'ios' ? 'theme:primary' : 'theme:text'
        },
        venueTitle: {
            fontSize: 'theme:small',
            color: Platform.OS === 'ios' ? 'theme:primary' : 'theme:text'
        },
        bottom: {
            backgroundColor: 'theme:sheet',
            borderBottomLeftRadius: '3h4s',
            borderBottomRightRadius: '3h4s',
            alignItems: 'center',
            flexDirection: 'row',
            padding: '8h4s',
            justifyContent: 'space-between'
        }
    },
    eventDetailFooter: {
        position: 'absolute',
        bottom: '20h4s',
        left: 0,
        right: 0,

        danger: {
            marginRight: '16w4s',
            width: '100w4s'
        }
    }
});
