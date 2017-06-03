import React, { Component } from 'react';
import { Modal, FlatList, View, Dimensions } from 'react-native';

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
                    style={{ backgroundColor: 'rgba(0,0,0,0.8)', flex: 1, alignItems: 'center', justifyContent: 'center' }}
                >
                    <FlatList
                        data={this.props.children}
                        renderItem={this.renderChild}
                        horizontal={true}
                        style={{ backgroundColor: '#fff', borderRadius: 3, maxHeight: '40%' || this.props.height, width: '80%' || this.props.width }}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </Modal>
        );
    }

    renderChild({ item, index }) {
        const { width } = Dimensions.get('window');

        return (
            <View
                key={index}
                style={{ flex: 1, width: this.props.width || width * 0.8 }}
            >
                {item}
            </View>
        );
    }
}

export default ModalWalkThrough;
