import React, { Component } from 'react';
import { connectStyler } from 'react-native-styler';
import { StackNavigator } from 'react-navigation';
import Auth from './auth';
import Register from './register';
import Plan from './plan';
import '../themes';

const App = StackNavigator({
    Auth: { screen: Auth },
    Register: { screen: Register },
    Plan: { screen: Plan }
}, {
    mode: 'modal'
});

export default connectStyler(<App />);
