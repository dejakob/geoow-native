import { USER_STATS } from '../constants';

function getDescription(statType, additionalData = {}) {
    switch (statType) {
        case USER_STATS.CATEGORY_ADDED:
            return `You added ${additionalData.amount} categories. The more categories you add, the more points you get :)`;

        case USER_STATS.CATEGORY_REMOVED:
            return `You lost points because you removed ${additionalData.amount} categories`;

        case USER_STATS.QUEST_WENT:
            return `Mission accomplished! You successfully completed a quest`;

        case USER_STATS.QUEST_DENIED:
            return `You decided not to go 👎`;
    }
}

export {
    getDescription
};
