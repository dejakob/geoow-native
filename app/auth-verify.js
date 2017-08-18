import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

class AuthVerify extends Component
{
    componentWillMount() {
        try {
            const { verificationToken } = this.props.navigation.state.params;
            this.props.authVerify(verificationToken);
        }
        catch (ex) {
            console.log(ex);
        }
    }

    render() {
        return (
            <View>
                <ActivityIndicator
                    size="large"
                />
            </View>
        );
    }
}

export default AuthVerify;