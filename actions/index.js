import * as EventActions from './event';
import * as AuthActions from './auth';
import * as UserActions from './user';
import * as LocationActions from './location';
import * as DiscoverActions from './discover';
import * as QuestActions from './quest';
import * as OrderActions from './order';

export default {
    ...AuthActions,
    ...EventActions,
    ...UserActions,
    ...LocationActions,
    ...DiscoverActions,
    ...QuestActions,
    ...OrderActions
};
