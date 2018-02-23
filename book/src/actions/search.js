import {
    CHANGE_SEARCH_TEXT_SUCCESS, GET_SEARCH_AUTHOR_SUCCESS, GET_SEARCH_AUTHOR_FAIL, GET_SEARCH_TITLE_SUCCESS,
    GET_SEARCH_TITLE_FAIL, GET_SEARCH_ISBN_SUCCESS, GET_SEARCH_ISBN_FAIL, GET_SEARCH_FULL_SUCCESS
} from "../constants";
import {start, stop} from "./index";
import {getSearchTitle, getSearchAuthor, getSearchIsbn, getSearchFull} from "../services/SearchService";

export function loadSearchTitle(text) {
    return (dispatch) => {
        start(dispatch);
        getSearchTitle(text)
            .then(responseJson => {
                dispatch({
                    type: GET_SEARCH_TITLE_SUCCESS,
                    payload: responseJson
                });
                stop(dispatch);
            })
            .catch(err => {
                dispatch({
                    type: GET_SEARCH_TITLE_FAIL,
                    payload: err
                });
                stop(dispatch);
            });
    }
}

export function loadSearchAuthor(text) {
    return (dispatch) => {
        start(dispatch);
        getSearchAuthor(text)
            .then(responseJson => {
                dispatch({
                    type: GET_SEARCH_AUTHOR_SUCCESS,
                    payload: responseJson
                });
                stop(dispatch);
            })
            .catch(err => {
                dispatch({
                    type: GET_SEARCH_AUTHOR_FAIL,
                    payload: err
                });
                stop(dispatch);
            });
    }
}

export function loadSearchIsbn(text) {
    return (dispatch) => {
        start(dispatch);
        getSearchIsbn(text)
            .then(responseJson => {
                dispatch({
                    type: GET_SEARCH_ISBN_SUCCESS,
                    payload: responseJson
                });
                stop(dispatch);
            })
            .catch(err => {
                dispatch({
                    type: GET_SEARCH_ISBN_FAIL,
                    payload: err
                });
                stop(dispatch);
            });
    }
}
export function loadSearchFull(text) {
    return (dispatch) => {
        start(dispatch);
        getSearchFull(text)
            .then(responseJson => {
                dispatch({
                    type: GET_SEARCH_FULL_SUCCESS,
                    payload: responseJson
                });
                stop(dispatch);
            })
            .catch(err => {
                dispatch({
                    type: GET_SEARCH_ISBN_FAIL,
                    payload: err
                });
                stop(dispatch);
            });
    }
}


export function changeSearchText(text) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_SEARCH_TEXT_SUCCESS,
            payload: text
        })
    }
}