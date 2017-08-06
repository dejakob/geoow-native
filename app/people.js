import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { getStyle } from 'react-native-styler';
import { GiftedChat } from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MainBackground from '../components/main-background/main-background';
import PeopleNearby from '../components/people-nearby/people-nearby';
import SmallTitle from '../components/small-title/small-title';

/**
 * <People />
 */
class People extends Component
{
    static navigationOptions = {
        header: null,
        tabBarIcon: ({ tintColor }) => <Icon name="people" style={[getStyle('tabBar__icon'), { color: tintColor }]} />
    };

    render() {
        const messages = [{
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://facebook.github.io/react/img/logo_og.png',
            },
        }];

        return (
            <MainBackground>
                <SmallTitle>People nearby</SmallTitle>
                <PeopleNearby

                />
                <Text>Gifted chat view</Text>
                <Text>'Scan to become friends'</Text>
                <GiftedChat
                    messages={messages}
                    onSend={(messages) => this.onSend(messages)}
                    user={{
                      _id: 1,
                    }}
                />
            </MainBackground>
        )
    }
}

export default People;
