import { combineReducers } from 'redux';
import books from './books';
import users from './users';
import auth from './auth';
import loadBook from './loadBook';

export const rootReducer = combineReducers({
    books,
    users,
    auth,
    loadBook
});
