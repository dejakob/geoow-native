import React, { Component } from 'react';
import PublicBackground from '../components/public-background/public-background';
import DiscoverMap from '../components/discover-map/discover-map';

/**
 * <Discover />
 */
class Discover extends Component
{
    static navigationOptions = {
        header: null
    };

    componentWillMount() {
        this.props.loadGeolocation();
    }

    render() {
        return (
            <PublicBackground>
                <DiscoverMap

                />
            </PublicBackground>
        );
    }
}

export default Discover;
