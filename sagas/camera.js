import Actions from '../actions';
import * as UserApi from '../api/user';
import { call, put } from 'redux-saga/effects';

function* uploadImage(action) {
    try {
        const { scanType, imagePath } = action;
        console.log('scanType', scanType);

        let savedImagePath = null;
        if (scanType === 'AVATAR') {
            savedImagePath = yield call(UserApi.uploadAvatar, imagePath);
        }

        console.log('saved image path', savedImagePath);

        yield put(Actions.uploadImageSuccess(savedImagePath));
    }
    catch (ex) {
        yield put(Actions.uploadImageFailed(ex));
    }
}

export {
    uploadImage
};
