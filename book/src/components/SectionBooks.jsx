import React, { Component } from 'react';
import Book from './Book';
import './section-books.less';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCategoryById } from '../services/CategoriesService';

export default class SectionBooks extends Component {
    static propTypes = {
        books: PropTypes.array,
        categoryId: PropTypes.number
    };

    static defaultProps = {
        books: [{}],
    };

    constructor() {
        super();
        this.state = {
            category: {
            }
        };
    }
    componentDidMount() {
        if (this.props.match) {
            let categoryText = this.props.match.params.text;
            let categoryId = this.props.match.params.id;
            getCategoryById(categoryId, categoryText).then(
                category => this.setState({
                    category: category
                })
            );
        }
    }
    render() {
        const { category }  = this.state.category;
        if(category){
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
    const maxBooks = 6;
    let content = books ? books.map((books, j) => {
        if (j < maxBooks) {
            return (
                <Book book={books} key={j} />
            );
        } return ""
    }): <Book key={0} />;
    return (
        <section className="section-books">
            <span className="section-books__header">{category}</span>
            <div className="section-books__books">
                {content}
            </div>
            { (typeof text === "undefined") ?
                <Link to={'/category/'+ id} className="section-books__load-more">Показать всё</Link> : <Link to={'/' + text + '/category/'+ id} className="section-books__load-more">Показать всё</Link>
            }
        </section>
    );
};
/**/