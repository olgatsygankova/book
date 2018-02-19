import {
    CHANGE_LOAD_BOOK_ANNOTATION_SUCCESS, CHANGE_LOAD_BOOK_AUTHOR_SUCCESS, CHANGE_LOAD_BOOK_GENRE_SUCCESS,
    CHANGE_LOAD_BOOK_ISBN_SUCCESS, CHANGE_LOAD_BOOK_TITLE_SUCCESS, SET_ESTIMATE_FAIL, SET_ESTIMATE_SUCCESS,
    GET_CATEGORIES_NAME_SUCCESS, GET_CATEGORIES_NAME_FAIL, CHANGE_LOAD_BOOK_TEXT_SUCCESS, CHANGE_LOAD_BOOK_COVER_SUCCESS,
    PUT_LOAD_NEW_BOOK_SUCCESS, PUT_LOAD_NEW_BOOK_FAIL
} from "../constants";
import {start, stop} from "./index";
import {getCategoriesName} from '../services/CategoriesService';
import {putLoadNewBook} from '../services/BooksService';

export function changeLoadBookTitle(text) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_LOAD_BOOK_TITLE_SUCCESS,
            payload: text
        })
    }
}

export function changeLoadBookAuthor(text) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_LOAD_BOOK_AUTHOR_SUCCESS,
            payload: text
        })
    }
}

export function changeLoadBookIsbn(text) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_LOAD_BOOK_ISBN_SUCCESS,
            payload: text
        })
    }
}

export function changeLoadBookAnnotation(text) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_LOAD_BOOK_ANNOTATION_SUCCESS,
            payload: text
        })
    }
}

export function changeLoadBookGenre(text) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_LOAD_BOOK_GENRE_SUCCESS,
            payload: text
        })
    }
}

export function changeLoadBookText(text) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_LOAD_BOOK_TEXT_SUCCESS,
            payload: text
        })
    }
}

export function changeLoadBookCover(text) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_LOAD_BOOK_COVER_SUCCESS,
            payload: text
        })
    }
}
export function loadCategoriesName() {
    return (dispatch) => {
        start(dispatch);
        getCategoriesName()
            .then(responseJson => {
                dispatch({
                    type: GET_CATEGORIES_NAME_SUCCESS,
                    payload: responseJson
                });
                stop(dispatch);
            })
            .catch(err => {
                dispatch({
                    type: GET_CATEGORIES_NAME_FAIL,
                    payload: err
                });
                stop(dispatch);
            });
    }
}

export function loadNewBook(title, author, genre, isbn, annotation, cover, text, userid) {
    return (dispatch) => {
        start(dispatch);
        putLoadNewBook(title, author, genre, isbn, annotation, cover, text, userid)
            .then(responseJson => {
                dispatch({
                    type: PUT_LOAD_NEW_BOOK_SUCCESS,
                    payload: responseJson
                });
                stop(dispatch);
            })
            .catch(err => {
                dispatch({
                    type: PUT_LOAD_NEW_BOOK_FAIL,
                    payload: err
                });
                stop(dispatch);
            });
    }
}