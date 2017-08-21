import Immutable from 'immutable';
import ACTIONS from '../constants/actions';

const defaultState = Immutable.fromJS({
    events: {},
    categories: [],

    isLoadingCategories: false,
    isLoadingEvent: false
});

function eventReducer(state = defaultState, action) {
    const { type } = action;

    switch (type) {
        case ACTIONS.EVENTS_CATEGORIES_LOAD:
            return loadCategories(state, action);

        case ACTIONS.EVENTS_CATEGORIES_LOAD_SUCCESS:
            return loadCategoriesSuccess(state, action);

        case ACTIONS.EVENTS_CATEGORIES_LOAD_FAILED:
            return loadCategoriesFailed(state, action);

        case ACTIONS.DISCOVER_LOAD_EVENTS_NEARBY_SUCCESS:
            return loadEventsSuccess(state, action);

        case ACTIONS.EVENTS_LOAD_BY_ID:
            return loadEventById(state, action);

        case ACTIONS.EVENTS_LOAD_BY_ID_SUCCESS:
            return loadEventByIdSuccess(state, action);

        case ACTIONS.EVENTS_LOAD_BY_ID_FAILED:
            return loadEventByIdFailed(state, action);
    }

    return state;
}

function loadCategories(state, action) {
    return state
        .set('isLoadingCategories', true);
}

function loadCategoriesSuccess(state, action) {
    return state
        .set('isLoadingCategories', false)
        .set('categories', Immutable.fromJS(action.categories));
}

function loadCategoriesFailed(state, action) {
    return state
        .set('isLoadingCategories', false);
}

function loadEventsSuccess(state, action) {
    return state
        .set('events', Immutable.Map(
            Immutable.fromJS(action.events).map(event =>
                [event.get('_id'), event]
            )
        ));
}

function loadEventById(state, action) {
    return state
        .set('isLoadingEvent', true)
}

function loadEventByIdSuccess(state, action) {
    return state
        .set('isLoadingEvent', false)
        .updateIn(['events', action.event._id], event =>
            (event || Immutable.fromJS({})).mergeDeep(Immutable.fromJS(action.event))
        );
}

function loadEventByIdFailed(state, action) {
    return state
        .set('isLoadingEvent', false);
}

export default eventReducer;
