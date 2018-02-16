import React, { Component } from 'react';
import './read-book.less';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { loadBookText } from '../actions/books';

class ReadBook extends Component {

    componentDidMount() {
        let bookId = this.props.match.params.id;
        this.props.loadBookText(bookId);
    }

    render() {
        const {author, title, text} = this.props.readBook;
        return (
            <div className="read-book">
                <div className="read-book__header">{author}</div>
                <div className="read-book__header">{title}</div>
                <div className="read-book__text">{text}</div>
            </div>
        );
    }
}

export default connect(
    state => ({
        readBook: state.books.readBook
    }),
    dispatch => ({
        loadBookText: bindActionCreators(loadBookText, dispatch)
    })
)(ReadBook)