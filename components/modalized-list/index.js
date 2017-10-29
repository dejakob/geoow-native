import React, { Component } from 'react';
import { Animated, View, TouchableWithoutFeedback, Dimensions } from 'react-native';
import ReactNativeComponentTree from 'react-native/Libraries/Renderer/shims/ReactNativeComponentTree';


/**
 * <ModalizedList />
 */
class ModalizedList extends Component {
    render() {
        const { items } = this.props;
        
        return (
            <View
                {...this.props}
            >
                {this.props.header}
                {items.map(item =>
                    <ModalizedListItem item={item} />
                )}
            </View>
        );
    }
}

class ModalizedListItem extends Component {
    constructor() {
        super();

        this.state = {};

        this.handleItemPress = this.handleItemPress.bind(this);
    }

    handleItemPress(eventData) {
        const target = this.refs.el;

        if (target) {
            target.measure( (fx, fy, width, height, px, py) => {
                const screenHeight = Dimensions.get('window').height;

                this.state = {
                    height: new Animated.Value(height),
                    top: new Animated.Value(py),
                    absolute: true
                };

                Animated.parallel([
                    Animated.spring(this.state.height, { toValue: screenHeight }),
                    Animated.spring(this.state.top, { toValue: 0 }),
                ]).start();

                const style = {};
        
                style.position = 'absolute';
                style.height = this.state.height;
                style.top = this.state.top;
                style.backgroundColor = 'white';
                style.width = Dimensions.get('window').width;

                const modalComponent = (
                    <Animated.View
                        style={style}
                    >
                        {this.props.item}
                    </Animated.View>
                );

                ModalizedListModalStack.pushToStack(modalComponent);
            });
        }
    }

    render() {
        const { item } = this.props;

        return (
            <TouchableWithoutFeedback
                onPress={this.handleItemPress}
            >
                <View
                    ref="el"
                >
                    {item}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

class ModalizedListModalStack extends Component
{
    static stack = [];
    static _self = null;
    
    static pushToStack(component) {
        try {
            ModalizedListModalStack.stack.push(component);
            ModalizedListModalStack._self.setState({});
        }
        catch (ex) {
            console.log('ex', ex);
            console.error('Could not update ModalizedListModalStack');
        }
    }

    static removeFromStack() {
        throw new Error('To Be Implemented');
    }

    componentWillMount() {
        ModalizedListModalStack._self = this;
    }

    render() {
        if (!ModalizedListModalStack.stack.length) {
            return null;
        }

        return (
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                {ModalizedListModalStack.stack}
            </View>
        )
    }
}

export default ModalizedList;
export {
    ModalizedListModalStack
};