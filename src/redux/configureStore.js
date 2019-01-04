import { createStore, combineReducers } from 'redux';
import { dishes } from './dishes';
import { comments } from './comments';
import { promotions } from './promotions';
import { leaders } from './leaders';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: dishes,
            comments: comments,
            promotions: promotions,
            leaders: leaders
        })
    );

    return store;
}
