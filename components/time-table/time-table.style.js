import { createStyle } from 'react-native-styler';

createStyle({
    timeTable: {
        container: {
            flex: 1,
            backgroundColor: 'theme:sheet',
            flexDirection: 'row',
            position: 'relative'
        },
        column: {
            even: {
                flex: 1,
                backgroundColor: 'theme:sheet'
            },
            odd: {
                flex: 1,
                backgroundColor: 'theme:sheet2'
            }
        },
        header: {
            backgroundColor: 'theme:sheet',
            flexDirection: 'row',
            justifyContent: 'space-around',
            borderBottomColor: 'theme:border',
            borderBottomWidth: 1,
            borderStyle: 'solid',
            height: '40h4s'
        },
        headCell: {
            backgroundColor: 'theme:sheet',
            alignItems: 'center',
            justifyContent: 'center',
            height: '40h4s'
        },
        cell: {
            height: 40,
            borderTopColor: 'theme:border',
            borderTopWidth: 1
        },
        slot: {
            position: 'absolute',
            backgroundColor: 'theme:secondary',
            width: '14%',
            borderRadius: '4h4s',
            borderColor: 'theme:sheet',
            borderWidth: 1
        }
    }
});
