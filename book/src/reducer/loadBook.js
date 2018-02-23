import {
    CHANGE_LOAD_BOOK_TITLE_SUCCESS,
    CHANGE_LOAD_BOOK_ISBN_SUCCESS,
    CHANGE_LOAD_BOOK_GENRE_SUCCESS,
    CHANGE_LOAD_BOOK_AUTHOR_SUCCESS,
    CHANGE_LOAD_BOOK_ANNOTATION_SUCCESS,
    CHANGE_LOAD_BOOK_TEXT_SUCCESS,
    CHANGE_LOAD_BOOK_COVER_SUCCESS,
    GET_CATEGORIES_NAME_SUCCESS,
    PUT_LOAD_NEW_BOOK_SUCCESS, PUT_LOAD_NEW_BOOK_FAIL
} from "../constants";

const initialState = {
    annotationValue: '',
    genreValue: [],
    isbnValue: '',
    authorValue: '',
    titleValue: '',
    textValue: '',
    coverValue: '',
    categoriesName: []
};

export default function loadBook(state = initialState, action){
    switch (action.type) {
        case  CHANGE_LOAD_BOOK_TITLE_SUCCESS:
            return {
                ...state,
                titleValue: action.payload,
                error: '',
            };
        case  CHANGE_LOAD_BOOK_AUTHOR_SUCCESS:
            return {
                ...state,
                authorValue: action.payload,
                error: '',
            };
        case  CHANGE_LOAD_BOOK_ISBN_SUCCESS:
            return {
                ...state,
                isbnValue: action.payload,
                error: '',
            };
        case  CHANGE_LOAD_BOOK_GENRE_SUCCESS:
            return {
                ...state,
                genreValue: action.payload,
                error: '',
            };
        case  CHANGE_LOAD_BOOK_ANNOTATION_SUCCESS:
             return {
                 ...state,
                 annotationValue: action.payload,
                 error: '',
             };
        case  CHANGE_LOAD_BOOK_TEXT_SUCCESS:
            return {
                ...state,
                textValue: action.payload,
                error: '',
            };
        case  CHANGE_LOAD_BOOK_COVER_SUCCESS:
            return {
                ...state,
                coverValue: action.payload,
                error: '',
            };
        case  GET_CATEGORIES_NAME_SUCCESS:
            return {
                ...state,
                categoriesName: action.payload,
                error: '',
            };
        case PUT_LOAD_NEW_BOOK_SUCCESS:
            return {
                ...state,
                error: '',
            };
        case PUT_LOAD_NEW_BOOK_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state
    }
}