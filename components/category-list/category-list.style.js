import { createStyle } from 'react-native-styler';

createStyle({
    categoryList: {
        flex: 1,
        width: '100%'
    },
    categoryListItem: {
        checkIcon: {
            height: '22h4s',
            color: 'theme:ok'
        },
        checkIconStyle: {
            position: 'absolute',
            left: '16w4s'
        }
    }
});
