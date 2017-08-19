import { createStyle } from 'react-native-styler';

createStyle({
    auth: {
        input: {
            backgroundColor: 'theme:sheet',
            marginLeft: '16h4s',
            marginRight: '16h4s',
            padding: '10h4s',
            marginBottom: '20h4s',

            invalid: {
                backgroundColor: 'theme:notokSoft',
                color: 'theme:notok',
                marginLeft: '16h4s',
                marginRight: '16h4s',
                padding: '10h4s',
                marginBottom: '20h4s',
            }
        }
    }
});
