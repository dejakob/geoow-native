import React, { Component } from 'react';
import { FlatList } from 'react-native';
import DiscoverListItem from './discover-list-item';
import './discover-list.style';

/**
 * <DiscoverList />
 */
class DiscoverList extends Component
{
    constructor() {
        super();

        this.selectListItem = this.selectListItem.bind(this);
        this.startQuest = this.startQuest.bind(this);
    }

    componentWillMount() {
        this.state = {
            selectedEvent: null
        };
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

        return (
            <FlatList
                data={events}
                renderItem={renderItem}
                bounces={false}
                removeClippedSubviews={false}
            />
        );

        function renderItem({ item, index }) {
            return (
                <DiscoverListItem
                    key={index}
                    event={item}
                    onPress={() => props.onItemPress(item)}
                />
            )
        }
    }
}

export default DiscoverList;
