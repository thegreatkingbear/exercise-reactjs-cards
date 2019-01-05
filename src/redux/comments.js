import { COMMENTS } from '../shared/comments';
import * as ACTION_TYPES from './ActionTypes';

export const comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            //console.log("comment : " + JSON.stringify(comment))
            return state.concat(comment);

        default:
            return state;
      }
};