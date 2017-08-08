import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { getStyle } from 'react-native-styler';
import Camera from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Touchable from '../button/touchable';
import './scan.style';

/**
 * <Scan />
 */
class Scan extends Component
{
    render() {
        return (
            <View
                style={getStyle('scan__wrapper')}
            >
                <Camera
                    style={getStyle('scan__camera')}
                    barCodeTypes={['qr']}
                    onBarCodeRead={this.props.onBarCodeRead}
                />

                <View
                    style={getStyle('scan__footer')}
                >
                    <Touchable
                        onPress={() => this.props.goBack()}
                        style={getStyle('scan__footer__back')}
                    >
                        <Icon
                            name="arrow-back"
                            color={StyleSheet.flatten(getStyle('header__icon')).color}
                            size={StyleSheet.flatten(getStyle('header__icon')).fontSize}
                        />
                    </Touchable>
                    <View
                        style={getStyle('scan__footer__primary')}
                    >

                    </View>
                    <View>

                    </View>
                </View>
            </View>
        );
    }
}

export default Scan;
