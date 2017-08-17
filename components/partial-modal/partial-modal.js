import React from 'react';
import { Modal, View, TouchableWithoutFeedback } from 'react-native';
import { getStyle } from 'react-native-styler';
import './partial-modal.style';

/**
 * <PartialModal />
 * @constructor
 */
function PartialModal(props) {
    return (
        <Modal
            {...props}
        >
            <TouchableWithoutFeedback
                onPress={props.onHide}
            >
                <View
                    style={getStyle('partialModal')}
                >
                    <View
                        style={getStyle('partialModal__content')}
                    >
                        {props.children}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

export default PartialModal;
