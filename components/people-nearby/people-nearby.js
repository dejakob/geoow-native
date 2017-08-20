import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { getStyle } from 'react-native-styler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Touchable from '../button/touchable';
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

        let backButton = null;

        if (this.props.selectedVenue || this.props.selectedPerson) {
            backButton = (
                <Touchable
                    onPress={this.props.onBack}
                >
                    <View
                        style={getStyle('peopleNearby__backButton')}
                    >
                        <Icon
                            name="arrow-back"
                            color={StyleSheet.flatten(getStyle('header__icon')).color}
                            size={StyleSheet.flatten(getStyle('header__icon')).fontSize}
                        />
                    </View>
                </Touchable>
            );
        }

        return (
            <FlatList
                horizontal
                style={getStyle('peopleNearby')}
                data={data}
                renderItem={this.renderItem}
                ListHeaderComponent={backButton}
            />
        );
    }

    renderItem({ item, index }) {
        if (item.get('type') === 'venue') {
            return (
                <Avatar
                    key={index}
                    style={[getStyle('peopleNearby__avatar'), { opacity: item.get('isSelected') ? 1 : 0.5 }]}
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
