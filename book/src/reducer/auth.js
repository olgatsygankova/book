import { SHOW_MODAL_SUCCESS, SHOW_MODAL_FAIL,
    POST_LOGIN_SUCCESS, POST_LOGIN_FAIL,
    POST_SINGUP_SUCCESS, POST_SINGUP_FAIL,
    LOGOUT_SUCCESS, LOGOUT_FAIL,
    POST_RECOVERY_PASSWORD_SUCCESS, POST_RECOVERY_PASSWORD_FAIL,
    CHANGE_EMAIL_LOGIN_SUCCESS, CHANGE_EMAIL_PASS_REC_SUCCESS, CHANGE_PASSWORD_SINGUP_SUCCESS,
    CHANGE_PASSWORD_LOGIN_SUCCESS, CHANGE_EMAIL_SINGUP_SUCCESS
} from "../constants/index";
import {history} from "../history";

const initialState = {
    showModalTrue: {showLogin: false,
        showSignup: false,
        showPassRecovery: false,
        showLoadBook: false,
        privatePath: ''},
    emailValueLogin: '',
    passwordValueLogin: '',
    emailValueSingup: '',
    passwordValueSingup: '',
    emailValuePassRec: ''
};

export default function auth (state = initialState, action){
    switch (action.type) {
        case SHOW_MODAL_SUCCESS:
            return {
                ...state,
                showModalTrue: action.payload,
                error: '',
            };
        case SHOW_MODAL_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case POST_LOGIN_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case POST_SINGUP_FAIL:
            return {
                ...state,
                error: action.payload
            };

        case CHANGE_EMAIL_LOGIN_SUCCESS:
            return {
                ...state,
                emailValueLogin: action.payload,
                error: '',
            };
        case CHANGE_PASSWORD_LOGIN_SUCCESS:
            return {
                ...state,
                passwordValueLogin: action.payload,
                error: '',
            };
        case CHANGE_EMAIL_SINGUP_SUCCESS:
            return {
                ...state,
                emailValueSingup: action.payload,
                error: '',
            };
        case CHANGE_PASSWORD_SINGUP_SUCCESS:
            return {
                ...state,
                passwordValueSingup: action.payload,
                error: '',
            };
        case CHANGE_EMAIL_PASS_REC_SUCCESS:
            return {
                ...state,
                emailValuePassRec: action.payload,
                error: '',
            };
        default:
            return state
    }
}

