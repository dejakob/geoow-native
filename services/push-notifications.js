import OneSignal from 'react-native-onesignal';

let currentPushNotificationUserId = null;

function init() {
    OneSignal.addEventListener('opened', handleOpened);
    OneSignal.addEventListener('ids', handleIds);
}

function handleOpened(result) {
    const payload = result.notification.payload;
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