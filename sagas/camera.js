import Actions from '../actions';
import * as UserApi from '../api/user';
import * as FeedApi from '../api/feed';
import store from '../services/store';
import { call, put } from 'redux-saga/effects';

/**
 * Upload image
 * @param {Object} action
 */
function* uploadImage(action) {
    try {
        const { scanType, imagePath } = action;

        let savedImagePath = null;

        if (scanType === 'AVATAR') {
            const result = yield call(UserApi.uploadAvatar, imagePath);
            savedImagePath = result.path;
        }
        else {
            const location = store.getState().location;
            yield call(
                FeedApi.postImage,
                imagePath,
                location.get('latitude'),
                location.get('longitude')
            );
        }

        yield put(Actions.uploadImageSuccess(savedImagePath));
    }
    catch (ex) {
        console.log(ex);
        yield put(Actions.uploadImageFailed(ex));
    }
}

export {
    uploadImage
};
