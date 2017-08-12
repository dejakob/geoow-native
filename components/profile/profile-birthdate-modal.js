import React, { Component } from 'react';
import { Button, View, Text, DatePickerIOS } from 'react-native';
import PartialModal from '../partial-modal/partial-modal';

/**
 * <ProfileBirthdateModal />
 */
class ProfileBirthdateModal extends Component
{
    componentWillMount() {
        this.state = {
            date: new Date()
        }
    }

    render() {
        return (
            <PartialModal
                transparent
                animationType="fade"
                visible={this.props.visible}
                onHide={this.props.onHide}
            >
                <DatePickerIOS
                    mode='date'
                    date={this.state.date}
                    onDateChange={date => this.setState({ date })}
                />
                <Button
                    onPress={() => {}}
                    title='OK'
                />
            </PartialModal>
        )
    }
}

export default ProfileBirthdateModal;
