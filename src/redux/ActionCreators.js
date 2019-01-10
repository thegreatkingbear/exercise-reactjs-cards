import * as ACTION_TYPES from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (dishId, rating, author, comment) => ({
    type: ACTION_TYPES.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)));
}

export const dishesLoading = () => ({
    type: ACTION_TYPES.DISHES_LOADING
});

export const dishesFailed = (error_message) => ({
    type: ACTION_TYPES.DISHES_FAILED,
    payload: error_message
});

export const addDishes = (dishes) => ({
    type: ACTION_TYPES.ADD_DISHES,
    payload: dishes
});

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)));
}

export const addComments = (comments) => ({
    type: ACTION_TYPES.ADD_COMMENTS,
    payload: comments
});

export const commentsFailed = (errorMessage) => ({
    type: ACTION_TYPES.COMMENTS_FAILED,
    payload: errorMessage
});

export const fetchPromos = () => (dispatch) => {
    return fetch(baseUrl + 'promotions')
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)));
}

export const addPromos = (promos) => ({
    type: ACTION_TYPES.ADD_PROMOS,
    payload: promos
});

export const promosFailed = (errorMessage) => ({
    type: ACTION_TYPES.PROMOS_FAILED,
    payload: errorMessage
});

export const promosLoading = () => ({
    type: ACTION_TYPES.PROMOS_LOADING
});
