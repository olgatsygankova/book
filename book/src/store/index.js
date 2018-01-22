import { createStore, applyMiddleware } from 'redux';
import {rootReducer} from '../reducer';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    const createStoreWithMiddleware = applyMiddleware(
        thunk
    )(createStore);

    const store = createStoreWithMiddleware(rootReducer);
    return store;
}
