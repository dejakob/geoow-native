import Immutable from 'immutable';
import React, { Component } from 'react';
import { AppState, View, Text } from 'react-native';
import { getStyle } from 'react-native-styler';
import { GiftedChat } from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MainBackground from '../components/main-background/main-background';
import PeopleNearby from '../components/people-nearby/people-nearby';
import VenuesList from '../components/venues-list/venues-list';
import SmallTitle from '../components/small-title/small-title';

/**
 * <People />
 */
class People extends Component
{
    static navigationOptions = {
        header: null,
        gesturesEnabled: false,
        tabBarIcon: ({ tintColor }) => <Icon name="people" style={[getStyle('tabBar__icon'), { color: tintColor }]} />
    };

    constructor() {
        super();
        this.handleAppStateChange = this.handleAppStateChange.bind(this);
        this.renderPeople = this.renderPeople.bind(this);
        this.renderVenues = this.renderVenues.bind(this);
        this.renderChat = this.renderChat.bind(this);
    }

    componentWillMount() {
        this.state = {
            selectedVenue: null
        }
    }

    componentDidMount() {
        AppState.addEventListener('change', this.handleAppStateChange);

        this.props.loadPeopleNearby();

        this.interval = setInterval(() => {
            this.props.loadPeopleNearby();
            this.props.loadMe();
        }, 5000);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange);
    }

    handleAppStateChange(nextAppState) {
        if (nextAppState === 'active') {
            this.interval = setInterval(() => {
                this.props.loadPeopleNearby();
                this.props.loadMe();
            }, 5000);
        }
        else {
            clearInterval(this.interval);
        }
    }

    componentWillReceiveProps(newProps) {
        if (
            newProps.location.get('latitude') !== this.props.location.get('latitude') ||
            newProps.location.get('longitude') !== this.props.location.get('longitude')
        ) {
            this.props.loadPeopleNearby();
        }
    }

    render() {
        return (
            <MainBackground>
                <SmallTitle>People nearby</SmallTitle>
                {this.renderPeople()}
                <SmallTitle>Group chat</SmallTitle>
                {this.state.selectedVenue ? this.renderChat() : this.renderVenues()}
            </MainBackground>
        )
    }

    renderPeople() {
        return (
            <PeopleNearby
                selectedVenue={this.state.selectedVenue}
                peopleNearby={this.props.people.get('nearby').map(nearbyPersonId => this.props.people.getIn(['all', nearbyPersonId]))}
                onBack={() => this.setState({ selectedVenue: null })}
            />
        );
    }

    renderVenues() {
        const venues = this.props.discover.get('eventsNearby').map(eventId =>
            this.props.event.getIn(['events', eventId, 'venue'])
        ).toJS();

        const venuesDistinct = {};
        venues.forEach(venue => venuesDistinct[venue._id] = venue);

        const venuesDistinctArray = Immutable.fromJS(Object.keys(venuesDistinct).map(k => venuesDistinct[k]));

        return (
            <VenuesList
                venues={venuesDistinctArray}
                onSelectVenue={selectedVenue => this.setState({ selectedVenue })}
            />
        );
    }

    renderChat() {
        const messages = [{
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://facebook.github.io/react/img/logo_og.png',
            },
        }];

        return (
            <GiftedChat
                messages={messages}
                onSend={(messages) => this.onSend(messages)}
                user={{
                      _id: 1,
                    }}
            />
        );
    }
}

export default People;
