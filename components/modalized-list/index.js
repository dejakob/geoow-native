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
                style.width = Dimensions.get('window').width;

                const modalComponent = (
                    <Animated.View
                        style={style}
                    >
                        {this.props.item.active}
                    </Animated.View>
                );

                ModalizedListModalStack.pushToStack({
                    component: modalComponent,
                    goBack: this.goBack.bind(this, py, height)
                });
            });
        }
    }

    goBack(top, height) {
        const screenHeight = Dimensions.get('window').height;
        
        this.state = {
            height: new Animated.Value(screenHeight),
            top: new Animated.Value(0),
            absolute: true
        };

        Animated.parallel([
            Animated.spring(this.state.height, { toValue: height }),
            Animated.spring(this.state.top, { toValue: top }),
        ]).start(() => {
            ModalizedListModalStack.popFromStack();
        });

        const style = {};

        style.position = 'absolute';
        style.height = this.state.height;
        style.top = this.state.top;
        style.width = Dimensions.get('window').width;
        
        const modalComponent = (
            <Animated.View
                style={style}
            >
                {this.props.item.preview}
            </Animated.View>
        );

        ModalizedListModalStack.replaceLast({
            component: modalComponent,
        });
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
                    {item.preview}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

class ModalizedListModalStack extends Component
{
    static stack = [];
    static _self = null;
    
    static pushToStack(item) {
        try {
            ModalizedListModalStack.stack.push(item);
            ModalizedListModalStack._self.setState({});
        }
        catch (ex) {
            console.log('ex', ex);
            console.error('Could not update ModalizedListModalStack');
        }
    }

    static replaceLast(item) {
        try {
            ModalizedListModalStack.stack[ModalizedListModalStack.stack.length - 1] = item;
            ModalizedListModalStack._self.setState({});
        }
        catch (ex) {
            console.error('Could not update ModalizedListModalStack');
        }
    }

    static popFromStack() {
        if (ModalizedListModalStack.stack.length) {
            try {
                ModalizedListModalStack.stack.splice(ModalizedListModalStack.stack.length - 1, 1);
                ModalizedListModalStack._self.setState({});
            }
            catch (ex) {
                console.error('Could not update ModalizedListModalStack');
            }
        }
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
                {ModalizedListModalStack.stack.map(s => s.component)}
            </View>
        )
    }
}

function goBack() {
    if (typeof ModalizedListModalStack.stack[ModalizedListModalStack.stack.length - 1].goBack === 'function') {
        ModalizedListModalStack.stack[ModalizedListModalStack.stack.length - 1].goBack();
    }
}

export default ModalizedList;
export {
    ModalizedListModalStack,
    goBack
};