import React, { Component } from 'react';
import PublicBackground from '../components/public-background/public-background';
import EventDetailHeader from '../components/event-detail-header/event-detail-header';
import EventDetailDetails from '../components/event-detail-details/event-detail-details';
import Article from '../components/article/article';
import Footer from '../components/footer/footer';
import PrimaryButton from '../components/button/primary-button';

/**
 * <EventDetail />
 */
class EventDetail extends Component
{
    static navigationOptions = {
        header: null
    };

    get eventId() {
        return this.props.navigation.state.params.eventId;
    }

    get event() {
        return this.props.event.getIn(['events', this.eventId])
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
                    <PrimaryButton>
                        Accept the quest
                    </PrimaryButton>
                </Footer>
            </PublicBackground>
        );
    }
}

export default EventDetail;
