import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { getStyle } from 'react-native-styler';
import Camera from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { uploadAvatar } from '../../api/user';
import Touchable from '../button/touchable';
import './scan.style';

/**
 * <Scan />
 */
class Scan extends Component
{
    constructor() {
        super();
        this.handlePrimaryPress = this.handlePrimaryPress.bind(this);
    }

    handlePrimaryPress() {

        // Video is also possible with this lib! :)
        this.camera
            .capture()
            .then(result => {
                const { mediaUrl, path } = result;

                this.props.onCapture(path);

                // Todo can be both feed and avatar...
                console.log('UPLOAD AVATAR', path);
                uploadAvatar(path);
            })
    }

    render() {
        return (
            <View
                style={getStyle('scan__wrapper')}
            >
                <Camera
                    style={getStyle('scan__camera')}
                    barCodeTypes={['qr']}
                    onBarCodeRead={this.props.onBarCodeRead}
                    captureTarget={Camera.constants.CaptureTarget.disk}
                    ref={camera => this.camera = camera}
                    type="front"
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
                    <Touchable
                        onPress={this.handlePrimaryPress}
                    >
                        <View
                            style={getStyle('scan__footer__primary')}
                        >

                        </View>
                    </Touchable>
                    <View>

                    </View>
                </View>
            </View>
        );
    }
}

export default Scan;
