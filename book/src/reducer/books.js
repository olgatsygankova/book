import {
    GET_BOOK_TEXT_FAIL, GET_BOOK_TEXT_SUCCESS,
    GET_CATEGORIES_FAIL, GET_CATEGORIES_SUCCESS,
    GET_CATEGORY_FAIL, GET_CATEGORY_SUCCESS,
    GET_BOOK_SUCCESS, GET_BOOK_FAIL,
    SET_ESTIMATE_SUCCESS, SET_ESTIMATE_FAIL,
    PUT_ADD_COMMENT_SUCCESS, PUT_ADD_COMMENT_FAIL,
    CHANGE_COMMENT_SUCCESS,
    GET_COMMENTS_SUCCESS, GET_COMMENTS_FAIL,
    GET_MY_BOOKS_SUCCESS, GET_MY_BOOKS_FAIL
} from "../constants";

const initialState = {
    booksInHome: [],
    readBook: {},
    booksForCategory: {},
    bookDescription: {},
    estimateValue: '',
    myEstimateValue: 0,
    myCommentText: "",
    bookComments: [],
    myBooks: []
};

export default function books(state = initialState, action) {
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
        case GET_COMMENTS_SUCCESS:
            return {
                ...state,
                bookComments: action.payload,
                error: '',
            };
        case GET_COMMENTS_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case SET_ESTIMATE_SUCCESS:
            return {
                ...state,
                estimateValue: action.payload,
                bookDescription: {
                    ...state.bookDescription,
                    estimate: state.bookDescription.estimate && state.bookDescription.estimate.concat(action.payload) || action.payload
                   // estimate: action.payload
                },
                error: '',
            };
        case SET_ESTIMATE_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case PUT_ADD_COMMENT_SUCCESS:
            return {
                ...state,
                myCommentText: '',
                error: '',
            };
        case PUT_ADD_COMMENT_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case CHANGE_COMMENT_SUCCESS:
            return {
                ...state,
                myCommentText: action.payload,
                error: '',
            };
        case GET_MY_BOOKS_SUCCESS:
            return {
                ...state,
                myBooks: action.payload,
                error: '',
            };
        case GET_MY_BOOKS_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state
    }
}