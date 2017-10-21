import React, { Component } from 'react-native';
import { Animated, FlatList } from 'react-native';
import Color from 'color-js';

/**
 * <ColorizedCarousel />
 */
class ColorizedCarousel extends Component
{
    constructor() {
        super();
        this.handleScroll = this.handleScroll.bind(this);
        this.updateColors = this.updateColors.bind(this);
    }

    componentDidMount() {
        if (this.props.scenes && this.props.scenes.length) {
            this.state = {
                previousColor: this.props.scenes[0].color,
                currentColor: this.props.scenes[0].color,
                colorAnim: new Animated.Value(0)
            };
        }
    }

    handleScroll() {

    }

    updateColors() {
        Animated.timing(       
            this.state.colorAnim,
            {
              toValue: 1,      
            }
          ).start();
    }

    render() {
        const backgroundColor = this.state.colorAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [Color(this.props.color).toRGB(), Color(this.props.color).toRGB()]
        });

        return (
            <Animated.View
                style={{ height: '100%', width: '100%', backgroundColor: this.props.color }}
            >
                <FlatList
                    data={this.props.scenes}
                    renderItem={({ item }) => <ColorizedCarouselScene {...item} />}
                    horizontal={true}
                    pagingEnabled={true}
                    onScroll={this.handleScroll}
                />
            </Animated.View>
        )
    }
}

/**
 * <ColorizedCarouselScene />
 */
class ColorizedCarouselScene extends Component
{
    render() {
        return (
            <View
                style={{ height: '100%', width: '100%' }}
            >
                {this.props.component}
            </View>
        );
    }
}

export default ColorizedCarousel;
