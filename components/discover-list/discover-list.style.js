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
            padding: '10h4s',
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

        expansion: {
            marginLeft: '10h4s',
            marginRight: '10h4s',
            marginBottom: '10h4s',
            backgroundColor: 'theme:secondary',
            padding: 1,
            borderRadius: '3h4s',

            header: {
                marginBottom: '2h4s',
                paddingLeft: '6h4s',
                paddingRight: '6h4s',
                paddingBottom: '6h4s',
                paddingTop: '10h4s',
            },
            headerText: {
                color: 'theme:primary',
                fontWeight: '300',
                fontSize: 'theme:title'
            },
            footer: {
                alignItems: 'flex-end'
            }
        }
    }
});
