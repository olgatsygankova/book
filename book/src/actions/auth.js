import {
    SHOW_MODAL_SUCCESS,
    POST_LOGIN_SUCCESS, POST_LOGIN_FAIL,
    POST_SINGUP_SUCCESS, POST_SINGUP_FAIL,
    LOGOUT_SUCCESS,
    POST_RECOVERY_PASSWORD_SUCCESS, POST_RECOVERY_PASSWORD_FAIL,
    CHANGE_EMAIL_SINGUP_SUCCESS, CHANGE_PASSWORD_LOGIN_SUCCESS,
    CHANGE_PASSWORD_SINGUP_SUCCESS, CHANGE_EMAIL_PASS_REC_SUCCESS,
    CHANGE_EMAIL_LOGIN_SUCCESS
} from '../constants/index';
import { start, stop } from './index';
import { postLogin, postSingup, postRecoveryPassword } from "../services/AuthenticationService";

export function showModal(type) {
    return (dispatch) => {
        dispatch({
            type: SHOW_MODAL_SUCCESS,
            payload:  {showLogin: type.showLogin || false,
                showSignup: type.showSignup || false,
                showPassRecovery: type.showPassRecovery || false,
                showLoadBook: type.showLoadBook || false,
                privatePath: type.privatePath}
        })
    }

}

export function changeEmailLogin(emailValueLogin) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_EMAIL_LOGIN_SUCCESS,
            payload: emailValueLogin
        })
    }
}

export function changePasswordLogin(passwordValueLogin) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_PASSWORD_LOGIN_SUCCESS,
            payload: passwordValueLogin
        })
    }
}

export function changeEmailSingup(emailValueSingup) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_EMAIL_SINGUP_SUCCESS,
            payload: emailValueSingup
        })
    }
}

export function changePasswordSingup(passwordValueSingup) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_PASSWORD_SINGUP_SUCCESS,
            payload: passwordValueSingup
        })
    }
}

export function changeEmailPassRec(emailValuePassRec) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_EMAIL_PASS_REC_SUCCESS,
            payload: emailValuePassRec
        })
    }
}

export function login(email, password, privatePath) {
    return (dispatch) => {
        start(dispatch);
        postLogin(email, password, privatePath)
            .then(responseJson => {
                stop(dispatch);
                responseJson.errorMessage === "" ?
                    dispatch({
                        type: POST_LOGIN_FAIL,
                        payload: "Неправильное имя пользователя или пароль"
                    }) : dispatch({
                    type: POST_LOGIN_SUCCESS,
                    payload: responseJson
                })
            })
    }
}

export function singup (email, password, privatePath) {
    return (dispatch) => {
        start(dispatch);
        postSingup(email, password, privatePath)
            .then(responseJson => {
                stop(dispatch);
                if (responseJson.errorMessage) {
                    dispatch({
                        type: POST_SINGUP_SUCCESS,
                        payload: responseJson
                    });
                    postLogin(email, password, privatePath)
                        .then(responseJson => {
                            stop(dispatch);
                            if(responseJson.errorMessage === "") {
                                dispatch({
                                    type: POST_LOGIN_FAIL,
                                    payload: "Неправильное имя пользователя или пароль"
                                })
                            }else {
                                dispatch({
                                    type: POST_LOGIN_SUCCESS,
                                    payload: responseJson
                                })
                            }
                        })
                } else {
                    dispatch({
                        type: POST_SINGUP_FAIL,
                        payload: "Такой email уже зарегистирован"
                    })
                }
            })
    }
}

export function recoveryPassword(email, privatePath) {
    return (dispatch) => {
        start(dispatch);
        postRecoveryPassword(email, privatePath)
            .then(responseJson => {
                stop(dispatch);
                responseJson.errorMessage ?
                    dispatch({
                        type: POST_RECOVERY_PASSWORD_FAIL,
                        payload: "Такой email не зарегистрирован"
                    }) : dispatch({
                        type: POST_RECOVERY_PASSWORD_SUCCESS,
                        payload: responseJson
                    })
            })
    }
}

export function logout(user) {
    return (dispatch) => {
        dispatch({
            type: LOGOUT_SUCCESS,
            payload: user
        })
    }
}