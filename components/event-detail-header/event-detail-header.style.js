import { createStyle } from 'react-native-styler';

createStyle({
    eventDetailHeader: {
        content: {
            flexDirection: 'row',
            backgroundColor: 'theme:lighten',
            alignItems: 'center',
            marginLeft: '20w4s',
            marginRight: '20w4s',
            marginTop: '22h4s',
            borderRadius: '3h4s',

            logo: {
                height: '50h4s',
                width: '50h4s',
                borderRadius: '25h4s',
                margin: '8h4s'
            }
        },
        description: {
            flex: 1
        },
        title: {
            fontWeight: '600',
            fontSize: 'theme:p'
        },
        venueTitle: {
            fontSize: 'theme:small'
        }
    }
});
