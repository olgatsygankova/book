import { GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAIL, START, STOP, GET_BOOK_TEXT_SUCCESS, GET_BOOK_TEXT_FAIL, GET_CATEGORY_FAIL, GET_CATEGORY_SUCCESS, GET_BOOK_SUCCESS, GET_BOOK_FAIL, SET_ESTIMATE_SUCCESS, SET_ESTIMATE_FAIL } from '../constants/index';
import { getCategories, getCategoryById } from "../services/CategoriesService";
import { getBookTextById, getBookById, setEstimateForBook } from "../services/BooksService";

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

export function loadGetCategory(categoryId, categoryText) {
    return (dispatch) => {
        start(dispatch);
        getCategoryById(categoryId, categoryText)
            .then(responseJson => {
                stop(dispatch);
                dispatch({
                    type: GET_CATEGORY_SUCCESS,
                    payload: responseJson
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_CATEGORY_FAIL,
                    payload: err
                })
            });
    }
}

export function loadBookDescription(bookId) {
    return (dispatch) => {
        start(dispatch);
        getBookById(bookId)
            .then(responseJson => {
                stop(dispatch);
                dispatch({
                    type: GET_BOOK_SUCCESS,
                    payload: responseJson
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_BOOK_FAIL,
                    payload: err
                })
            });
    }
}

export function setEstimate(bookId, estimateValue) {
    return (dispatch) => {
        start(dispatch);
        setEstimateForBook(bookId, estimateValue)
            .then(responseJson => {
                stop(dispatch);
                dispatch({
                    type: SET_ESTIMATE_SUCCESS,
                    payload: responseJson
                })
            })
            .catch(err => {
                dispatch({
                    type: SET_ESTIMATE_FAIL,
                    payload: err
                })
            });
    }
   /* return {
        type: SET_ESTIMATE_SUCCESS,
        payload: estimateValue
    }*/
}
