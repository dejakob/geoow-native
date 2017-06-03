import { StyleSheet } from 'react-native'
import { createStyle } from 'react-native-styler';

createStyle({
    dashboard: {
        list: {
            flexDirection: 'row',
            flex: 1,
            paddingTop: '8h4s',
            paddingLeft: '4h4s',
            paddingRight: '4h4s',

            header: {
                paddingTop: '40h4s'
            },
            column: {
                flexDirection: 'column',
                width: '50%'
            }
        },

        listItem: {
            backgroundColor: 'theme:sheet',
            borderRadius: '3h4s',
            overflow: 'hidden',
            margin: '4h4s',

            header: {
                position: 'relative',
                height: '100h4s',

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
                    fontSize: '36h4s',
                    fontWeight: '100'
                }
            },
            date: {
                fontSize: 'theme:small',
                fontWeight: '600',
                textAlign: 'center',
                color: 'theme:subtext',
                marginBottom: '8h4s'
            },
            descriptionContainer: {
                backgroundColor: 'theme:lighten8',
                paddingLeft: '4w4s',
                paddingRight: '4w4s',
                paddingTop: '8h4s',
                paddingBottom: '8h4s',
                borderRadius: '2h4s'
            },
            description: {
                fontSize: 'theme:small',
                textAlign: 'center'
            }
        }
    }
});
