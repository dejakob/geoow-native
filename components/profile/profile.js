import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, ScrollView, StyleSheet, Text, TextInput, Platform } from 'react-native';
import { getStyle } from 'react-native-styler';
import HumanNames from 'human-names';
import ProfileSousHeader from './profile-sous-header';
import InfoText from '../info-text/info-text';
import Scan from '../scan/scan';
import ProfileRow from './profile-row';
import ProfileGenderModal from './profile-gender-modal';
import ProfileBirthdateModal from './profile-birthdate-modal';
import './profile.style';

const GENDERS = {
    MALE: 'MALE',
    FEMALE: 'FEMALE'
};

/**
 * <Profile />
 */
class Profile extends Component
{
    constructor() {
        super();
        this.chooseAvatar = this.chooseAvatar.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.showGenderModal = this.showGenderModal.bind(this);
        this.showDatepicker = this.showDatepicker.bind(this);
    }

    componentWillMount() {
        this.state = {
            name: '',
            birthDate: null,
            genderGuess: null,
            genderModalVisible: false,
            iosDatepickerVisible: false
        }
    }

    chooseAvatar() {
        this.props.navigation.navigate('Scan', { type: 'AVATAR' })
    }

    handleNameChange(name) {
        this.setState({ name });

        const isMaleName = HumanNames.maleEn.some(maleName => maleName.toLowerCase() === name.toLowerCase());
        const isFemaleName = HumanNames.femaleEn.some(femaleName => femaleName.toLowerCase() === name.toLowerCase());

        if (isMaleName && !isFemaleName) {
            this.setState({ genderGuess: GENDERS.MALE });
        }

        if (isFemaleName && !isMaleName) {
            this.setState({ genderGuess: GENDERS.FEMALE });
        }
    }

    showGenderModal() {
        this.setState({
            genderModalVisible: true
        });
    }

    showDatepicker() {
        if (Platform.OS === 'ios') {
            this.setState({
                iosDatepickerVisible: true
            });
        }
        else if (Platform.OS === 'android') {
            // Todo
            // Android date picker
        }
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
                        iconFamily="MaterialIcons"
                    >
                        <TextInput
                            placeholder="Your name"
                            value={this.state.name}
                            onChangeText={this.handleNameChange}
                            style={getStyle('profile__list__item__text')}
                            placeholderTextColor={StyleSheet.flatten(getStyle('profile__list__item__placeholder')).color}
                        />
                    </ProfileRow>
                    <ProfileRow
                        icon="gender-male-female"
                        iconFamily="MaterialCommunityIcons"
                        onPress={this.showGenderModal}
                    >
                        <Text
                            style={getStyle('profile__list__item__placeholder')}
                        >
                            Gender
                        </Text>
                    </ProfileRow>
                    <ProfileRow
                        icon="birthday-cake"
                        iconFamily="FontAwesomeIcons"
                        onPress={this.showDatepicker}
                    >
                        <Text
                            style={getStyle('profile__list__item__placeholder')}
                        >
                            Birthday
                        </Text>
                    </ProfileRow>
                    <ProfileRow
                        icon="email-outline"
                        iconFamily="MaterialCommunityIcons"
                    >
                        <TextInput
                            placeholder='Email'
                            defaultValue={this.props.user.getIn(['me', 'email'])}
                            style={getStyle('profile__list__item__text')}
                            placeholderTextColor={StyleSheet.flatten(getStyle('profile__list__item__placeholder')).color}
                        />
                    </ProfileRow>
                    <InfoText>By using Geoow, you agree to the Terms of Service, which can be found on geoow.com/terms</InfoText>
                </ScrollView>
                <ProfileGenderModal
                    visible={this.state.genderModalVisible}
                    guess={this.state.genderGuess}
                    gender={this.state.gender}
                    onHide={() => this.setState({ genderModalVisible: false })}
                />
                <ProfileBirthdateModal
                    visible={this.state.iosDatepickerVisible}
                    date={this.state.birthDate}
                    onHide={() => this.setState({ iosDatepickerVisible: false })}
                />
            </View>
        );
    }
}

export default Profile;
