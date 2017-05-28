import OneSignal from 'react-native-onesignal';
import { NavigationActions } from 'react-navigation';
import * as Router from '../services/router';

let currentPushNotificationUserId = null;

function init() {
    OneSignal.inFocusDisplaying(2);
    OneSignal.addEventListener('opened', handleOpened);
    OneSignal.addEventListener('ids', handleIds);
}

function handleOpened(result) {
    const payload = result.notification.payload;

    if (payload.additionalData && typeof payload.additionalData.event === 'string') {
        Router.getRouter().dispatch({
            type: NavigationActions.NAVIGATE,
            routeName: 'EventDetail',
            params: { eventId: payload.additionalData.event, autoStart: true }
        });
    }
}

function handleIds(ids) {
    const { userId } = ids;

    currentPushNotificationUserId = userId;
}

function getCurrentId() {
    return currentPushNotificationUserId;
}

export {
    init,
    getCurrentId
}