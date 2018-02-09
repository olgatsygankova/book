import {
    CHANGE_OFFICE_USERNAME_SUCCESS,
    CHANGE_OFFICE_PASSWORD_SUCCESS,
    CHANGE_OFFICE_EMAIL_SUCCESS,
    GET_USER_BY_ID_SUCCESS, GET_USER_BY_ID_FAIL
} from "../constants/index";
import {
    LOGOUT_SUCCESS,
    POST_LOGIN_SUCCESS, POST_RECOVERY_PASSWORD_FAIL, POST_RECOVERY_PASSWORD_SUCCESS,
    POST_SINGUP_SUCCESS
} from "../constants";
import { getUserlocalStorage } from '../services/UsersService'
import {history} from "../history";

const userInitialState = getUserlocalStorage();

const initialState = {
    officeUserNameValue: userInitialState.userName,
    officePasswordValue: userInitialState.password,
    officeEmailValue: userInitialState.email,
    user: {},
    myBooks: {}
};

export default function users(state = initialState, action){
    switch (action.type) {
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
        case GET_USER_BY_ID_SUCCESS:
            return {
                ...state,
                myBooks: action.payload,
                error: '',
            };
        case GET_USER_BY_ID_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case POST_LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: '',
            };
        case POST_SINGUP_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: '',
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

