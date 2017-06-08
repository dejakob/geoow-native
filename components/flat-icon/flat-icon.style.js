import { Platform } from 'react-native';
import { createStyle } from 'react-native-styler';

createStyle({
    flatIcon: {
        fontFamily: Platform.OS === 'ios' ? 'flatIcon' : 'Flaticon'
    }
});