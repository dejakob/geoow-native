import { createStyle } from 'react-native-styler';

createStyle({
    discoverListItem: {
        padding: '10h4s',
        height: '70h4s',
        flexDirection: 'row',

        avatar: {
            height: '50h4s',
            width: '50h4s'
        },
        content: {
            flex: 1,
            height: '50h4s',
            paddingLeft: '10h4s',
            justifyContent: 'space-between'
        },
        title: {
            fontWeight: '600',
            fontSize: 'theme:p'
        },
        address: {
            fontSize: 'theme:small',
            color: 'theme:subtext'
        }
    }
});
