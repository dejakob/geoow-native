import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';
import ModalWalkThrough from 'react-native-modal-walk-through';
import { getStyle } from 'react-native-styler';
import StarRating from 'react-native-star-rating';
import { G5_QUESTIONS } from '../../constants';
import './diary-add-modal.style';

/**
 * <DiaryAddModal />
 * @constructor
 */
class DiaryAddModal extends Component {
    constructor() {
        super();

        this.modal = null;
        this.goToNextStep = this.goToNextStep.bind(this);
        this.handleOnFinish = this.handleOnFinish.bind(this);
    }

    componentWillMount() {
        this.state = {
            step: 0
        }
    }

    handleOnFinish() {
        this.props.saveDiaryItem();
    }

    goToNextStep() {
        this.modal.goToStep(this.state.step + 1);
        this.setState({ step: this.state.step + 1 });
    }

    render() {
        return (
            <ModalWalkThrough
                visible={this.props.visible}
                ref={m => this.modal = m}
                onStepChange={step => this.setState({ step })}
                onFinish={this.handleOnFinish}
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
                            onChangeText={value => this.props.changePropOfNewDiaryItem(item.prop, value)}
                            returnKeyType='done'
                            blurOnSubmit={true}
                            onSubmitEditing={() => {
                                if (
                                    this.props.diary.getIn(['newItem', `${item.prop}Rating`]) &&
                                    this.props.diary.getIn(['newItem', `${item.prop}Rating`]) > 0
                                ) {
                                    this.goToNextStep();
                                }
                            }}
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
                                    if (
                                        this.props.diary.getIn(['newItem', item.prop]) &&
                                        this.props.diary.getIn(['newItem', item.prop]).length
                                    ) {
                                        this.goToNextStep();
                                    }
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