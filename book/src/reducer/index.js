import { combineReducers } from 'redux';
import books from './books';
import { GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAIL, GET_BOOK_TEXT_SUCCESS, GET_BOOK_TEXT_FAIL } from '../constants/index';

export const rootReducer = combineReducers({
    books
});
