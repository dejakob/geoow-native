import React from 'react';
import { View, Text } from 'react-native';
import { G5_QUESTIONS } from '../../constants';
import ModalWalkThrough from '../modal-walk-through/modal-walk-through';

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
                >
                    <Text>
                        {item.question}
                    </Text>
                </View>
            ))}
        </ModalWalkThrough>
    )
}

export default DiaryAddModal