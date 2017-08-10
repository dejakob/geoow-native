import React, { Component } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { getStyle } from 'react-native-styler';
import Avatar from '../avatar/avatar';
import InfoText from '../info-text/info-text';
import Scan from '../scan/scan';
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
                <TouchableWithoutFeedback
                    onPress={this.chooseAvatar}
                >
                    <View>
                        <Avatar
                            image={this.props.user.getIn(['me', 'avatar'])}
                        />
                    </View>
                </TouchableWithoutFeedback>
                <InfoText>You are registered with {this.props.user.getIn(['me', 'email'])}</InfoText>
                <InfoText>By using Geoow, you agree to the Terms of Service, which can be found on geoow.com/terms</InfoText>
            </View>
        );
    }

    chooseAvatar() {
        this.props.navigation.navigate('Scan', { type: 'AVATAR' })
    }
}

export default Profile;
