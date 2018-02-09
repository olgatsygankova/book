import {
    GET_USER_BY_ID_SUCCESS, GET_USER_BY_ID_FAIL,
    CHANGE_OFFICE_EMAIL_SUCCESS,
    CHANGE_OFFICE_PASSWORD_SUCCESS,
    CHANGE_OFFICE_USERNAME_SUCCESS
} from '../constants/index';
import { start, stop } from './index';
import { getUserById } from '../services/UsersService';

export function loadGetUserById(userId) {
    return (dispatch) => {
        start(dispatch);
        getUserById(userId)
            .then(responseJson => {
                stop(dispatch);
                dispatch({
                    type: GET_USER_BY_ID_SUCCESS,
                    payload: responseJson
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_USER_BY_ID_FAIL,
                    payload: err
                })
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

