import { SHOW_MODAL_SUCCESS, SHOW_MODAL_FAIL,
    CHANGE_EMAIL_SUCCESS, CHANGE_EMAIL_FAIL,
    CHANGE_PASSWORD_SUCCESS,
    POST_LOGIN_SUCCESS, POST_LOGIN_FAIL,
    POST_SINGUP_SUCCESS, POST_SINGUP_FAIL,
    LOGOUT_SUCCESS, LOGOUT_FAIL,
    POST_RECOVERY_PASSWORD_SUCCESS, POST_RECOVERY_PASSWORD_FAIL,
    CHANGE_OFFICE_USERNAME_SUCCESS,
    CHANGE_OFFICE_PASSWORD_SUCCESS,
    CHANGE_OFFICE_EMAIL_SUCCESS
} from "../constants/index";
import {history} from "../history";

const initialState = {
    showModalTrue: {showLogin: false,
        showSignup: false,
        showPassRecovery: false,
        privatePath: ''},
    emailValue: '',
    passwordValue: '',
    user: {},
};

export default function users(state = initialState, action){
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
        case CHANGE_EMAIL_SUCCESS:
            return {
                ...state,
                emailValue: action.payload,
                error: '',
            };
        case CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                passwordValue: action.payload,
                error: '',
            };
        case POST_LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: '',
            };
        case POST_LOGIN_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case POST_SINGUP_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: '',
            };
        case POST_SINGUP_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case POST_RECOVERY_PASSWORD_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: '',
            };
        case POST_RECOVERY_PASSWORD_FAIL:
            return {
                ...state,
                user: {},
                error: action.payload
            };
        case CHANGE_OFFICE_USERNAME_SUCCESS:
            return {
                ...state,
                officeUserNameValue: action.payload,
                error: '',
            };
        case CHANGE_OFFICE_PASSWORD_SUCCESS:
            return {
                ...state,
                officePasswordValue: action.payload,
                error: '',
            };
        case CHANGE_OFFICE_EMAIL_SUCCESS:
            return {
                ...state,
                officeEmailValue: action.payload,
                error: '',
            };
        case LOGOUT_SUCCESS:
            localStorage.clear();
            history.push('/');
            return {
                ...state,
                user: {},
                error: '',

            };
        default:
            return state
    }
}

