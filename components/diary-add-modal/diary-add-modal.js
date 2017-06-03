import React from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';
import { getStyle } from 'react-native-styler';
import StarRating from 'react-native-star-rating';
import { G5_QUESTIONS } from '../../constants';
import ModalWalkThrough from '../modal-walk-through/modal-walk-through';
import './diary-add-modal.style';

/**
 * <DiaryAddModal />
 * @constructor
 */
function DiaryAddModal(props) {
    return (
        <ModalWalkThrough>
            {G5_QUESTIONS.map((item, index) => (
                <View
                    key={index}
                    style={getStyle('diaryAddModal__scene')}
                >
                    <Text
                        style={getStyle('diaryAddModal__title')}
                    >
                        {item.question}
                    </Text>
                    <TextInput
                        style={getStyle('diaryAddModal__textInput')}
                        multiline={true}
                        placeholder='Type something here'
                        placeholderTextColor={StyleSheet.flatten(getStyle('diaryAddModal__textInput')).borderTopColor}
                    />
                    <View
                        style={getStyle('diaryAddModal__stars')}
                    >
                        <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={0}
                            selectedStar={(rating) => { console.log('rating', rating) }}
                            acceptHalfStars={true}
                            starSize={StyleSheet.flatten(getStyle('diaryAddModal__star')).height}
                        />
                    </View>
                </View>
            ))}
        </ModalWalkThrough>
    )
}

export default DiaryAddModal