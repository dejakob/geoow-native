import * as EventActions from './event';
import * as AuthActions from './auth';
import * as UserActions from './user';
import * as LocationActions from './location';
import * as DiscoverActions from './discover';

export default {
    ...AuthActions,
    ...EventActions,
    ...UserActions,
    ...LocationActions,
    ...DiscoverActions
};
