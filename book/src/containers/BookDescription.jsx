import React, { Component } from 'react';
import BookPage from '../components/BookPage';
import './home.less';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { loadBookDescription } from '../actions/index';

class BookDescription extends Component {
    static propTypes = {
        book: PropTypes.object,
        bookId: PropTypes.number
    };

    componentDidMount() {
        let bookId = this.props.match.params.id;
        this.props.loadBookDescription(bookId);
    }

    render() {
        const book = this.props.bookDescription;
        return (
            <main>
                <section className="main__content">
                    <section className="section-book">
                        <BookPage book = {book}/>
                    </section>
                </section>
            </main>
        );
    }
}

export default connect(
    state => ({
        bookDescription: state.books.bookDescription
    }),
    dispatch => ({
        loadBookDescription: bindActionCreators(loadBookDescription, dispatch)
    })
)(BookDescription)
