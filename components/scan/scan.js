import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { getStyle } from 'react-native-styler';
import Camera from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Touchable from '../button/touchable';
import './scan.style';

/**
 * <Scan />
 */
class Scan extends React.PureComponent
{
    constructor() {
        super();
        this.handlePrimaryPress = this.handlePrimaryPress.bind(this);
        this.renderLoadingOverlay = this.renderLoadingOverlay.bind(this);
    }

    componentWillMount() {
        this.state = {
            type: 'front'
        }
    }

    handlePrimaryPress() {

        // Video is also possible with this lib! :)
        this.camera
            .capture()
            .then(result => {
                const { mediaUrl, path } = result;

                this.props.onCapture(path);
            })
    }

    render() {
        let camera = null;

        if (!this.props.hideCam) {
            camera = (
                <Camera
                    style={getStyle('scan__camera')}
                    barCodeTypes={['qr']}
                    onBarCodeRead={this.props.onBarCodeRead}
                    captureTarget={Camera.constants.CaptureTarget.disk}
                    ref={camera => this.camera = camera}
                    type={this.state.type}
                />
            );
        }

        return (
            <View
                style={getStyle('scan__wrapper')}
            >
                {camera}

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
                    <Touchable
                        onPress={this.handlePrimaryPress}
                    >
                        <View
                            style={getStyle('scan__footer__primary')}
                        >

                        </View>
                    </Touchable>
                    <Touchable
                        onPress={() => this.setState({ type: this.state.type === 'front' ? 'back' : 'front' })}
                        style={getStyle('scan__footer__back')}
                    >
                        <Icon
                            name="swap-horiz"
                            color={StyleSheet.flatten(getStyle('header__icon')).color}
                            size={StyleSheet.flatten(getStyle('header__icon')).fontSize}
                        />
                    </Touchable>
                </View>
                {this.renderLoadingOverlay()}
            </View>
        );
    }

    renderLoadingOverlay() {
        if (!this.props.isBusy) {
            return null;
        }

        return (
            <View
                style={getStyle('scan__overlay')}
            >
                <ActivityIndicator
                    animating={true}
                    color="#ffffff"
                    size="large"
                />
            </View>
        );
    }
}

export default Scan;
