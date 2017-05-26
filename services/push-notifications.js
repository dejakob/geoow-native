import OneSignal from 'react-native-onesignal';

let currentPushNotificationUserId = null;

function init() {
    OneSignal.addEventListener('opened', handleOpened);
    OneSignal.addEventListener('ids', handleIds);
}

function handleOpened(result) {
    const payload = result.notification.payload;
    console.log('notification opened', payload);
}

function handleIds(ids) {
    const { userId } = ids;

    currentPushNotificationUserId = userId;
    console.log('userId', userId);
}

function connect() {

}

export {
    init,
    connect
}