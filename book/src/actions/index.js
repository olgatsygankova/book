import { GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAIL,
    START, STOP,
    GET_BOOK_TEXT_SUCCESS, GET_BOOK_TEXT_FAIL,
    GET_CATEGORY_FAIL, GET_CATEGORY_SUCCESS,
    GET_BOOK_SUCCESS, GET_BOOK_FAIL,
    SET_ESTIMATE_SUCCESS, SET_ESTIMATE_FAIL,
    SHOW_MODAL_SUCCESS, SHOW_MODAL_FAIL,
    CHANGE_EMAIL_SUCCESS, CHANGE_EMAIL_FAIL,
    CHANGE_PASSWORD_SUCCESS,
    POST_LOGIN_SUCCESS, POST_LOGIN_FAIL,
    POST_SINGUP_SUCCESS, POST_SINGUP_FAIL,
    LOGOUT_SUCCESS, LOGOUT_FAIL,
    POST_RECOVERY_PASSWORD_SUCCESS, POST_RECOVERY_PASSWORD_FAIL,
    PUT_ADD_COMMENT_SUCCESS, PUT_ADD_COMMENT_FAIL,
    CHANGE_COMMENT_SUCCESS, CHANGE_COMMENT_FAIL
} from '../constants/index';
import { getCategories, getCategoryById } from "../services/CategoriesService";
import { getBookTextById, getBookById, putEstimateForBook, putAddComment } from "../services/BooksService";
import { postLogin, postSingup, postRecoveryPassword } from "../services/AuthenticationService";

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

export function addComment(bookId, user, date, text) {
    return (dispatch) => {
        console.log("add comment");
        start(dispatch);
        putAddComment(bookId, user, date, text)
            .then(responseJson => {
                stop(dispatch);
                dispatch({
                    type: PUT_ADD_COMMENT_SUCCESS,
                    payload: responseJson
                })
            })
            .catch(err => {
                dispatch({
                    type: PUT_ADD_COMMENT_FAIL,
                    payload: err
                })
            });
    }
}

export function setEstimate(bookId, estimateValue) {
    return (dispatch) => {
        start(dispatch);
        putEstimateForBook(bookId, estimateValue)
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
}

export function showModal(type) {
    return (dispatch) => {
        dispatch({
            type: SHOW_MODAL_SUCCESS,
            payload:  {showLogin: type.showLogin || false,
                showSignup: type.showSignup || false,
                showPassRecovery: type.showPassRecovery || false,
                privatePath: type.privatePath}
        })
    }

}

export function changeEmailR(emailValue) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_EMAIL_SUCCESS,
            payload: emailValue
        })
    }
}

export function changePasswordR(passwordValue) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_PASSWORD_SUCCESS,
            payload: passwordValue
        })
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


export function login(email, password, privatePath) {
    return (dispatch) => {
        start(dispatch);
        postLogin(email, password, privatePath)
            .then(responseJson => {
                stop(dispatch);
                responseJson.errorMessage == "" ?
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
                            if(responseJson.errorMessage == "") {
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
