import React, { Component } from 'react';
import './read-book.less';
import {getBookTextById} from '../services/BooksService';

export default class ReadBook extends Component {
    constructor() {
        super();
        this.state = {
            book: {
            }
        };
    }
    componentDidMount() {
        let bookId = this.props.match.params.id;
        getBookTextById(bookId).then(
            book => this.setState({
                book: book
            })
        );
    }

    render() {
        const book = this.state.book;
        return (
            <div className="read-book">
                <div className="read-book__header">{book.author}</div>
                <div className="read-book__header">{book.bookName}</div>
                <div className="read-book__text">{book.bookText}</div>
            </div>
        );
    }
}
