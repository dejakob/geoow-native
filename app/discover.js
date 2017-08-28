import React, { Component } from 'react';
import { View, Button, AppState } from 'react-native';
import { getStyle, getCurrentTheme } from 'react-native-styler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MainBackground from '../components/main-background/main-background';
import DiscoverList from '../components/discover-list/discover-list';
import LocationWarning from '../components/location-warning/location-warning';
import InfoText from '../components/info-text/info-text';

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

    constructor() {
        super();
        this.handleSpoofLocationToAntwerp = this.handleSpoofLocationToAntwerp.bind(this);
        this.handleAppStateChange = this.handleAppStateChange.bind(this);
    }

    shouldComponentUpdate(newProps, newState) {
        if (this.props.discover.get('isLoadingEventsNearby') !== newProps.discover.get('isLoadingEventsNearby')) {
            return true;
        }

        if (newProps.location.get('latitude') !== this.props.location.get('latitude') ||
            newProps.location.get('longitude') !== this.props.location.get('longitude')
        ) {
            return true;
        }

        return false;
    }

    get eventsNearby() {
        return this.props.discover.get('eventsNearby')
            .map(eventId =>
                this.props.event.getIn(['events', eventId])
            )
            .filter(e => !!e)
            .sort((eventA, eventB) =>
                new Date(eventA.get('startTime')).getTime() - new Date(eventB.get('endTime')).getTime()
            );
    }

    componentWillMount() {
        this.props.loadGeolocation();
    }

    componentWillReceiveProps(newProps) {
        if (
            newProps.location.get('latitude') !== this.props.location.get('latitude') ||
            newProps.location.get('longitude') !== this.props.location.get('longitude')
        ) {
            this.props.loadEventsNearby();
        }
    }

    componentDidMount() {
        AppState.addEventListener('change', this.handleAppStateChange);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange);
    }

    handleAppStateChange() {
        this.props.loadGeolocation();
    }

    handleSpoofLocationToAntwerp() {
        this.props._loadGeolocationSuccess(51.2169159, 4.4101744);
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

        let content = null;

        if (this.props.discover.get('isLoadingEventsNearby')) {
            content = (
                <View>
                    <InfoText>
                        Loading events around you :)
                    </InfoText>
                </View>
            );
        }
        else if (eventsNearby.count() === 0) {
            content = (
                <View>
                    <InfoText>
                        There are no events around you right now.
                    </InfoText>
                    <Button
                        title="Show venues in Antwerp, Belgium"
                        onPress={this.handleSpoofLocationToAntwerp}
                        color={getCurrentTheme().colors.active}
                    />
                </View>
            );
        }
        else {
            content = (
                <DiscoverList
                    events={eventsNearby}
                    onItemPress={item => this.props.navigation.navigate('EventDetail', { eventId: item.get('_id') })}
                />
            );
        }

        return (
            <MainBackground>
                <DiscoverMap
                    latitude={this.props.location.get('latitude')}
                    longitude={this.props.location.get('longitude')}
                    events={eventsNearby}
                    navigation={this.props.navigation}
                />
                {content}
            </MainBackground>
        );
    }
}

export default Discover;
