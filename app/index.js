import React, { Component } from 'react';
import { connectStyler } from 'react-native-styler';
import { StackNavigator } from 'react-navigation';
import Auth from './auth';
import Register from './register';
import '../themes';

const App = StackNavigator({
    Auth: { screen: Auth },
    Register: { screen: Register }
}, {
    mode: 'modal'
});

export default connectStyler(<App />);
