import React, { Component } from 'react';
import { Text } from 'react-native';
import { getStyle } from 'react-native-styler';
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
        const { props } = this;
        const events = props.events
            .filter((event, index) =>
                props.events
                    .map(event => event.get('name'))
                    .toArray()
                    .indexOf(event.get('name')) === index
            )
            .map(event =>
                event.set('distance',
                    getDistanceInMeter(event.getIn(['location', 'geocoords', 1]), event.getIn(['location', 'geocoords', 0]), this.props.location.get('latitude'), this.props.location.get('longitude'))
                )
            )
            .sort((eventA, eventB) => eventA.get('distance') - eventB.get('distance'))
            .sort((eventA, eventB) => eventA.get('name').indexOf('Visit ') === 0 ? +1 : 0)
            .toArray();

        console.log('events', events.map(e => e.toJS()));

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
