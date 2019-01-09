import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { dishes } from './dishes';
import { comments } from './comments';
import { promotions } from './promotions';
import { leaders } from './leaders';
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        combineReducers({
            dishes: dishes,
            comments: comments,
            promotions: promotions,
            leaders: leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        composeEnhancers(
            applyMiddleware(thunk, logger)
        )
    );

    return store;
}
