import React, { Component } from 'react';
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
class DiaryAddModal extends Component {
    constructor() {
        super();

        this.modal = null;
    }

    componentWillMount() {
        this.state = {
            step: 0
        }
    }

    render() {
        return (
            <ModalWalkThrough
                visible={this.props.visible}
                ref={m => this.modal = m}
            >
                {G5_QUESTIONS.map((item, index) => {
                    let sheet = null;

                    return (
                    <View
                        key={index}
                        style={getStyle('diaryAddModal__scene')}
                        ref={s => sheet = s}
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
                                rating={this.props.diary.getIn(['newItem', `${item.prop}Rating`])}
                                selectedStar={(rating) => {
                                    this.props.changePropOfNewDiaryItem(`${item.prop}Rating`, rating);
                                    this.modal.goToStep(this.state.step + 1);
                                    this.setState({ step: this.state.step + 1 });
                                }}
                                acceptHalfStars={true}
                                starSize={StyleSheet.flatten(getStyle('diaryAddModal__star')).height}
                            />
                        </View>
                    </View>
                );})}
            </ModalWalkThrough>
        )
    }
}

export default DiaryAddModal