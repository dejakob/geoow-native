import React, { Component } from 'react';
import { Button, View, Text, DatePickerIOS } from 'react-native';
import PartialModal from '../partial-modal/partial-modal';

const DEFAULT_DATE = new Date('1992-12-16T10:000:00');

/**
 * <ProfileBirthdateModal />
 */
class ProfileBirthdateModal extends Component
{
    componentWillMount() {
        this.state = {
            date: this.props.date ? new Date(this.props.date) : DEFAULT_DATE
        }
    }

    componentWillReceiveProps(newProps) {
        this.state.date = newProps.date ? new Date(newProps.date) : DEFAULT_DATE;
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
                    onPress={() => this.props.onSubmit(this.state.date)}
                    title='OK'
                />
            </PartialModal>
        )
    }
}

export default ProfileBirthdateModal;