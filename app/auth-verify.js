import React, { Component } from 'react';
import AuthVerifyComponent from '../components/auth-verify/auth-verify';

class AuthVerify extends Component
{
    static navigationOptions = {
        header: null
    };

    constructor() {
        super();
        this.handleLink = this.handleLink.bind(this);
    }

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

    handleLink(link) {
        const verificationToken = link.trim().replace('geoow://auth/', '');
        this.props.authVerify(verificationToken);
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