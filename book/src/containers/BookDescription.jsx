import React, { Component } from 'react';
import BookPage from '../components/BookPage';
import './home.less';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bookActions from "../actions/books";
import {showModal} from "../actions/auth";

class BookDescription extends Component {
    static propTypes = {
        book: PropTypes.object,
        bookId: PropTypes.number
    };

    componentDidMount() {
        const {loadBookDescription, loadCommentsBook} = this.props.bookActions;
        let bookId = this.props.match.params.id;
        loadBookDescription(bookId);
        loadCommentsBook(bookId);
    }

    render() {
        const {bookDescription, myCommentText, bookComments} = this.props.book;
        const {setEstimate, addNewComment, changeComment} = this.props.bookActions;
        return (
            <main>
                <section className="main__content">
                    <section className="section-book">
                        <BookPage book = {bookDescription}
                                  setEstimate = {setEstimate}
                                  addNewComment = {addNewComment}
                                  myCommentText = {myCommentText}
                                  changeComment={(e)=>changeComment(e.target.value)}
                                  showModal={this.props.showModal}
                                  comments = {bookComments}/>
                    </section>
                </section>
            </main>
        );
    }
}

export default connect(
    state => ({
        book: state.books,
        showModalTrue: state.auth.showModalTrue
    }),
    dispatch => ({
        bookActions: bindActionCreators(bookActions, dispatch),
        showModal: bindActionCreators(showModal, dispatch)
    })
)(BookDescription)