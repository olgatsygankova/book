import React, { Component } from 'react';
import Book from '../components/Book';
import './section-books.less';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {loadGetCategory} from "../actions/books";

class SectionBooks extends Component {
    static propTypes = {
        books: PropTypes.array,
        categoryId: PropTypes.string
    };

    static defaultProps = {
        books: [{}],
        booksForCategory: [{}]
    };

    componentDidMount() {
        if (this.props.match) {
            let categoryText = this.props.match.params.text;
            let categoryId = this.props.match.params.id;
            this.props.loadGetCategory(categoryId, categoryText);
        }
    }
    render() {
        const {booksForCategory} = this.props;
        if (!this.props.match) {
            if (this.props.category === 'Мои книги') {
                return ( <BooksForOfficePage {...this.props}  />)
            } else
            return ( <BooksForHomePage {...this.props}  />)
        }
        else {
            return   <BooksForCategoryPage books = {booksForCategory.books} category = {booksForCategory.category} id = {booksForCategory.id} />
        }
    }
}

const BooksForCategoryPage = ({books, category, id}) => {
    let content = books ? books.map((books, j) => {
            return (
                <Book book={books} key={j} />
            );
    }): <Book key={0} />;
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
    let content = books ? books.map((books, j) => {
            return (
                <Book book={books} key={j} />
            )
    }): <Book key={0} />;
    return (
        <section className="section-books">
            <span className="section-books__header">{category}</span>
            <div className="section-books__books">
                {content}
            </div>
            <Link to={ !text ? `/category/${id}` : `/${text}/category/${id}`} className="section-books__load-more">Показать всё</Link>
        </section>
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
        booksForCategory: state.books.booksForCategory
    }),
    dispatch => ({
        loadGetCategory: bindActionCreators(loadGetCategory, dispatch)
    })
)(SectionBooks)
