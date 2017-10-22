import { createStyle } from 'react-native-styler';

createStyle({
    colorizedCarousel: {
        scene: {
            flex: 1,
            width: '100vw'
        },
        dots: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            bottom: '12h4s',
            left: 0,
            right: 0
        },
        dot: {
            height: '8h4s',
            width: '8h4s',
            borderRadius: '4h4s',
            borderColor: 'theme:primary',
            borderWidth: 1,
            marginLeft: '5w4s',
            marginRight: '5w4s'
        },
        activeDot: {
            height: '8h4s',
            width: '8h4s',
            borderRadius: '4h4s',
            borderColor: 'theme:primary',
            borderWidth: 1,
            backgroundColor: 'theme:primary',
            marginLeft: '5w4s',
            marginRight: '5w4s'
        }
    }
})