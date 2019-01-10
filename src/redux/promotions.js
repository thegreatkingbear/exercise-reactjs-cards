import * as ACTION_TYPES from './ActionTypes';

export const promotions = (
    state = { 
        isLoading: true, 
        errorMessage: null, 
        promotions: [] 
    }, action) => {
    
    switch (action.type) {
        case ACTION_TYPES.ADD_PROMOS:
            return { ...state, isLoading: false, errorMessage: null, promotions: action.payload };

        case ACTION_TYPES.PROMOS_LOADING:
            return { ...state, isLoading: true, errorMessage: null, promotions: [] };

        case ACTION_TYPES.PROMOS_FAILED:
            return { ...state, isLoading: false, errorMessage: action.payload };
            
        default:
          return state;
      }
};