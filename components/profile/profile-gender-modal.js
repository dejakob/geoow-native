import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PartialModal from '../partial-modal/partial-modal';
import ProfileRow from './profile-row';

const GENDERS = {
    MALE: 'MALE',
    FEMALE: 'FEMALE',
    OTHER: 'OTHER'
};

/**
 * <ProfileGenderModal />
 */
class ProfileGenderModal extends Component
{
    constructor() {
        super();
        this.selectGender = this.selectGender.bind(this);
    }

    componentWillMount() {
        this.state = { selectedGender: this.props.gender };
    }

    selectGender(gender) {
        this.setState({
            selectedGender: gender
        });
    }

    render() {
        const rows = [
            <ProfileRow
                icon="gender-male"
                iconFamily="MaterialCommunityIcons"
                onPress={() => this.selectGender(GENDERS.MALE)}
                selected={this.state.selectedGender === GENDERS.MALE}
            >
                <Text>Male</Text>
            </ProfileRow>,
            <ProfileRow
                icon="gender-female"
                iconFamily="MaterialCommunityIcons"
                onPress={() => this.selectGender(GENDERS.FEMALE)}
                selected={this.state.selectedGender === GENDERS.FEMALE}
            >
                <Text>Female</Text>
            </ProfileRow>
        ];

        if (this.props.guess === GENDERS.FEMALE) {
            rows.reverse();
        }

        /**
         * Maybe this should open a subset of all other genders
         */
        rows.push(
            <ProfileRow
                icon="gender-transgender"
                iconFamily="MaterialCommunityIcons"
                onPress={() => this.selectGender(GENDERS.OTHER)}
                selected={this.state.selectedGender === GENDERS.OTHER}
            >
                <Text>Other</Text>
            </ProfileRow>
        );

        return (
            <PartialModal
                transparent
                animationType="fade"
                visible={this.props.visible}
                onHide={this.props.onHide}
            >
                {rows}
                <Button
                    onPress={() => this.props.onSubmit(this.state.selectedGender)}
                    title="OK"
                />
            </PartialModal>
        );
    }
}

export default ProfileGenderModal;
