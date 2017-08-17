import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { getStyle } from 'react-native-styler';
import Avatar from '../avatar/avatar';
import './people-nearby.style.js'

/**
 * <PeopleNearby />
 */
class PeopleNearby extends Component
{
    constructor() {
        super();
        this.renderItem = this.renderItem.bind(this);
    }

    render() {
        return (
            <FlatList
                horizontal
                style={getStyle('peopleNearby')}
                data={this.props.peopleNearby.toArray()}
                renderItem={this.renderItem}
            />
        );
    }

    renderItem({ item, index }) {
        // Opacity 1 for current conversation
        return (
            <Avatar
                key={index}
                style={[getStyle('peopleNearby__avatar'), { opacity: 0.5 }]}
                image={item.get('avatar')}
            />
        );
    }
}

export default PeopleNearby;
