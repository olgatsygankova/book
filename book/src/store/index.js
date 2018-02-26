import { createStore, applyMiddleware } from 'redux';
import {rootReducer} from '../reducer';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

export default function configureStore(initialState) {
    //const logger = createLogger();
    //const store = createStore(rootReducer, initialState, applyMiddleware(thunk, logger));
    const createStoreWithMiddleware = applyMiddleware(
        thunk
    )(createStore);
    const store = createStoreWithMiddleware(rootReducer);
    return store;
}



