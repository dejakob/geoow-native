import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { getStyle } from 'react-native-styler';
import './people-nearby.style.js'

/**
 * <PeopleNearby />
 */
class PeopleNearby extends Component
{
    render() {
        return (
            <FlatList
                horizontal
                style={getStyle('peopleNearby')}
            />
        );
    }
}

export default PeopleNearby;
