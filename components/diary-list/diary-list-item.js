import React from 'react';
import moment from 'moment';
import { View, ScrollView, Text } from 'react-native';
import { getStyle } from 'react-native-styler';
import { G5_QUESTIONS } from '../../constants';
import './diary-list.style';

/**
 * <DiaryListItem />
 */
function DiaryListItem(props) {
    return (
        <View
            style={getStyle('diaryList__item')}
        >
            <View
                style={getStyle('diaryList__item__dateHeader')}
            >
                <Text
                    style={getStyle('diaryList__item__dateHeader__text')}
                >
                    {moment(props.diaryItem.get('createdAt')).format('dddd DD MMM, HH:mm')}
                </Text>
            </View>
            <ScrollView
                style={getStyle('diaryList__item__content')}
            >
                {G5_QUESTIONS.map(item => (
                    <View>
                        <Text
                            style={getStyle('diaryList__item__question')}
                        >
                            {item.question}
                        </Text>
                        <Text
                            style={getStyle('diaryList__item__answer')}
                        >
                            {props.diaryItem.getIn(['contents', item.prop])}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

export default DiaryListItem;
