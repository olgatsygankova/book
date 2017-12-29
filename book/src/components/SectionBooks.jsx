import React, { Component } from 'react';
import Book from './Book';
import './section-books.less';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import getCategoryById from '../services/getCategoryById';

export default class SectionBooks extends Component {
    constructor() {
        super();
        this.state = {
            category: {
            }
        };
    }
    componentDidMount() {
        if (this.props.match) {
            let categoryId = this.props.match.params.id;
            getCategoryById(categoryId).then(
                category => this.setState({
                    category: category
                })
            );
        }
    }

        static defaultProps = {
        books: [{}],
    };

    render() {
        const { category }  = this.state.category;
        if (category) {
            return   <BooksForCategoryPage {...this.state.category}  />
        }
        else {
            return ( <BooksForHomePage {...this.props}  />)
        }
    }
}

const BooksForCategoryPage = ({books, category, id}) => {
    let content = books ? books.map((books, j) => {
            return (
                <Book books={books} key={j} />
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

const BooksForHomePage = ({books, category, id}) => {
    let content = books ? books.map((books, j) => {
        if (j<6) {
            return (
                <Book books={books} key={j} />
            );
        }
    }): <Book key={0} />;
    return (
        <section className="section-books">
            <span className="section-books__header">{category}</span>
            <div className="section-books__books">
                {content}
            </div>
            <Link to={'/category/'+ id} className="section-books__load-more">Показать всё</Link>
        </section>
    );
};

SectionBooks.propTypes = {
   books: PropTypes.array,
};
