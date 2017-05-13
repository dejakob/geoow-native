import React, { Component } from 'react';
import AuthBackground from '../components/auth-background/auth-background';
import Footer from '../components/footer/footer';
import PrimaryButton from '../components/button/primary-button';
import TimeTable from '../components/time-table/time-table';

/**
 * <Plan />
 */
class Plan extends Component
{
    static navigationOptions = {
        header: null
    };

    constructor() {
        super();

        this._save = this._save.bind(this);
    }

    render() {
        return (
            <AuthBackground>
                <TimeTable />
                <Footer>
                    <PrimaryButton
                        onPress={this._save}
                    >
                        SAVE
                    </PrimaryButton>
                </Footer>
            </AuthBackground>
        );
    }

    _save() {
        this.props.navigation.navigate('Preferences');
    }
}

export default Plan;
