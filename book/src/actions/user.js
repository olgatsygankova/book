import {
    GET_USER_BY_ID_SUCCESS, GET_USER_BY_ID_FAIL,
    CHANGE_OFFICE_EMAIL_SUCCESS,
    CHANGE_OFFICE_PASSWORD_SUCCESS,
    CHANGE_OFFICE_USERNAME_SUCCESS,
    POST_OFFICE_SUCCESS, POST_OFFICE_FAIL
} from '../constants/index';
import { start, stop } from './index';
import { getUserById, postUpdateOffice } from '../services/UsersService';

export function loadGetUserById(userId) {
    return (dispatch) => {
        start(dispatch);
        getUserById(userId)
            .then(responseJson => {
                dispatch({
                    type: GET_USER_BY_ID_SUCCESS,
                    payload: responseJson
                });
                stop(dispatch);
            })
            .catch(err => {
                dispatch({
                    type: GET_USER_BY_ID_FAIL,
                    payload: err
                });
                stop(dispatch);
            });
    }
}

export function changeOfficeEmail(officeEmailValue) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_OFFICE_EMAIL_SUCCESS,
            payload: officeEmailValue
        })
    }
}

export function changeOfficePassword(officePasswordValue) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_OFFICE_PASSWORD_SUCCESS,
            payload: officePasswordValue
        })
    }
}

export function changeOfficeUserName(officeUserNameValue) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_OFFICE_USERNAME_SUCCESS,
            payload: officeUserNameValue
        })
    }
}

export function updateOffice(userId, username, email, password) {
    return (dispatch) => {
        start(dispatch);
        postUpdateOffice(userId, username, email, password)
            .then(responseJson => {
                dispatch({
                    type: POST_OFFICE_SUCCESS,
                    payload: responseJson
                });
                stop(dispatch);
            })
            .catch(err => {
                dispatch({
                    type: POST_OFFICE_FAIL,
                    payload: err
                });
                stop(dispatch);
            });
    }
}
