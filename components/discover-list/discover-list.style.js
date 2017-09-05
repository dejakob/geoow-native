import { Dimensions } from 'react-native';
import { createStyle } from 'react-native-styler';

createStyle({
    discoverList: {
        paddingTop: '20h4s'
    },
    discoverListItem: {
        width: '280w4s',
        height: '340w4s',
        flexDirection: 'column',
        borderRadius: '3h4s',
        position: 'relative',

        creditsWell: {
            backgroundColor: 'theme:okSoft',
            marginBottom: '10h4s',
            padding: '4h4s',
            borderRadius: '2h4s',
            color: 'theme:primary',

            text: {
                textAlign: 'center',
                fontWeight: '600',
                color: 'theme:okDark'
            }
        },

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
            height: '70h4s',
            flexDirection: 'column',
            paddingRight: '10h4s',
            paddingTop: '10h4s',
            paddingBottom: '10h4s',
            backgroundColor: 'theme:sheet',
            borderBottomColor: 'theme:border',
            borderBottomWidth: 1,
            borderBottomLeftRadius: '3h4s',
            borderBottomRightRadius: '3h4s',
        },
        details: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '8h4s'
        },
        distance: {
            color: 'theme:subtext',
            fontSize: '11h4s',

            wrapper: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '78h4s',
            }
        },
        time: {
            color: 'theme:subtext',
            fontSize: '11h4s',
            paddingLeft: '4h4s',

            wrapper: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
                flex: 1
            }
        },
        name: {
            fontSize: 'theme:title',
            fontWeight: '600',
            height: '28h4s',
            maxHeight: '28h4s',
            paddingLeft: '80h4s',
        },
        avatar: {
            height: '56h4s',
            width: '56h4s',
            borderRadius: '28h4s',
            position: 'absolute',
            bottom: '36h4s',
            left: '10h4s'
        },
    }
});
