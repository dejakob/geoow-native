import { StyleSheet, Dimensions } from 'react-native';
import { createStyle } from 'react-native-styler';

const window = Dimensions.get('window');

createStyle({
    dashboard: {
        list: {
            flex: 1,
            position: 'relative',
            backgroundColor: 'theme:sheet'
        },

        listItem: {
            backgroundColor: 'theme:sheet',
            marginBottom: '20h4s',

            details: {
                padding: '10h4s',
                backgroundColor: 'theme:sheet2'
            },
            bottom: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-end'
            },
            date: {
                color: 'theme:subtext',
                fontWeight: '300'
            }
        },

        listItemMedia: {
            image: {
                backgroundColor: 'theme:sheet3',
                height: '120h4s',
            }
        }
    }
});
