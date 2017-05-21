import React, { Component } from 'react';
import PublicBackground from '../components/public-background/public-background';
import DiscoverMap from '../components/discover-map/discover-map';

/**
 * <Discover />
 */
class Discover extends Component
{
    static navigationOptions = {
        header: null,
        gesturesEnabled: false
    };

    componentWillMount() {
        this.props.loadGeolocation();
    }

    render() {
        console.log('lat', this.props.location.get('latitude'));

        return (
            <PublicBackground>
                <DiscoverMap
                    latitude={this.props.location.get('latitude')}
                    longitude={this.props.location.get('longitude')}
                />
            </PublicBackground>
        );
    }
}

export default Discover;
