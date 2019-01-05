import * as ACTION_TYPES from './ActionTypes';

export const addComment = (dishId, rating, author, comment) => ({
    type: ACTION_TYPES.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});