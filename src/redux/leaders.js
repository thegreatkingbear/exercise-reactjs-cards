import * as ACTION_TYPES from './ActionTypes';

export const leaders = (state = {
    isLoading: true,
    errorMessage: null,
    items: []
}, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_LEADERS:
            return {
                ...state,
                isLoading: false,
                errorMessage: null,
                items: action.payload
            };

        case ACTION_TYPES.LEADERS_LOADING:
            return {
                ...state,
                isLoading: true,
                items: []
            }

        case ACTION_TYPES.LEADERS_FAILED:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload
            }

        default:
          return state;
      }
};