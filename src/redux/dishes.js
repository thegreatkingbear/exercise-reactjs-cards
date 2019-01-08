import * as ACTION_TYPES from './ActionTypes';

export const dishes = (state = 
    { 
        isLoading: true, 
        errorMessage: null,
        dishes: []
    }, 
    action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_DISHES:
            return { 
                ...state, 
                isLoading: false, 
                errorMessage: null, 
                dishes: action.payload 
            };

        case ACTION_TYPES.DISHES_LOADING:
            return { 
                ...state, 
                isLoading: true, 
                errorMessage: null, 
                dishes: [] 
            };

        case ACTION_TYPES.DISHES_FAILED:
            return { 
                ...state, 
                isLoading: false, 
                errorMessage: action.payload 
            };

        default:
          return state;
      }
};