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

    componentWillMount() {
        this.state = {
            visible: this.props.visible
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible !== this.state.visible) {
            this.state.visible = nextProps.visible;
        }
    }

    goToStep(index = 0) {
        if (index > this.props.children.length - 1) {
            this.setState({ visible: false });
        }
        else {
            const width = this.props.width || Dimensions.get('window').width * 0.8;
            this.flatList.scrollToOffset({ animated: true, offset: index * width });
        }
    }

    render() {
        return (
            <Modal
                transparent={true}
                animationType="fade"
                visible={this.state.visible}
            >
                <View
                    style={{ backgroundColor: 'rgba(0,0,0,0.8)', flex: 1, alignItems: 'center', justifyContent: 'center' }}
                >
                    <FlatList
                        data={this.props.children}
                        renderItem={this.renderChild}
                        horizontal={true}
                        style={{ backgroundColor: '#fff', borderRadius: 3, maxHeight: this.props.height || '40%', width: this.props.width || '80%' }}
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
