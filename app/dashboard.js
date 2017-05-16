import React, { Component } from 'react';
import MainBackground from '../components/main-background/main-background';
import Article from '../components/article/article';
import DashboardGraph from '../components/dashboard-graph/dashboard-graph';
import DashboardList from '../components/dashboard-list/dashboard-list';

/**
 * <Dashboard />
 */
class Dashboard extends Component
{
    static navigationOptions = {
        headerTitle: 'Dashboard'
    };

    render() {
        return (
            <MainBackground>
                <Article>
                    <DashboardGraph
                        score={this.props.user.getIn(['me', 'score'])}
                    />
                    <DashboardList
                        stats={this.props.user.getIn(['me', 'stats'])}
                    />
                </Article>
            </MainBackground>
        );
    }
}

export default Dashboard;
