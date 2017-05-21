import * as EventActions from './event';
import * as AuthActions from './auth';
import * as UserActions from './user';
import * as LocationActions from './location';

export default {
    ...AuthActions,
    ...EventActions,
    ...UserActions,
    ...LocationActions
};
