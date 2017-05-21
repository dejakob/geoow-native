import React, { Component } from 'react';
import MainBackground from '../components/main-background/main-background';
import DiscoverMap from '../components/discover-map/discover-map';
import DiscoverList from '../components/discover-list/discover-list';

/**
 * <Discover />
 */
class Discover extends Component
{
    static navigationOptions = {
        header: null,
        gesturesEnabled: false
    };

    get eventsNearby() {
        return this.props.discover.get('eventsNearby').map(eventId =>
            this.props.event.getIn(['events', eventId])
        ).sort((eventA, eventB) =>
            new Date(eventA.get('startTime')).getTime() - new Date(eventB.get('endTime')).getTime()
        );
    }

    componentWillMount() {
        this.props.loadGeolocation();
        this.props.loadEventsNearby();
    }

    componentWillReceiveProps(newProps) {
        if (
            newProps.location.get('latitude') !== this.props.location.get('latitude') &&
            newProps.location.get('longitude') !== this.props.location.get('longitude')
        ) {
            this.props.loadEventsNearby();
        }
    }

    render() {
        const { eventsNearby } = this;

        return (
            <MainBackground>
                <DiscoverMap
                    latitude={this.props.location.get('latitude')}
                    longitude={this.props.location.get('longitude')}
                    events={eventsNearby}
                />
                <DiscoverList
                    events={eventsNearby}
                />
            </MainBackground>
        );
    }
}

export default Discover;
