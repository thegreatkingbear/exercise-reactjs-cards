import * as ACTION_TYPES from './ActionTypes';

export const comments = (
    state = { 
        errorMessage: null, 
        comments: [] 
    }, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_COMMENTS:
            return { ...state, errorMessage: null, comments: action.payload };

        case ACTION_TYPES.COMMENTS_FAILED:
            return { ...state, errorMessage: action.payload };

        case ACTION_TYPES.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            //console.log("comment : " + JSON.stringify(comment))
            return { ...state, comments: state.concat(comment) };

        default:
            return state;
      }
};