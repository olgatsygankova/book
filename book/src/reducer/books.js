import {GET_BOOK_TEXT_FAIL, GET_BOOK_TEXT_SUCCESS, GET_CATEGORIES_FAIL, GET_CATEGORIES_SUCCESS, GET_CATEGORY_FAIL, GET_CATEGORY_SUCCESS, GET_BOOK_SUCCESS, GET_BOOK_FAIL, SET_ESTIMATE_SUCCESS, SET_ESTIMATE_FAIL} from "../constants";

const initialState = {
    booksInHome: [],
    readBook: {},
    booksForCategory: [],
    bookDescription: {},
    estimateValue: ''
};

export default function books(state = initialState, action){
    switch (action.type) {
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                booksInHome: action.payload,
                error: '',
            };
        case GET_CATEGORIES_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case GET_CATEGORY_SUCCESS:
            return {
                ...state,
                booksForCategory: action.payload,
                error: '',
            };
        case GET_CATEGORY_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case GET_BOOK_TEXT_SUCCESS:
            return {
                ...state,
                readBook: action.payload,
                error: '',
            };
        case GET_BOOK_TEXT_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case GET_BOOK_SUCCESS:
            return {
                ...state,
                bookDescription: action.payload,
                error: '',
            };
        case GET_BOOK_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case SET_ESTIMATE_SUCCESS:
            return {
                ...state,
                estimateValue: action.payload,
                error: '',
            };
        case SET_ESTIMATE_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state
    }
}