import * as EventActions from './event';
import * as AuthActions from './auth';
import * as UserActions from './user';

export default {
    ...AuthActions,
    ...EventActions,
    ...UserActions
};
