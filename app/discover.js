import React, { Component } from 'react';
import { getStyle } from 'react-native-styler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MainBackground from '../components/main-background/main-background';
import DiscoverMap from '../components/discover-map/discover-map';
import DiscoverList from '../components/discover-list/discover-list';
import LocationWarning from '../components/location-warning/location-warning';

/**
 * <Discover />
 */
class Discover extends Component
{
    static navigationOptions = {
        header: null,
        gesturesEnabled: false,
        tabBarIcon: ({ tintColor }) => <Icon name="map" style={[getStyle('tabBar__icon'), { color: tintColor }]} />
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

        if (!this.props.location.get('latitude') || !this.props.location.get('longitude')) {
            return (
                <LocationWarning
                    type="discover"
                />
            );
        }

        return (
            <MainBackground>
                <DiscoverMap
                    latitude={this.props.location.get('latitude')}
                    longitude={this.props.location.get('longitude')}
                    events={eventsNearby}
                />
                <DiscoverList
                    events={eventsNearby}
                    onItemPress={item => this.props.navigation.navigate('EventDetail', { eventId: item.get('_id') })}
                />
            </MainBackground>
        );
    }
}

export default Discover;
