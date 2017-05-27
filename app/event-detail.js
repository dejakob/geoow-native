import React, { Component } from 'react';
import { Platform, Linking, View, Alert } from 'react-native';
import Polyline from '@mapbox/polyline';
import { getStyle } from 'react-native-styler';
import DirectionsMap from '../components/directions-map/directions-map';
import EventDetailHeader from '../components/event-detail-header/event-detail-header';
import Footer from '../components/footer/footer';
import PrimaryButton from '../components/button/primary-button';
import DangerButton from '../components/button/danger-button';
import * as BackgroundLocation from '../services/background-location';
import * as Directions from '../services/directions';

/**
 * <EventDetail />
 */
class EventDetail extends Component
{
    static navigationOptions = () => ({
        header: null,

        // Todo: android back button
        gesturesEnabled: !EventDetail.isRunning
    });

    constructor() {
        super();
        this._acceptQuest = this._acceptQuest.bind(this);
        this._openMaps = this._openMaps.bind(this);
        this._questSucceeded = this._questSucceeded.bind(this);
        this._rejectQuestWarn = this._rejectQuestWarn.bind(this);
        this._rejectQuest = this._rejectQuest.bind(this);
        this._renderfooter = this._renderfooter.bind(this);
    }

    get eventId() {
        return this.props.navigation.state.params.eventId;
    }

    get event() {
        return this.props.event.getIn(['events', this.eventId])
    }

    componentWillMount() {
        this._loadedQuest = false;
        this._directionsPolygon = [];
        EventDetail.isRunning = false;


        const latitude = this.event.getIn(['location', 'geocoords', 1]);
        const longitude = this.event.getIn(['location', 'geocoords', 0]);

        Directions
            .getDirections(this.props.location.get('latitude'), this.props.location.get('longitude'), latitude, longitude)
            .then(result => {
                try {
                    this._directionsPolygon = Polyline.decode(result.routes[0].overview_polyline.points);
                    this.setState({});
                }
                catch (ex) {
                    console.log('ex', ex);
                }
            })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.quest.get('currentQuest') && !this._loadedQuest) {
            const latitude = this.event.getIn(['location', 'geocoords', 1]);
            const longitude = this.event.getIn(['location', 'geocoords', 0]);

            BackgroundLocation
                .questTillLocation(latitude, longitude)
                .then(() => this._questSucceeded(nextProps.quest.get('currentQuest')));

            this._loadedQuest = true;
        }

        if (
            !nextProps.quest.get('isAccomplishingQuest')
            && this.props.quest.get('isAccomplishingQuest')
        ) {
            Alert.alert(
                'Mission complete',
                'Congratulations, you completed the quest successfully 💪',
                [
                    { text: 'OK', onPress: () => this.props.navigation.navigate('Dashboard')},
                ],
                { cancelable: false }
            );
            this.props.loadStats();
            this.props.loadMe();
        }

        if (
            !nextProps.quest.get('isRejectingQuest')
            && this.props.quest.get('isRejectingQuest')
        ) {
            this.props.navigation.navigate('Dashboard');
            this.props.loadStats();
            this.props.loadMe();
        }
    }

    _acceptQuest() {
        this.props.createQuest(this.eventId);
        EventDetail.isRunning = true;

        this.setState({});
    }

    _openMaps() {
        const latitude = this.event.getIn(['location', 'geocoords', 1]);
        const longitude = this.event.getIn(['location', 'geocoords', 0]);

        Platform.select({
            ios: () => {
                Linking.openURL('http://maps.apple.com/maps?daddr=' + latitude + ',' + longitude);
            },
            android: () => {
                Linking.openURL('http://maps.google.com/maps?daddr=' + latitude + ',' + longitude);
            }
        })();
    }

    _questSucceeded(quest) {
        EventDetail.isRunning = false;
        this.props.accomplishQuest(quest.get('_id'), quest.get('verificationKey'));
    }

    // Todo important: calculate credits
    _rejectQuestWarn() {
        Alert.alert(
            'Reject Quest',
            'Are you sure you want to reject this quest? You will lose 20 credits 😱',
            [
                { text: 'Cancel', onPress: () => {}, style: 'cancel' },
                { text: 'I don\'t care', onPress: this._rejectQuest },
            ],
            { cancelable: false }
        )
    }

    _rejectQuest() {
        this.props.rejectQuest(this.props.quest.get('_id'), this.props.quest.get('verificationKey'));
    }

    render() {
        const latitude = this.event.getIn(['location', 'geocoords', 1]);
        const longitude = this.event.getIn(['location', 'geocoords', 0]);

        return (
            <DirectionsMap
                directions={this._directionsPolygon}
                destination={[longitude, latitude]}
            >
                <EventDetailHeader
                    event={this.event}
                />
                {this._renderfooter()}
            </DirectionsMap>
        );
    }

    _renderfooter() {
        if (EventDetail.isRunning) {
            return (
                <Footer
                    style={getStyle('eventDetailFooter')}
                >
                    <View
                        style={getStyle('eventDetailFooter__danger')}
                    >
                        <DangerButton
                            onPress={this._rejectQuestWarn}
                        >
                            Reject
                        </DangerButton>
                    </View>
                    <PrimaryButton
                        onPress={this._openMaps}
                    >
                        Open Maps
                    </PrimaryButton>
                </Footer>
            )
        }

        return (
            <Footer
                style={getStyle('eventDetailFooter')}
            >
                <PrimaryButton
                    onPress={this._acceptQuest}
                >
                    Accept the quest
                </PrimaryButton>
            </Footer>
        )
    }
}

export default EventDetail;
