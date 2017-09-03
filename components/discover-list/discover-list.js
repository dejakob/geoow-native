import React, { Component } from 'react';
import { Text } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import DiscoverListItem from './discover-list-item';
import { getDistanceInMeter } from '../../helpers/distance-helper';
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
        this.updateEvents = this.updateEvents.bind(this);
    }

    componentWillMount() {
        this.updateEvents(this.props)
    }

    componentWillReceiveProps(newProps) {
        this.updateEvents(newProps);
    }

    updateEvents(props) {
        const myLatitude = props.location.get('latitude');
        const myLongitude = props.location.get('longitude');

        this.events = props.events

            // Filter out duplicates
            .filter((event, index) =>
                props.events
                    .map(event => event.get('name'))
                    .toArray()
                    .indexOf(event.get('name')) === index
            )

            // Add the distance in m
            .map(event =>
                event.set('distance',
                    getDistanceInMeter(
                        myLatitude,
                        myLongitude,
                        event.getIn(['location', 'geocoords', 1]),
                        event.getIn(['location', 'geocoords', 0])
                    )
                )
            )

            // Sort by distance, nearby => far away
            .sort((eventA, eventB) => eventA.get('distance') - eventB.get('distance'))

            // Sort by name, put everything starting with 'Visit ' at the end
            .sort((eventA, eventB) => eventA.get('name').indexOf('Visit ') === 0 ? +1 : 0)
            .toArray();
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
        this.startQuest(selectedEvent);
    }

    startQuest(event) {
        this.props.onItemPress(event);
    }

    render () {
        const { events } = this;

        return (
            <SwipeCards
                cards={events}
                renderCard={this.renderItem}
                handleYup={item => this.selectListItem(item)}
            />
        );
    }

    renderItem(item) {
        return (
            <DiscoverListItem
                key={item.get('_id')}
                event={item}
            />
        )
    }
}

export default DiscoverList;
