import React, { Component } from 'react';
import PublicBackground from '../components/public-background/public-background';
import EventDetailHeader from '../components/event-detail-header/event-detail-header';

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
            </PublicBackground>
        );
    }
}

export default EventDetail;
