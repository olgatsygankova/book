import {
    GET_SEARCH_AUTHOR_FAIL, GET_SEARCH_AUTHOR_SUCCESS, CHANGE_SEARCH_TEXT_SUCCESS, GET_SEARCH_FULL_FAIL,
    GET_SEARCH_FULL_SUCCESS,
    GET_SEARCH_ISBN_FAIL, GET_SEARCH_ISBN_SUCCESS, GET_SEARCH_TITLE_FAIL,
    GET_SEARCH_TITLE_SUCCESS, GET_CATEGORIES_SUCCESS
} from "../constants/index";

const initialState = {
    searchText: '',
    searchTitleResult: {},
    searchAuthorResult: {},
    searchIsbnResult: {},
    searchFullResult: {}
};

export default function users(state = initialState, action){
    switch (action.type) {
        case  GET_SEARCH_TITLE_SUCCESS:
            return {
                ...state,
                searchTitleResult: {category: 'Название', id: 0,
                    books: action.payload},
                error: '',
            };
        case GET_SEARCH_TITLE_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case  GET_SEARCH_AUTHOR_SUCCESS:
            return {
                ...state,
                searchAuthorResult: {category: 'Автор', id: 1,
                    books: action.payload},
                error: '',
            };
        case GET_SEARCH_AUTHOR_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case  GET_SEARCH_ISBN_SUCCESS:
        return {
            ...state,
            searchIsbnResult: {category: 'ISBN', id: 2,
                books: action.payload},
            error: '',
        };
        case GET_SEARCH_ISBN_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case  GET_SEARCH_FULL_SUCCESS:
            return {
                ...state,
                searchFullResult: {category: 'Полнотекстовый поиск', id: 3,
                    books: action.payload},
                error: '',
            };
        case GET_SEARCH_FULL_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case CHANGE_SEARCH_TEXT_SUCCESS:
            return {
                ...state,
                searchText: action.payload,
                error: '',
            };
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                searchText: '',
                error: '',
            };
        default:
            return state
    }
}