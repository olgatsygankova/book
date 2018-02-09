import {
    CHANGE_LOAD_BOOK_ANNOTATION_SUCCESS, CHANGE_LOAD_BOOK_AUTHOR_SUCCESS, CHANGE_LOAD_BOOK_GENRE_SUCCESS,
    CHANGE_LOAD_BOOK_ISBN_SUCCESS, CHANGE_LOAD_BOOK_TITLE_SUCCESS
} from "../constants";

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