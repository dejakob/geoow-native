import { Dimensions } from 'react-native';
import { createStyle } from 'react-native-styler';

createStyle({
    discoverList: {
        paddingTop: '20h4s'
    },
    discoverListItem: {
        width: '280w4s',
        height: '280w4s',
        flexDirection: 'column',
        borderRadius: '3h4s',
        position: 'relative',

        top: {
            flex: 1,
            flexDirection: 'column',
            borderTopLeftRadius: '3h4s',
            borderTopRightRadius: '3h4s',
            overflow: 'hidden'
        },
        image: {
            backgroundColor: 'theme:secondary',
            flex: 1,
            borderTopLeftRadius: '3h4s',
            width: '280h4s'
        },

        bottom: {
            flexDirection: 'row',
            paddingRight: '10h4s',
            paddingTop: '10h4s',
            paddingBottom: '10h4s',
            paddingLeft: '80h4s',
            backgroundColor: 'theme:sheet',
            borderBottomColor: 'theme:border',
            borderBottomWidth: 1,
            borderBottomLeftRadius: '3h4s',
            borderBottomRightRadius: '3h4s',
        },
        name: {
            fontSize: 'theme:title',
            fontWeight: '600'
        },
        avatar: {
            height: '66h4s',
            width: '66h4s',
            borderRadius: '33h4s',
            position: 'absolute',
            bottom: '16h4s',
            left: '10h4s'
        },
    }
});
