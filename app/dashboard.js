import React, { Component } from 'react';
import MainBackground from '../components/main-background/main-background';
import Article from '../components/article/article';

/**
 * <Dashboard />
 */
class Dashboard extends Component
{
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <MainBackground>
                <Article>

                </Article>
            </MainBackground>
        );
    }
}

export default Dashboard;
