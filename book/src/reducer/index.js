import { combineReducers } from 'redux';
import books from './books';
import users from './users';

export const rootReducer = combineReducers({
    books,
    users
});
