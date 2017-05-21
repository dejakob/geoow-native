import React, { Component } from 'react';
import PublicBackground from '../components/public-background/public-background';

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

            </PublicBackground>
        );
    }
}

export default EventDetail;
