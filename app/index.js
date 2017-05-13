import React, { Component } from 'react';
import { connectStyler } from 'react-native-styler';
import { StackNavigator } from 'react-navigation';
import Auth from './auth';
import '../themes';

const App = StackNavigator({
    Auth: { screen: Auth }
});

export default connectStyler(<App />);
