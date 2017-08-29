import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { getStyle } from 'react-native-styler';
import SwipeCards from 'react-native-swipe-cards';
import DiscoverListItem from './discover-list-item';
import './discover-list.style';

/**
 * <DiscoverList />
 */
class DiscoverList extends Component
{
    constructor() {
        super();

        this.state = {
            selectedEvent: null
        };

        this.selectListItem = this.selectListItem.bind(this);
        this.startQuest = this.startQuest.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }

    shouldComponentUpdate(newProps, newState) {
        if (newProps.events !== this.props.events) {
            return true;
        }

        if (newState.selectedEvent !== this.state.selectedEvent) {
            return true;
        }

        return false;
    }

    selectListItem(selectedEvent) {
        console.log('select list item', selectedEvent);

        if (this.state.selectedEvent === selectedEvent) {
            this.startQuest(selectedEvent);
        }
        else {
            this.setState({ selectedEvent });
        }
    }

    startQuest(event) {
        this.props.onItemPress(event);
    }

    render () {
        const { props } = this;
        const events = props.events
            .filter((event, index) =>
                props.events
                    .map(event => event.get('name'))
                    .toArray()
                    .indexOf(event.get('name')) === index
            )
            .toArray();

        console.log('events', events);

        return (
            <SwipeCards
                cards={events}
                renderCard={this.renderItem}
            />
        )

        return (
            <FlatList
                data={events}
                renderItem={this.renderItem}
                bounces={false}
                removeClippedSubviews={false}
                style={getStyle('discoverList')}
            />
        );
    }

    renderItem(item) {
        return (
            <DiscoverListItem
                key={item.get('_id')}
                event={item}
                onPress={() => this.selectListItem(item)}
                isSelected={this.state.selectedEvent === item}
            />
        )
    }
}

export default DiscoverList;
