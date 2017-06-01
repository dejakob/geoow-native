import React, { Component } from 'react';
import { Alert } from 'react-native';
import * as ArticleApi from '../api/article';
import Camera from 'react-native-camera';

/**
 * <Scan />
 */
class Scan extends Component
{
    static navigationOptions = {
        header: null
    };

    constructor() {
        super();
        this._handleBarCodeRead = this._handleBarCodeRead.bind(this);
    }

    componentWillMount() {
        this._stopScan = false;
    }

    componentWillReceiveProps(nextProps) {
        if (
            this.props.order.get('isPaying') &&
            !nextProps.order.get('isPaying')
        ) {
            this.props.loadMe();
            this.props.navigation.goBack();
        }
    }

    _handleBarCodeRead({ type, data }) {
        if (!this._stopScan && type === 'QR_CODE') {
            this._stopScan = true;

            ArticleApi
                .loadByCode(data)
                .then(article => {
                    Alert.alert(
                        'Buy with Geoow credits',
                        `Are you sure you want to spend ${article.price} credits on ${article.title}?`,
                        [
                            { text: 'Hell no', onPress: () => this._stopScan = false, style: 'cancel' },
                            { text: 'Yup!', onPress: () => this.props.buy(article._id) },
                        ],
                        { cancelable: false }
                    )
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
