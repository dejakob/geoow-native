import React, { Component } from 'react';
import AuthVerifyComponent from '../components/auth-verify/auth-verify';

class AuthVerify extends React.PureComponent
{
    static navigationOptions = {
        header: null
    };

    componentWillMount() {
        try {
            const { verificationToken } = this.props.navigation.state.params;
            this.props.authVerify(verificationToken);
        }
        catch (ex) {
            console.log(ex);
        }
    }

    componentWillReceiveProps(newProps) {
        try {
            const { verificationToken } = newProps.navigation.state.params;
            this.props.authVerify(verificationToken);
        }
        catch (ex) {
            console.log(ex);
        }
    }

    render() {
        return (
            <AuthVerifyComponent
                {...this.props}
            />
        );
    }
}

export default AuthVerify;