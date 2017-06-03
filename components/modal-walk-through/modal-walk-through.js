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

    goToStep(index = 0) {
        this.flatList.scrollToIndex({ viewPosition: 0, index });
    }

    render() {
        return (
            <Modal
                transparent={true}
                animationType="fade"
                visible={this.props.visible}
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
                        ref={flatList => this.flatList = flatList}
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
