import { GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAIL,
    GET_BOOK_TEXT_SUCCESS, GET_BOOK_TEXT_FAIL,
    GET_CATEGORY_FAIL, GET_CATEGORY_SUCCESS,
    GET_BOOK_SUCCESS, GET_BOOK_FAIL,
    SET_ESTIMATE_SUCCESS, SET_ESTIMATE_FAIL,
    PUT_ADD_COMMENT_SUCCESS, PUT_ADD_COMMENT_FAIL,
    CHANGE_COMMENT_SUCCESS,
    GET_COMMENTS_SUCCESS, GET_COMMENTS_FAIL,
    GET_MY_BOOKS_SUCCESS, GET_MY_BOOKS_FAIL
} from '../constants/index';
import { start, stop } from './index';
import { getCategories, getCategoryById } from "../services/CategoriesService";
import { getBookTextById, getBookById, putEstimateForBook, putAddComment, getCommentsBook, getMyBooks } from "../services/BooksService";

export function loadGetCategories(searchText) {
    return (dispatch) => {
        start(dispatch);
        getCategories(searchText)
            .then(responseJson => {
                dispatch({
                    type: GET_CATEGORIES_SUCCESS,
                    payload: responseJson
                });
                stop(dispatch);
            })
            .catch(err => {
                dispatch({
                    type: GET_CATEGORIES_FAIL,
                    payload: err
                });
                stop(dispatch);
            });
    }
}

export function loadBookText(bookId) {
    return (dispatch) => {
        start(dispatch);
        getBookTextById(bookId)
            .then(responseJson => {
                dispatch({
                    type: GET_BOOK_TEXT_SUCCESS,
                    payload: responseJson
                });
                stop(dispatch);
            })
            .catch(err => {
                dispatch({
                    type: GET_BOOK_TEXT_FAIL,
                    payload: err
                });
                stop(dispatch);
            });
    }
}

export function loadGetCategory(categoryId, categoryText) {
    return (dispatch) => {
        start(dispatch);
        getCategoryById(categoryId, categoryText)
            .then(responseJson => {
                dispatch({
                    type: GET_CATEGORY_SUCCESS,
                    payload: responseJson
                });
                stop(dispatch);
            })
            .catch(err => {
                dispatch({
                    type: GET_CATEGORY_FAIL,
                    payload: err
                });
                stop(dispatch);
            });
    }
}

export function loadBookDescription(bookId) {
    return (dispatch) => {
        start(dispatch);
        getBookById(bookId)
            .then(responseJson => {
                dispatch({
                    type: GET_BOOK_SUCCESS,
                    payload: responseJson
                });
                stop(dispatch);
            })
            .catch(err => {
                dispatch({
                    type: GET_BOOK_FAIL,
                    payload: err
                });
                stop(dispatch);
            });
    }
}

export function loadCommentsBook(bookId) {
    return (dispatch) => {
        start(dispatch);
        getCommentsBook(bookId)
            .then(responseJson => {
                dispatch({
                    type: GET_COMMENTS_SUCCESS,
                    payload: responseJson
                });
                stop(dispatch);
            })
            .catch(err => {
                dispatch({
                    type: GET_COMMENTS_FAIL,
                    payload: err
                });
                stop(dispatch);
            });
    }
}

export function addNewComment(userid, bookid, comment, date) {
    return (dispatch) => {
        start(dispatch);
        putAddComment(userid, bookid, comment, date)
            .then(responseJson => {
                dispatch({
                    type: PUT_ADD_COMMENT_SUCCESS,
                    payload: responseJson
                });
                stop(dispatch);
            })
            .catch(err => {
                dispatch({
                    type: PUT_ADD_COMMENT_FAIL,
                    payload: err
                });
                stop(dispatch);
            });
    }
}

export function setEstimate(bookId, estimateValue) {
    return (dispatch) => {
        start(dispatch);
        putEstimateForBook(bookId, estimateValue)
            .then(responseJson => {
                dispatch({
                    type: SET_ESTIMATE_SUCCESS,
                    payload: responseJson
                });
                stop(dispatch);
            })
            .catch(err => {
                dispatch({
                    type: SET_ESTIMATE_FAIL,
                    payload: err
                });
                stop(dispatch);
            });
    }
}

export function changeComment(myCommentText) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_COMMENT_SUCCESS,
            payload: myCommentText
        })
    }
}

export function loadMyBooks(userid) {
    return (dispatch) => {
        start(dispatch);
        getMyBooks(userid)
            .then(responseJson => {
                dispatch({
                    type: GET_MY_BOOKS_SUCCESS,
                    payload: responseJson
                });
                stop(dispatch);
            })
            .catch(err => {
                dispatch({
                    type: GET_MY_BOOKS_FAIL,
                    payload: err
                });
                stop(dispatch);
            });
    }
}
