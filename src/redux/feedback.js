import * as ACTION_TYPES from './ActionTypes';

export const feedback = (state = {
    isLoading: false,
    errorMessage: null,
    content: []
}, action) => {
    switch (action.type) {
        case ACTION_TYPES.FEEDBACK_LOADING:
            return {
                ...state,
                isLoading: true,
                errorMessage: null,
                content: []
            };

        case ACTION_TYPES.FEEDBACK_FAILED:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload
            };

        case ACTION_TYPES.ADD_FEEDBACK:
            return {
                ...state,
                isLoading: false,
                errorMessage: null,
                content: action.payload
            };

        default:
            return state;
    }
};