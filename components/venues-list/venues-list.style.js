import { createStyle } from 'react-native-styler';

createStyle({
    venuesList: {
        item: {
            odd: {
                padding: '10h4s',
                flexDirection: 'row',
                backgroundColor: 'theme:sheet',
                alignItems: 'center'
            },
            even: {
                padding: '10h4s',
                flexDirection: 'row',
                backgroundColor: 'theme:sheet2',
                alignItems: 'center'
            },
            avatar: {
                height: '50h4s',
                width: '50h4s',
                borderRadius: '25h4s',
                marginRight: '10h4s'
            },
            details: {
                flex: 1
            },
            title: {
                fontWeight: '600',
                fontSize: 'theme:p',
                marginBottom: '6h4s'
            },
            tags: {
                fontSize: 'theme:small',
                color: 'theme:subtext'
            }
        }
    }
});
