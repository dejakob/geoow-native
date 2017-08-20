import * as EventActions from './event';
import * as AuthActions from './auth';
import * as UserActions from './user';
import * as LocationActions from './location';
import * as DiscoverActions from './discover';
import * as QuestActions from './quest';
import * as OrderActions from './order';
import * as DiaryActions from './diary';
import * as PeopleActions from './people';
import * as ProfileActions from './profile';
import * as CameraActions from './camera';
import * as MessageActions from './message';

export default {
    ...AuthActions,
    ...EventActions,
    ...UserActions,
    ...LocationActions,
    ...DiscoverActions,
    ...QuestActions,
    ...OrderActions,
    ...DiaryActions,
    ...PeopleActions,
    ...ProfileActions,
    ...CameraActions,
    ...MessageActions
};
