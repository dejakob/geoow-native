import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PartialModal from '../partial-modal/partial-modal';
import ProfileRow from './profile-row';

/**
 * <ProfileGenderModal />
 */
class ProfileGenderModal extends Component
{
    // Sort gender based on guess and random
    render() {
        return (
            <PartialModal
                transparent
                animationType="fade"
                visible={this.props.visible}
                onHide={this.props.onHide}
            >
                <ProfileRow
                    icon="gender-male"
                    iconFamily="MaterialCommunityIcons"
                >
                    <Text>Male</Text>
                </ProfileRow>
                <ProfileRow
                    icon="gender-female"
                    iconFamily="MaterialCommunityIcons"
                >
                    <Text>Female</Text>
                </ProfileRow>
                <ProfileRow
                    icon="gender-transgender"
                    iconFamily="MaterialCommunityIcons"
                    style={{ borderBottomWidth: 0, borderBottomColor: 'transparent' }}
                >
                    <Text>Other</Text>
                </ProfileRow>
            </PartialModal>
        );
    }
}

export default ProfileGenderModal;
