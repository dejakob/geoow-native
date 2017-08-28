import { createStyle } from 'react-native-styler';

createStyle({
    discoverListItem: {
        margin: '10h4s',
        flexDirection: 'column',

        top: {
            flexDirection: 'row',
            height: '70h4s',
            borderTopLeftRadius: '3h4s',
            borderTopRightRadius: '3h4s'
        },
        image: {
            backgroundColor: 'theme:secondary',
            height: '70h4s',
            width: '50%',
            borderTopLeftRadius: '3h4s'
        },
        staticMap: {
            backgroundColor: 'theme:secondary',
            height: '70h4s',
            width: '50%',
            borderTopRightRadius: '3h4s'
        },

        bottom: {
            flexDirection: 'row',
            padding: '10h4s',
            borderBottomColor: 'theme:border',
            borderBottomWidth: 1,
            borderLeftColor: 'theme:border',
            borderLeftWidth: 1,
            borderRightColor: 'theme:border',
            borderRightWidth: 1,
            borderBottomLeftRadius: '3h4s',
            borderBottomRightRadius: '3h4s',
        },
        name: {
            fontSize: 'theme:title',
            fontWeight: '600'
        }
    }
});
