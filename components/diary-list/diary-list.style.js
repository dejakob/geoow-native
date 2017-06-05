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
            marginTop: '8h4s',
            marginRight: '4h4s',
            marginBottom: '50h4s',
            marginLeft: '4h4s',

            dateHeader: {
                backgroundColor: 'theme:sheet',
                padding: '6h4s',
                borderTopLeftRadius: '2h4s',
                borderTopRightRadius: '2h4s',

                text: {
                    textAlign: 'center'
                }
            },
            content: {
                borderBottomLeftRadius: '2h4s',
                borderBottomRightRadius: '2h4s',
                backgroundColor: 'theme:lighten8'
            },
            question: {
                fontWeight: '600',
                padding: '6h4s',
            },
            answer: {
                paddingLeft: '6h4s',
                paddingRight: '6h4s',
                paddingBottom: '6h4s',
                opacity: 0.8,
                fontSize: 'theme:small'
            }
        }
    }
});
