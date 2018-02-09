import {
    CHANGE_LOAD_BOOK_TITLE_SUCCESS,
    CHANGE_LOAD_BOOK_ISBN_SUCCESS,
    CHANGE_LOAD_BOOK_GENRE_SUCCESS,
    CHANGE_LOAD_BOOK_AUTHOR_SUCCESS,
    CHANGE_LOAD_BOOK_ANNOTATION_SUCCESS
} from "../constants";

const initialState = {
    annotationValue: '',
    genreValue: '',
    isbnValue: '',
    authorValue: '',
    titleValue: ''
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
        default:
            return state
    }
}