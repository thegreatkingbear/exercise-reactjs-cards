import * as ACTION_TYPES from './ActionTypes';

export const comments = (
    state = { 
        isLoading: false,
        errorMessage: null, 
        comments: [] 
    }, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_COMMENTS:
            return { 
                ...state, 
                errorMessage: null, 
                comments: action.payload, 
                isLoading: false 
            };

        case ACTION_TYPES.COMMENTS_FAILED:
            return { 
                ...state, 
                errorMessage: action.payload, 
                isLoading: false 
            };

        case ACTION_TYPES.ADD_COMMENT:
            var comment = action.payload;
            //console.log("comment : " + JSON.stringify(comment))
            return { 
                ...state, 
                comments: state.comments.concat(comment), 
                isLoading: false 
            };

        case ACTION_TYPES.COMMENTS_LOADING:
            return { 
                ...state, 
                isLoading: true 
            };

        default:
            return state;
      }
};