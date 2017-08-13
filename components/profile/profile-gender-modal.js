import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PartialModal from '../partial-modal/partial-modal';
import ProfileRow from './profile-row';

const GENDERS = {
    MALE: 'MALE',
    FEMALE: 'FEMALE'
};

/**
 * <ProfileGenderModal />
 */
class ProfileGenderModal extends Component
{
    render() {
        const rows = [
            <ProfileRow
                icon="gender-male"
                iconFamily="MaterialCommunityIcons"
            >
                <Text>Male</Text>
            </ProfileRow>,
            <ProfileRow
                icon="gender-female"
                iconFamily="MaterialCommunityIcons"
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
                style={{ borderBottomWidth: 0, borderBottomColor: 'transparent' }}
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
            </PartialModal>
        );
    }
}

export default ProfileGenderModal;
