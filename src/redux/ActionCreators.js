import * as ACTION_TYPES from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (comment) => ({
    type: ACTION_TYPES.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    dispatch(commentsLoading(true));

    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };

    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('error : ' + response.status + ' ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        throw error;
    })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => {
        console.log('error in posting comments : ' + error.message);
        alert('Your comment could not be posted on the server.\n' + error.message);
    });
}

export const commentsLoading = () => ({
    type: ACTION_TYPES.COMMENTS_LOADING
});

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error : ' + response.status + ' ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, 
        error => {
            var errorMessage = new Error(error.message);
            throw errorMessage;
        })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => {
            console.log(error);
            dispatch(dishesFailed(error.message));
        });
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
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error : ' + response.status + ' ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, 
        error => {
            var errorMessage = new Error(error.message);
            throw errorMessage;
        })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => {
            console.log(error);
            dispatch(dishesFailed(error.message));
        });
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
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error : ' + response.status + ' ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, 
        error => {
            var errorMessage = new Error(error.message);
            throw errorMessage;
        })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => {
            console.log(error);
            dispatch(promosFailed(error.message));
        });
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

export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading(true));

    return fetch(baseUrl + 'leaders')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error : ' + response.status + ' ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errorMessage = new Error(error.message);
            throw errorMessage;
        })
        .then(response => response.json())
        .then(items => {
            console.log(items);
            dispatch(addLeaders(items));
        })
        .catch(error => {
            console.log(error);
            dispatch(leadersFailed(error.message));
        })
}

export const addLeaders = (items) => ({
    type: ACTION_TYPES.ADD_LEADERS,
    payload: items
});

export const leadersFailed = (errorMessage) => ({
    type: ACTION_TYPES.LEADERS_FAILED,
    payload: errorMessage
});

export const leadersLoading = () => ({
    type: ACTION_TYPES.LEADERS_LOADING
})