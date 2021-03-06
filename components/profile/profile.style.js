import { createStyle } from 'react-native-styler';

createStyle({
    profile: {
        flex: 1,
        position: 'relative',
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
                backgroundColor: 'theme:darken'
            },
            score: {
                backgroundColor: 'transparent',
                color: 'theme:primary',
                fontWeight: '300',
                fontSize: '16h4s',
                textAlign: 'center',
                width: '70h4s',
                marginTop: '10h4s',
            }
        },
        backButton: {
            position: 'absolute',
            top: '48h4s',
            left: '32h4s',
            backgroundColor: 'transparent'
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

                text: {
                    fontSize: '12h4s',
                    color: 'theme:icon'
                },
                placeholder: {
                    fontSize: '12h4s',
                    color: 'theme:placeholder'
                },
                icon: {
                    fontSize: '16h4s',
                    color: 'theme:subtext',

                    wrapper: {
                        height: '50h4s',
                        width: '50h4s',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }
                },
                checkIcon:{
                    fontSize: '16h4s',
                    color: 'theme:ok',

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