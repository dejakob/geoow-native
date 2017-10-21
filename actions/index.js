import * as AuthActions from './auth';
import * as UserActions from './user';
import * as LocationActions from './location';
import * as GameBoardActions from './game-board';

export default {
    ...AuthActions,
    ...UserActions,
    ...LocationActions,
    ...GameBoardActions
};
