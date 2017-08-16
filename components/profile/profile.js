import moment from 'moment';
import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, ScrollView, StyleSheet, Text, TextInput, Platform, DatePickerAndroid } from 'react-native';
import { getStyle } from 'react-native-styler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HumanNames from 'human-names';
import ProfileSousHeader from './profile-sous-header';
import InfoText from '../info-text/info-text';
import Scan from '../scan/scan';
import ProfileRow from './profile-row';
import ProfileGenderModal from './profile-gender-modal';
import ProfileBirthdateModal from './profile-birthdate-modal';
import Touchable from '../button/touchable';
import './profile.style';

const GENDERS = {
    MALE: 'MALE',
    FEMALE: 'FEMALE',
    OTHER: 'OTHER'
};

const maleNames = [
    ...HumanNames.maleEn,
    ...HumanNames.maleIt,
    ...HumanNames.maleFr,
    ...HumanNames.maleEs,
    ...HumanNames.maleNl
];
const femaleNames = [
    ...HumanNames.femaleEn,
    ...HumanNames.femaleIt,
    ...HumanNames.femaleFr,
    ...HumanNames.femaleEs,
    ...HumanNames.femaleNl
];

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
        this.selectGender = this.selectGender.bind(this);
        this.selectBirthdate = this.selectBirthdate.bind(this);
        this.syncData = this.syncData.bind(this);
    }

    get selectedGender() {
        if (this.state.gender === GENDERS.MALE) {
            return 'Male';
        }
        else if (this.state.gender === GENDERS.FEMALE) {
            return 'Female';
        }
        else if (this.state.gender === GENDERS.OTHER) {
            return 'Other';
        }

        return 'Gender';
    }

    get birthDate() {
        if (!this.state.birthDate) {
            return 'Date of birth';
        }

        return moment(this.state.birthDate).format('DD/MM/YYYY');
    }

    componentWillMount() {
        this.state = {
            name: this.props.user.getIn(['me', 'name']) || '',
            genderGuess: null,
            genderModalVisible: false,
            iosDatepickerVisible: false,
            gender: this.props.user.getIn(['me', 'gender']) || null,
            birthDate: this.props.user.getIn(['me', 'birthDate']) || null
        }
    }

    componentWillReceiveProps(newProps) {
        if (this.state.name === '' && newProps.user.getIn(['me', 'name'])) {
            this.state.name = newProps.user.getIn(['me', 'name']);
        }

        if (!this.state.gender && newProps.user.getIn(['me', 'gender'])) {
            this.state.gender = newProps.user.getIn(['me', 'gender']);
        }

        if (!this.state.birthDate && newProps.user.getIn(['me', 'birthDate'])) {
            this.state.birthDate = newProps.user.getIn(['me', 'birthDate']);
        }
    }

    chooseAvatar() {
        this.props.navigation.navigate('Scan', { type: 'AVATAR' })
    }

    handleNameChange(name) {
        this.setState({ name });

        const isMaleName = maleNames.some(maleName => maleName.toLowerCase() === name.toLowerCase());
        const isFemaleName = femaleNames.some(femaleName => femaleName.toLowerCase() === name.toLowerCase());

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

    async showDatepicker() {
        if (Platform.OS === 'ios') {
            this.setState({
                iosDatepickerVisible: true
            });
        }
        else if (Platform.OS === 'android') {
            try {
                const {action, year, month, day} = await DatePickerAndroid.open({
                    date: this.state.birthDate || new Date()
                });
                if (action !== DatePickerAndroid.dismissedAction) {
                    this.selectBirthdate(new Date(year, month, day));
                }
            } catch ({code, message}) {
                console.warn('Cannot open date picker', message);
            }
        }
    }

    selectGender(gender) {
        this.setState({ gender, genderModalVisible: false });
        setTimeout(() => this.syncData(), 400);
    }

    selectBirthdate(birthDate) {
        this.setState({
            birthDate: birthDate.getTime(),
            iosDatepickerVisible: false
        });
        setTimeout(() => this.syncData(), 400);
    }

    syncData() {
        this.props.profileUpdate({
            name: this.state.name,
            gender: this.state.gender,
            birthDate: this.state.birthDate
        })
    }

    render() {
        return (
            <View
                style={getStyle('profile')}
            >
                <ProfileSousHeader
                    avatar={this.props.user.getIn(['me', 'avatar'])}
                    score={this.props.user.getIn(['me', 'score'])}
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
                            onBlur={this.syncData}
                            style={getStyle('profile__list__item__text')}
                            placeholderTextColor={StyleSheet.flatten(getStyle('profile__list__item__placeholder')).color}
                            underlineColorAndroid="transparent"
                        />
                    </ProfileRow>
                    <ProfileRow
                        icon="gender-male-female"
                        iconFamily="MaterialCommunityIcons"
                        onPress={this.showGenderModal}
                    >
                        <Text
                            style={this.state.gender === null ? getStyle('profile__list__item__placeholder') : getStyle('profile__list__item__text')}
                        >
                            {this.selectedGender}
                        </Text>
                    </ProfileRow>
                    <ProfileRow
                        icon="birthday-cake"
                        iconFamily="FontAwesomeIcons"
                        onPress={this.showDatepicker}
                    >
                        <Text
                            style={this.state.birthDate === null ? getStyle('profile__list__item__placeholder') : getStyle('profile__list__item__text')}
                        >
                            {this.birthDate}
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
                            editable={false}
                            underlineColorAndroid="transparent"
                        />
                    </ProfileRow>
                    <InfoText>By using Geoow, you agree to the Terms of Service, which can be found on geoow.com/terms</InfoText>
                </ScrollView>
                <ProfileGenderModal
                    visible={this.state.genderModalVisible}
                    guess={this.state.genderGuess}
                    gender={this.state.gender}
                    onHide={() => this.setState({ genderModalVisible: false })}
                    onSubmit={this.selectGender}
                />
                <ProfileBirthdateModal
                    visible={this.state.iosDatepickerVisible}
                    date={this.state.birthDate}
                    onHide={() => this.setState({ iosDatepickerVisible: false })}
                    onSubmit={this.selectBirthdate}
                />
                <Touchable
                    onPress={() => this.props.navigation.goBack()}
                    style={getStyle('profile__backButton')}
                >
                    <Icon
                        name="arrow-back"
                        color={StyleSheet.flatten(getStyle('header__icon')).color}
                        size={StyleSheet.flatten(getStyle('header__icon')).fontSize}
                    />
                </Touchable>
            </View>
        );
    }
}

export default Profile;
