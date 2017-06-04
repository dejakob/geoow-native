import React from 'react';
import { View, Text } from 'react-native';
import { getStyle } from 'react-native-styler';
import { G5_QUESTIONS } from '../../constants';
import './diary-list.style';

/**
 * <DiaryListItem />
 */
function DiaryListItem(props) {
    console.log('item', props.item);

    return (
        <View
            style={getStyle('diaryList')}
        >
            {G5_QUESTIONS.map(item => (
                <View>
                    <Text
                        style={getStyle('diaryList__question')}
                    >
                        {item.question}
                    </Text>
                    <Text>
                    </Text>
                </View>
            ))}
        </View>
    );
}

export default DiaryListItem;
