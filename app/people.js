import Immutable from 'immutable';
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { getStyle, getCurrentTheme } from 'react-native-styler';
import { GiftedChat } from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MainBackground from '../components/main-background/main-background';
import PeopleNearby from '../components/people-nearby/people-nearby';
import VenuesList from '../components/venues-list/venues-list';
import SmallTitle from '../components/small-title/small-title';
import LocationWarning from '../components/location-warning/location-warning';
import InfoText from '../components/info-text/info-text';

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
        this.handleMessageSend = this.handleMessageSend.bind(this);
        this.renderPeople = this.renderPeople.bind(this);
        this.renderVenues = this.renderVenues.bind(this);
        this.renderChat = this.renderChat.bind(this);
        this.renderContentTitle = this.renderContentTitle.bind(this);
        this.renderContent = this.renderContent.bind(this);
    }

    shouldComponentUpdate(newProps, newState) {
        if (this.state.selectedVenue !== newState.selectedVenue) {
            return true;
        }

        if (this.state.selectedPerson !== newState.selectedPerson) {
            return true;
        }

        if (this.props.message.get('byUser').count() !== newProps.message.get('byUser').count()) {
            return true;
        }

        if (this.props.message.get('byVenue').count() !== newProps.message.get('byVenue').count()) {
            return true;
        }

        if (this.props.discover.get('eventsNearby') !== newProps.discover.get('eventsNearby')) {
            return true;
        }

        if (this.props.people.get('nearby') !== newProps.people.get('nearby')) {
            return true;
        }

        return false;
    }

    componentWillMount() {
        this.props.loadGeolocation();
        this.state = {
            selectedVenue: null,
            selectedPerson: null
        }
    }

    componentDidMount() {
        // TODO: sockets!
        setInterval(() => {
            if (this.state.selectedPerson) {
                this.props.loadMessages(this.state.selectedPerson.get('_id'));
            }
            else if (this.state.selectedVenue) {
                this.props.loadMessages(null, this.state.selectedVenue.get('_id'));
            }
        }, 1000);
    }

    componentWillReceiveProps(newProps) {
        if (
            newProps.location.get('latitude') !== this.props.location.get('latitude') ||
            newProps.location.get('longitude') !== this.props.location.get('longitude')
        ) {
            this.props.loadPeopleNearby();
            this.props.loadEventsNearby();
        }
    }

    componentWillUpdate(newProps, newState) {
        if (newState.selectedPerson !== this.state.selectedPerson && newState.selectedPerson) {
            this.props.loadMessages(newState.selectedPerson.get('_id'));
        }
        else if (newState.selectedVenue !== this.state.selectedVenue && newState.selectedVenue) {
            this.props.loadMessages(null, newState.selectedVenue.get('_id'));
        }
    }

    get peopleNearby() {
        return this.props.people
            .get('nearby')
            .filter(personId => this.props.user.getIn(['me', '_id']) !== personId)
            .map(nearbyPersonId => this.props.people.getIn(['all', nearbyPersonId]));
    }

    get messages() {
        if (this.state.selectedPerson && this.props.message.getIn(['byUser', this.state.selectedPerson.get('_id')])) {
            return this.props.message
                .getIn(['byUser', this.state.selectedPerson.get('_id')])
                .map(messageId => this.props.message.get('allMessages').find(msg => msg.get('_id') === messageId))
                .toJS()
                .filter(m => !!m)
                .map(msg => ({ ...msg, text: msg.body, user: msg.from }))
        }
        else if (this.state.selectedVenue && this.props.message.getIn(['byVenue', this.state.selectedVenue.get('_id')])) {
            return this.props.message
                .getIn(['byVenue', this.state.selectedVenue.get('_id')])
                .map(messageId => this.props.message.get('allMessages').find(msg => msg.get('_id') === messageId))
                .toJS()
                .filter(m => !!m)
                .map(msg => ({ ...msg, text: msg.body, user: msg.from }));
        }

        return [];
    }

    handleMessageSend(messages = []) {
        if (messages.length > 0 && messages[0].text) {
            if (this.state.selectedPerson) {
                this.props.sendMessage(this.state.selectedPerson.get('_id'), null, messages[0].text)
            }
            else if (this.state.selectedVenue) {
                this.props.sendMessage(null, this.state.selectedVenue.get('_id'), messages[0].text);
            }
        }
    }

    render() {
        if (!this.props.location.get('latitude') || !this.props.location.get('longitude')) {
            return (
                <LocationWarning
                    type="people"
                />
            );
        }

        if (this.props.people.get('isLoadingPeopleNearby')) {
            return (
                <MainBackground>
                    <InfoText>We're looking around you 🙂</InfoText>
                </MainBackground>
            )
        }

        if (
            this.peopleNearby.count() === 0 &&
            this.props.discover.get('eventsNearby').count() === 0
        ) {
            return (
                <MainBackground>
                    <View
                        style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}
                    >
                        <InfoText>Nobody is nearby right now...</InfoText>
                        <Button
                            title="Go to discover"
                            onPress={() => this.props.navigation.navigate('Discover')}
                            color={getCurrentTheme().colors.active}
                        />
                    </View>
                </MainBackground>
            )
        }

        return (
            <MainBackground>
                {this.renderPeople()}
                <SmallTitle>{this.renderContentTitle()}</SmallTitle>
                {this.renderContent()}
            </MainBackground>
        )
    }

    renderContentTitle() {
        if (this.state.selectedVenue) {
            return `${this.state.selectedVenue.get('name')} chat`;
        }

        if (this.state.selectedPerson) {
            return `Chat with ${this.state.selectedPerson.get('name')}`;
        }

        return 'Groups nearby';
    }

    renderContent() {
        if (this.state.selectedVenue) {
            return this.renderChat();
        }

        if (this.state.selectedPerson) {
            return this.renderChat();
        }

        return this.renderVenues();
    }

    renderPeople() {
        const { peopleNearby } = this;

        if (peopleNearby.count() === 0 && !this.state.selectedVenue) {
            return null;
        }

        return (
            <View>
                <SmallTitle>People nearby</SmallTitle>
                <PeopleNearby
                    selectedVenue={this.state.selectedVenue}
                    selectedPerson={this.state.selectedPerson}
                    peopleNearby={peopleNearby}
                    onBack={() => this.setState({ selectedVenue: null, selectedPerson: null })}
                    onSelectPerson={selectedPerson => this.setState({ selectedPerson, selectedVenue: null })}
                />
            </View>
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
                onSelectVenue={selectedVenue => this.setState({ selectedVenue, selectedPerson: null })}
            />
        );
    }

    renderChat() {
        return (
            <GiftedChat
                messages={this.messages}
                onSend={this.handleMessageSend}
                user={this.props.user.get('me').toJS()}
            />
        );
    }
}

export default People;
