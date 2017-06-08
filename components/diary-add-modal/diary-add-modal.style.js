import { createStyle } from 'react-native-styler';

createStyle({
    diaryAddModal: {
        scene: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        title: {
            fontSize: '16h4s',
            margin: '10h4s',
            color: 'theme:subtext'
        },
        textInput: {
            flex: 1,
            padding: '12h4s',
            fontSize: '12h4s',
            borderTopColor: 'theme:inactive',
            borderTopWidth: 1,
            width: '100%',
            textAlignVertical: 'top',
        },
        stars: {
            width: '100%',
            alignItems: 'flex-end',
            padding: '12h4s'
        },
        star: {
            height: '12h4s'
        }
    }
});
