import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, ScrollView, StyleSheet, TextInput } from 'react-native';
import { getStyle } from 'react-native-styler';
import ProfileSousHeader from './profile-sous-header';
import InfoText from '../info-text/info-text';
import Scan from '../scan/scan';
import ProfileRow from './profile-row';
import './profile.style';

/**
 * <Profile />
 */
class Profile extends Component
{
    constructor() {
        super();
        this.chooseAvatar = this.chooseAvatar.bind(this);
    }

    render() {
        return (
            <View
                style={getStyle('profile')}
            >
                <ProfileSousHeader
                    avatar={this.props.user.getIn(['me', 'avatar'])}
                    chooseAvatar={this.chooseAvatar}
                />
                <ScrollView
                    style={getStyle('profile__list')}
                >
                    <ProfileRow
                        icon="person-outline"
                    >
                        <TextInput
                            placeholder='Your name'
                        />
                    </ProfileRow>
                    <InfoText>You are registered with {this.props.user.getIn(['me', 'email'])}</InfoText>
                    <InfoText>By using Geoow, you agree to the Terms of Service, which can be found on geoow.com/terms</InfoText>
                </ScrollView>
            </View>
        );
    }
    chooseAvatar() {
        this.props.navigation.navigate('Scan', { type: 'AVATAR' })
    }
}

export default Profile;
