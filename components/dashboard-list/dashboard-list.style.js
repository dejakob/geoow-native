import { StyleSheet } from 'react-native'
import { createStyle } from 'react-native-styler';

createStyle({
    dashboard: {
        list: {
            flexDirection: 'column',
            flex: 1,
            paddingLeft: '4h4s',
            paddingRight: '4h4s'
        },

        listItem: {
            flexDirection: 'row',
            backgroundColor: 'theme:sheet',
            borderRadius: '3h4s',
            overflow: 'hidden',
            margin: '4h4s',

            header: {
                position: 'relative',
                height: '70h4s',
                width: '100h4s',

                image: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: '100h4s',
                    width: '100%'
                },
                overlay: {
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',

                    ok: {
                        backgroundColor: 'theme:okOpacity'
                    },
                    notok: {
                        backgroundColor: 'theme:notokOpacity'
                    }
                },
                score: {
                    color: 'theme:sheet',
                    fontSize: '24h4s',
                    fontWeight: '100'
                }
            },
            date: {
                fontSize: 'theme:small',
                fontWeight: '600',
                textAlign: 'center',
                color: 'theme:subtext',
            },
            descriptionContainer: {
                flex: 1,
                backgroundColor: 'theme:lighten8',
                paddingLeft: '4w4s',
                paddingRight: '4w4s',
                borderRadius: '2h4s',
                justifyContent: 'space-around'
            },
            description: {
                fontSize: 'theme:small',
                textAlign: 'center'
            }
        }
    }
});
