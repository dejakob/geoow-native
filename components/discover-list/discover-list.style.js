import { Dimensions } from 'react-native';
import { createStyle } from 'react-native-styler';

createStyle({
    discoverList: {
        paddingTop: '20h4s'
    },
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
            paddingBottom: '3h4s',
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
