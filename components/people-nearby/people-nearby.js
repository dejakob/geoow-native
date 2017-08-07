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

    renderItem(person) {
        return (
            <Avatar
                style={getStyle('peopleNearby__avatar')}
                image={person.get('avatar')}
            />
        );
    }
}

export default PeopleNearby;
