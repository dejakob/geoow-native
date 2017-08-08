import React, { Component } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { getStyle } from 'react-native-styler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ArticleApi from '../api/article';
import ScanComponent from '../components/scan/scan';

/**
 * <Scan />
 */
class Scan extends Component
{
    static navigationOptions = props => ({
        header: null,
        gesturesEnabled: false,
        tabBarIcon: ({ tintColor }) => <Icon name="camera-iris" style={[getStyle('tabBar__icon'), { color: tintColor }]} />,
        tabBarVisible: false
    });

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
            <ScanComponent
                goBack={() => this.props.navigation.navigate('Dashboard')}
                onBarCodeRead={this._handleBarCodeRead}
                onCapture={() => {}}
            />
        )
    }
}

export default Scan;
