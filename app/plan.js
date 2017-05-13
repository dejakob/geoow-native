import moment from 'moment';
import React, { Component } from 'react';
import AuthBackground from '../components/auth-background/auth-background';
import Footer from '../components/footer/footer';
import PrimaryButton from '../components/button/primary-button';
import SecondaryButton from '../components/button/secondary-button';
import TimeTable from '../components/time-table/time-table';

const defaultSlots = [
    {
        from: moment().hour(9).minute(0).second(0).millisecond(0),
        till: moment().hour(18).minute(0).second(0).millisecond(0)
    },
    {
        from: moment().add(1, 'day').hour(9).minute(0).second(0).millisecond(0),
        till: moment().add(1, 'day').hour(18).minute(0).second(0).millisecond(0)
    },
    {
        from: moment().add(2, 'day').hour(9).minute(0).second(0).millisecond(0),
        till: moment().add(2, 'day').hour(18).minute(0).second(0).millisecond(0)
    },
    {
        from: moment().add(3, 'day').hour(9).minute(0).second(0).millisecond(0),
        till: moment().add(3, 'day').hour(18).minute(0).second(0).millisecond(0)
    },
    {
        from: moment().add(4, 'day').hour(9).minute(0).second(0).millisecond(0),
        till: moment().add(4, 'day').hour(18).minute(0).second(0).millisecond(0)
    },
];

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
                <TimeTable
                    slots={defaultSlots}
                />
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
