import React, { Component } from 'react';
import * as ArticleApi from '../api/article';
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

    componentWillMount() {
        this._stopScan = false;
    }

    _handleBarCodeRead({ type, data }) {
        if (!this._stopScan && type === 'QR_CODE') {
            this._stopScan = true;

            ArticleApi
                .loadByCode(data)
                .then(article => {

                })
                .catch(() => this._stopScan = false)
        }
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
