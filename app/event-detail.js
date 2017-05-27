import React, { Component } from 'react';
import { Platform, Linking } from 'react-native';
import Polyline from '@mapbox/polyline';
import { getStyle } from 'react-native-styler';
import DirectionsMap from '../components/directions-map/directions-map';
import EventDetailHeader from '../components/event-detail-header/event-detail-header';
import Footer from '../components/footer/footer';
import PrimaryButton from '../components/button/primary-button';
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
        this._questSucceeded = this._questSucceeded.bind(this);
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
                    console.log('first', result.routes[0]);
                    console.log('?', Polyline.decode(result.routes[0].overview_polyline.points));
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
            this.props.navigation.navigate('Dashboard');
            this.props.loadStats();
            this.props.loadMe();
        }
    }

    _acceptQuest() {
        this.props.createQuest(this.eventId);
        EventDetail.isRunning = true;

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
                <Footer
                    style={getStyle('eventDetailFooter')}
                >
                    <PrimaryButton
                        onPress={this._acceptQuest}
                    >
                        Accept the quest
                    </PrimaryButton>
                </Footer>
            </DirectionsMap>
        );
    }
}

export default EventDetail;
