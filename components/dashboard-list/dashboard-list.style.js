import { StyleSheet, Dimensions } from 'react-native';
import { createStyle } from 'react-native-styler';

const window = Dimensions.get('window');

createStyle({
    dashboard: {
        list: {
            flex: 1,
            position: 'relative',
            backgroundColor: 'theme:sheet2'
        },

        listItem: {
            marginBottom: '20h4s',
            borderBottomColor: 'theme:border',
            borderBottomWidth: 1,

            details: {
                padding: '10h4s',
                backgroundColor: 'theme:sheet'
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
