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
        const data = this.props.peopleNearby.toArray();

        if (this.props.selectedVenue) {
            data.unshift(this.props.selectedVenue.set('type', 'venue').set('isSelected', true));
        }

        return (
            <FlatList
                horizontal
                style={getStyle('peopleNearby')}
                data={data}
                renderItem={this.renderItem}
            />
        );
    }

    renderItem({ item, index }) {
        if (item.get('type') === 'venue') {
            return (
                <Avatar
                    key={index}
                    style={[getStyle('peopleNearby__avatar'), { opacity: item === item.get('isSelected') ? 1 : 0.5 }]}
                    image={item.getIn(['cover', 'source'])}
                />
            );
        }

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
