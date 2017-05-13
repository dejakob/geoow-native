import React, { Component } from 'react';
import AuthBackground from '../components/auth-background/auth-background';
import Footer from '../components/footer/footer';
import PrimaryButton from '../components/button/primary-button';
import SecondaryButton from '../components/button/secondary-button';
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
        this._addSlot = this._addSlot.bind(this);
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
                    <SecondaryButton
                        onPress={this._addSlot}
                    >
                        +
                    </SecondaryButton>
                </Footer>
            </AuthBackground>
        );
    }

    _save() {
        this.props.navigation.navigate('Preferences');
    }

    _addSlot() {

    }
}

export default Plan;
