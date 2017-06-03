import React from 'react';
import { View, Text } from 'react-native';
import { getStyle } from 'react-native-styler';
import './diary-list.style';

/**
 * <DiaryListItem />
 */
function DiaryListItem(props) {
    const items = [
        { question: 'What happened?', answer: props.item.get('event') },
        { question: 'Any automatic thoughts?', answer: props.item.get('automaticThoughts') },
        { question: 'Which feelings came up?', answer: props.item.get('feelings') },
        { question: 'How did you behave?', answer: props.item.get('behaviour') },
        { question: 'What was the result?', answer: props.item.get('result') },
    ];

    return (
        <View
            style={getStyle('diaryList')}
        >
            {items.map(item => (
                <View>
                    <Text
                        style={getStyle('diaryList__question')}
                    >
                        {item.question}
                    </Text>
                    <Text>
                        {item.answer}
                    </Text>
                </View>
            ))}
        </View>
    );
}

export default DiaryListItem;
