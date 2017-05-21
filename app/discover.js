import React, { Component } from 'react';
import PublicBackground from '../components/public-background/public-background';
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
            <PublicBackground>
                <DiscoverMap
                    latitude={this.props.location.get('latitude')}
                    longitude={this.props.location.get('longitude')}
                    events={eventsNearby}
                />
                <DiscoverList
                    events={eventsNearby}
                />
            </PublicBackground>
        );
    }
}

export default Discover;
