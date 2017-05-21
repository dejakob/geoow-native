import Immutable from 'immutable';
import ACTIONS from '../constants/actions';

const defaultState = Immutable.fromJS({
    events: {},
    categories: [],

    isLoadingCategories: false
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
        .update('events', events =>
            events.mergeDeep(
                Immutable.Map(
                    Immutable.fromJS(action.events).map(event =>
                        [event.get('_id'), event]
                    )
                )
            )
        );
}

export default eventReducer;
