import {GET_BOOK_TEXT_FAIL, GET_BOOK_TEXT_SUCCESS, GET_CATEGORIES_FAIL, GET_CATEGORIES_SUCCESS} from "../constants";

const initialState = {
    booksInHome: [],
    readBook: {}
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
        default:
            return state
    }
}