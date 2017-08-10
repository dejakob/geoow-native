import { createStyle } from 'react-native-styler';

createStyle({
    profile: {
        flex: 1,
        backgroundColor: 'theme:sheet2',

        sousHeader: {
            height: '150h4s',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',

            backgroundImage: {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,

                img: {
                    flex: 1
                }
            },
            overlay: {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'theme:secondary80'
            }
        },
        list: {
            flex: 1,
            backgroundColor: 'theme:sheet',

            item: {
                height: '50h4s',
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomColor: 'theme:border',
                borderBottomWidth: 1,

                icon: {
                    fontSize: '16h4s',
                    color: 'theme:icon',

                    wrapper: {
                        height: '50h4s',
                        width: '50h4s',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }
                },
                content: {
                    flex: 1
                }
            }
        }
    }
});