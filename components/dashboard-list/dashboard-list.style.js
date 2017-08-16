import { StyleSheet, Dimensions } from 'react-native';
import { createStyle } from 'react-native-styler';

const window = Dimensions.get('window');

createStyle({
    dashboard: {
        list: {
            flex: 1,
            position: 'relative'
        },

        listItem: {
            flexDirection: 'row',
            backgroundColor: 'theme:sheet',
            overflow: 'hidden',
            minHeight: '50h4s',
            borderBottomColor: 'theme:lightBorder',
            borderBottomWidth: 1,

            line: {
                width: 1,
                backgroundColor: 'theme:lightBorder',
                left: '16h4s',
                top: 0,
                bottom: 0,
                position: 'absolute'
            },
            dot: {
                height: '6h4s',
                width: '6h4s',
                borderRadius: '3h4s',
                backgroundColor: 'theme:secondary',
                position: 'absolute',
                top: '21h4s',
                left: '14h4s'
            },
            content: {
                flex: 1,
                flexDirection: 'row',
                paddingLeft: '22h4s',
                paddingRight: '32h4s',
                paddingTop: '13h4s',
                paddingBottom: '13h4s',

                day: {
                    color: 'theme:secondary',
                    fontWeight: '600',
                    fontSize: '14h4s'
                },
                hour: {
                    fontSize: '10h4s',
                    color: 'theme:subtext',
                    fontWeight: '300'
                },
                descScore: {
                    marginLeft: '22h4s',
                    marginRight: '22h4s'
                },
                description: {
                    fontSize: '10h4s',
                    color: 'theme:subtext',
                    fontWeight: '300',
                    paddingTop: '10h4s',
                    paddingBottom: '10h4s'
                }
            },
        },

        listItemMedia: {
            image: {
                backgroundColor: 'theme:sheet2',
                borderRadius: '3h4s',
                height: '100h4s',
            }
        }
    }
});
