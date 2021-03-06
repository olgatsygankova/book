import React, { Component } from 'react';
import Book from '../components/Book';
import './section-books.less';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {loadGetCategory} from "../actions/books";
import * as searchActions from "../actions/search";

class SectionBooks extends Component {
    static propTypes = {
        books: PropTypes.array,
        categoryId: PropTypes.string
    };

    componentDidMount() {
        if (this.props.match) {
            let categoryId = this.props.match.params.id;
            let categoryText = this.props.match.params.text;
            this.props.loadGetCategory(categoryId);
           if (categoryText) {
               const {loadSearchTitle, loadSearchAuthor, loadSearchIsbn, loadSearchFull} = this.props.searchActions;
                loadSearchTitle(categoryText);
                loadSearchAuthor(categoryText);
                loadSearchIsbn(categoryText);
                loadSearchFull(categoryText);
            }
        }
    }

    render() {
        const {searchTitleResult, searchAuthorResult, searchIsbnResult, searchFullResult} = this.props.searchResult;
        let categoryForSearch, booksForCategory;
        categoryForSearch = (a) => {switch(a)
            {   case 'Название':
                    return searchTitleResult;
                case 'Автор':
                    return searchAuthorResult;
                case 'ISBN':
                    return searchIsbnResult;
                case 'Полнотекстовый поиск':
                    return searchFullResult;
                default:
                    return this.props.booksForCategory
            }
        };
        if (!this.props.match) {
            if (this.props.category === 'Мои книги') {
                return ( <BooksForOfficePage {...this.props}  />)
            } else {
                return <BooksForHomePage {...this.props} />
            }
        } else {
            booksForCategory =  categoryForSearch(this.props.match.params.category);
            return <BooksForCategoryPage books={booksForCategory.books} category={booksForCategory.category} id={booksForCategory.id}/>
        }
    }
}

const BooksForCategoryPage = ({books, category, id}) => {
    let content = books && books.map((books, j) => {
            return (
                <Book book={books} key={j} />
            );
    });
    return (
        <section className="section-books">
            <span className="section-books__header">{category}</span>
            <div className="section-books__books section-books__books--big-height">
                {content}
            </div>
        </section>
    );
};

const BooksForHomePage = ({books, category, id, text}) => {
    let content = books && books.map((books, j)  => {
        if (j<6) {
            return (
                <Book book={books} key={j}/>
            )
        }
    });
    return (
        (books && books.length > 0)? (
        <section className="section-books">
            <span className="section-books__header">{category}</span>
            <div className="section-books__books">
                {content}
            </div>
            {books.length > 6 ? <Link to={!text ? `/category/${id}` : `/${text}/category/${category}`} className="section-books__load-more">Показать всё</Link>: ''}
        </section>
        ) : <section className="section-books" />
    );
};

const BooksForOfficePage = ({books, category, id}) => {
    let content = books.length ? books.map((books, j) => {
        return (
            <Book book={books} key={j} />
        );
    }): <div className="office__no-book">У вас нет загруженных книг</div>;
    return (
        <section className="section-books">
            <span className="section-books__header">{category}</span>
            <div className="section-books__books section-books__books--big-height">
                {content}
            </div>
        </section>
    );
};

export default connect(
    state => ({
        searchResult: state.search,
        booksForCategory: state.books.booksForCategory
    }),
    dispatch => ({
        loadGetCategory: bindActionCreators(loadGetCategory, dispatch),
        searchActions: bindActionCreators(searchActions, dispatch)
    })
)(SectionBooks)