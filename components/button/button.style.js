import { createStyle } from 'react-native-styler';

const touch = {
    height: '40h4s'
};
const container = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '20h4s',
    height: '40h4s'
};
const text = {
    textAlign: 'center',
    fontSize: 'theme:button'
};

createStyle({
    button: {
        primary: {
            touch: {
                ...touch,
                flex: 1
            },
            container: {
                ...container,
                backgroundColor: 'theme:primary'
            },
            text: {
                ...text,
                color: 'theme:background',
            }
        },
        secondary: {
            touch,
            container: {
                ...container,
                backgroundColor: 'theme:background',
                borderColor: 'theme:primary',
                borderStyle: 'solid',
                borderWidth: 1,
                minWidth: '40h4s'
            },
            text: {
                ...text,
                color: 'theme:primary'
            }
        },
        danger: {
            touch,
            container: {
                ...container,
                backgroundColor: 'theme:danger'
            },
            text: {
                ...text,
                color: 'theme:sheet',
            }
        }
    }
});
