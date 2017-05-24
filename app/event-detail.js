import React, { Component } from 'react';
import { Platform, Linking } from 'react-native';
import PublicBackground from '../components/public-background/public-background';
import EventDetailHeader from '../components/event-detail-header/event-detail-header';
import EventDetailDetails from '../components/event-detail-details/event-detail-details';
import Article from '../components/article/article';
import Footer from '../components/footer/footer';
import PrimaryButton from '../components/button/primary-button';
import * as BackgroundLocation from '../services/background-location';

/**
 * <EventDetail />
 */
class EventDetail extends Component
{
    static navigationOptions = {
        header: null
    };

    constructor() {
        super();
        this._acceptQuest = this._acceptQuest.bind(this);
    }

    get eventId() {
        return this.props.navigation.state.params.eventId;
    }

    get event() {
        return this.props.event.getIn(['events', this.eventId])
    }

    _acceptQuest() {
        this.props.createQuest(this.eventId);

        const latitude = this.event.getIn(['location', 'geocoords', 1]);
        const longitude = this.event.getIn(['location', 'geocoords', 0]);

        BackgroundLocation
            .questTillLocation(latitude, longitude)
            .then(() => alert('congratulations, you got there...'));

        //
        // Platform.select({
        //     ios: () => {
        //         Linking.openURL('http://maps.apple.com/maps?daddr=' + latitude + ',' + longitude);
        //     },
        //     android: () => {
        //         Linking.openURL('http://maps.google.com/maps?daddr=' + latitude + ',' + longitude);
        //     }
        // })();
    }

    render() {
        console.log('event', this.event.toJS());

        return (
            <PublicBackground>
                <EventDetailHeader
                    event={this.event}
                />
                <Article>
                    <EventDetailDetails
                        event={this.event}
                    />
                </Article>
                <Footer>
                    <PrimaryButton
                        onPress={this._acceptQuest}
                    >
                        Accept the quest
                    </PrimaryButton>
                </Footer>
            </PublicBackground>
        );
    }
}

export default EventDetail;
