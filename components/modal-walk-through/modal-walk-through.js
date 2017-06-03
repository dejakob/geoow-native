import React, { Component } from 'react';
import { Modal, FlatList, View } from 'react-native';

/**
 * <ModalWalkThrough />
 */
class ModalWalkThrough extends Component
{
    constructor() {
        super();

        this.renderChild = this.renderChild.bind(this);
    }

    render() {
        return (
            <Modal
                transparent={true}
                animationType="fade"
                visible={true}
            >
                <View
                    style={{ backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, alignItems: 'center', justifyContent: 'center' }}
                >
                    <FlatList
                        data={this.props.children}
                        renderItem={this.renderChild}
                        horizontal={true}
                        style={{ backgroundColor: '#fff', borderRadius: 3, padding: 8, maxHeight: '40%' || this.props.height, width: '80%' || this.props.width }}
                    />
                </View>
            </Modal>
        );
    }

    renderChild({ item, index }) {
        return item;
    }
}

export default ModalWalkThrough;
