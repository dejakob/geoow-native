import React, { Component } from 'react';
import Camera from 'react-native-camera';

/**
 * <Scan />
 */
class Scan extends Component
{
    constructor() {
        super();
        this._handleBarCodeRead = this._handleBarCodeRead.bind(this);
    }

    _handleBarCodeRead(result) {
        console.log('result', result);
    }

    render() {
        return (
            <Camera
                style={{ flex: 1 }}
                barCodeTypes={['qr']}
                onBarCodeRead={this._handleBarCodeRead}
            />
        )
    }
}

export default Scan;
