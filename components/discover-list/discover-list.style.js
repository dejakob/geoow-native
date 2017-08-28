import { Dimensions } from 'react-native';
import { createStyle } from 'react-native-styler';

createStyle({
    discoverListItem: {
        marginLeft: '10h4s',
        marginRight: '10h4s',
        marginBottom: '10h4s',
        flexDirection: 'column',
        borderRadius: '3h4s',

        top: {
            flexDirection: 'row',
            height: '100h4s',
            borderTopLeftRadius: '3h4s',
            borderTopRightRadius: '3h4s',
            overflow: 'hidden'
        },
        image: {
            backgroundColor: 'theme:secondary',
            height: '100h4s',
            width: '50%',
            borderTopLeftRadius: '3h4s'
        },
        staticMap: {
            backgroundColor: 'theme:secondary',
            height: '100h4s',
            width: '50%',
            maxWidth: Dimensions.get('window').width / 2,
            borderTopRightRadius: '3h4s'
        },

        bottom: {
            flexDirection: 'row',
            padding: '10h4s',
            backgroundColor: 'theme:sheet2',
            borderBottomColor: 'theme:border',
            borderBottomWidth: 1,
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
