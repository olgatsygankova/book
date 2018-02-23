import {
    CHANGE_OFFICE_USERNAME_SUCCESS,
    CHANGE_OFFICE_PASSWORD_SUCCESS,
    CHANGE_OFFICE_EMAIL_SUCCESS,
    GET_USER_BY_ID_SUCCESS, GET_USER_BY_ID_FAIL,
    POST_OFFICE_SUCCESS, POST_OFFICE_FAIL
} from "../constants/index";

const initialState = {
    officeUserNameValue: '',
    officePasswordValue: '',
    officeEmailValue: ''
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
                officeEmailValue: action.payload.email,
                officeUserNameValue: action.payload.username,
                officePasswordValue: action.payload.password,
                error: '',
            };
        case GET_USER_BY_ID_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case POST_OFFICE_SUCCESS:
            return {
                ...state,
                officeUserNameValue: action.payload.username,
                officeEmailValue: action.payload.email,
                officePasswordValue: action.payload.password,
                error: '',
            };
        case POST_OFFICE_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state
    }
}

