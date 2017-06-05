import { createStyle } from 'react-native-styler';

createStyle({
    diaryList: {
        scene: {
            flex: 1,
            width: '100vw',
        },
        item: {
            flex: 1,
            padding: '8h4s',
            backgroundColor: 'theme:sheet',
            borderRadius: '3h4s',
            margin: '8h4s',

            answer: {
                padding: '6h4s',
                opacity: 0.9,
                fontStyle: 'italic'
            }
        }
    }
});
