import React, { Component } from 'react';
import { Alert, StyleSheet, View, PermissionsAndroid, Platform } from 'react-native';
import { getStyle } from 'react-native-styler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ArticleApi from '../api/article';
import ScanComponent from '../components/scan/scan';

/**
 * <Scan />
 */
class Scan extends React.PureComponent
{
    static navigationOptions = props => ({
        header: null,
        gesturesEnabled: false,
        tabBarIcon: ({ tintColor }) => <Icon name="camera-iris" style={[getStyle('tabBar__icon'), { color: tintColor }]} />,
        tabBarVisible: false
    });

    static TYPES = {
        AVATAR: 'AVATAR',
        FEED: 'FEED'
    };

    constructor() {
        super();

        this.state = {
            showCam: false
        };

        this.handleBarCodeRead = this.handleBarCodeRead.bind(this);
        this.handleCapture = this.handleCapture.bind(this);
        this.requestCameraPermission = this.requestCameraPermission.bind(this);
    }

    get type() {
        if (
            this.props.navigation.state.params &&
            typeof this.props.navigation.state.params.type === 'string' &&
            Object.keys(Scan.TYPES).indexOf(this.props.navigation.state.params.type) > -1
        ) {
            return this.props.navigation.state.params.type;
        }

        return Scan.TYPES.FEED;
    }

    componentWillMount() {
        this._stopScan = false;
        this.state = {
            isUploading: false
        };
        this.requestCameraPermission();
    }

    componentWillReceiveProps(nextProps) {
        if (
            this.props.order.get('isPaying') &&
            !nextProps.order.get('isPaying')
        ) {
            this.props.loadMe();
            this.props.navigation.goBack();
        }

        if (nextProps.user.getIn(['me', 'avatar']) !== this.props.user.getIn(['me', 'avatar'])) {
            this.state.isUploading = false;
            this.props.navigation.navigate('Dashboard');
        }
        else if (nextProps.user.getIn(['me', 'stats']).count() !== this.props.user.getIn(['me', 'stats']).count()) {
            this.state.isUploading = false;
            this.props.loadMe();
            this.props.navigation.navigate('Dashboard');
        }
    }

    async requestCameraPermission() {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        'title': 'Cool Photo App Camera Permission',
                        'message': 'Cool Photo App needs access to your camera ' +
                        'so you can take awesome pictures.'
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    this.setState({ showCam: true });
                } else {
                    console.log("Camera permission denied")
                }
            } catch (err) {
                console.warn(err)
            }
        }
        else {
            this.setState({ showCam: true });
        }
    }

    handleBarCodeRead({ type, data }) {
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

    handleCapture(path) {
        this.setState({ isUploading: true });
        this.props.uploadImage(this.type, path);
    }

    render() {
        return (
            <ScanComponent
                goBack={() => this.props.navigation.navigate('Dashboard')}
                onBarCodeRead={this.handleBarCodeRead}
                onCapture={this.handleCapture}
                isBusy={this.state.isUploading}
                hideCam={!this.state.showCam}
            />
        )
    }
}

export default Scan;
