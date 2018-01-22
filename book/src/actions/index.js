import { GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAIL, START, STOP, GET_BOOK_TEXT_SUCCESS, GET_BOOK_TEXT_FAIL } from '../constants/index';
import {getCategories} from "../services/CategoriesService";
import { getBookTextById } from "../services/BooksService";

export const start = (dispatch) => dispatch({
    type: START
});

export const stop = (dispatch) => dispatch({
    type: STOP
});

export function loadGetCategories(searchText) {
    return (dispatch) => {
        start(dispatch);
        getCategories(searchText)
            .then(responseJson => {
                stop(dispatch);
                dispatch({
                    type: GET_CATEGORIES_SUCCESS,
                    payload: responseJson
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_CATEGORIES_FAIL,
                    payload: err
                })
            });
    }
}

export function loadBookText(bookId) {
    return (dispatch) => {
        start(dispatch);
        getBookTextById(bookId)
            .then(responseJson => {
                stop(dispatch);
                dispatch({
                    type: GET_BOOK_TEXT_SUCCESS,
                    payload: responseJson
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_BOOK_TEXT_FAIL,
                    payload: err
                })
            });
    }
}
