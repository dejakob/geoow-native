import React, { Component } from 'react';
import { Animated, FlatList, View } from 'react-native';
import { getStyle } from 'react-native-styler';
import Color from 'color-js';

import './style.js';

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

    componentWillMount() {
        this._colorAnim = new Animated.Value(0);

        if (this.props.scenes && this.props.scenes.length > 0) {
            this.state = {
                previousColor: this.props.scenes[0].color,
                currentColor: this.props.scenes[0].color,
                currentSlide: 0
            };
            this.updateColors();
        }
    }

    componentWillReceiveProps(newProps) {
        if ((!this.state || !this.state.previousColor) && newProps.scenes && newProps.scenes.length) {
            this.state = {
                previousColor: newProps.scenes[0].color,
                currentColor: newProps.scenes[0].color,
                currentSlide: 0
            };
            this.updateColors();
        }
    }

    handleScroll(eventData) {
        const { layoutMeasurement, contentOffset } = eventData.nativeEvent;
        const currentSlide = contentOffset.x / layoutMeasurement.width;

        // Done sliding, not anywhere in between
        if (currentSlide === Math.round(currentSlide) && this.props.scenes[currentSlide]) {
            this.setState({
                previousColor: this.state.currentColor,
                currentColor: this.props.scenes[currentSlide].color,
                currentSlide
            });
            this.updateColors();
        }
    }

    updateColors() {
        this._colorAnim.setValue(0);

        Animated.timing(       
            this._colorAnim,
            {
              toValue: 1,
              duration: 400
            }
          ).start();
    }

    render() {
        let backgroundColor;
        
        if (this.state && this.state.previousColor && this.state.currentColor) {
            backgroundColor = this._colorAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [this.state.previousColor, this.state.currentColor]
            });
        }

        return (
            <Animated.View
                style={{ flex: 1, backgroundColor }}
            >
                <FlatList
                    data={this.props.scenes}
                    renderItem={({ item }) => <ColorizedCarouselScene {...item} />}
                    horizontal={true}
                    pagingEnabled={true}
                    onScroll={this.handleScroll}
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                />
                <View
                    style={getStyle('colorizedCarousel__dots')}
                >
                    {this.props.scenes.map((scene, index) =>
                        <View style={getStyle(this.state.currentSlide === index ? 'colorizedCarousel__activeDot' : 'colorizedCarousel__dot')} />
                    )}
                </View>
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
                style={getStyle('colorizedCarousel__scene')}
            >
                {this.props.component}
            </View>
        );
    }
}

export default ColorizedCarousel;
