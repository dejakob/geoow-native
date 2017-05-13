import React, { Component } from 'react';
import { connectStyler } from 'react-native-styler';

import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
    Main: { screen: MainScreen }
});

export default () => connectStyler(<App />);
