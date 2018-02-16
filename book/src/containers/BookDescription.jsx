import React, { Component } from 'react';
import BookPage from '../components/BookPage';
import './home.less';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {setEstimate, addNewComment, changeComment, loadBookDescription, loadCommentsBook} from "../actions/books";
import {showModal} from "../actions/auth";

class BookDescription extends Component {
    static propTypes = {
        book: PropTypes.object,
        bookId: PropTypes.number
    };

    componentDidMount() {
        let bookId = this.props.match.params.id;
        this.props.loadBookDescription(bookId);
        this.props.loadCommentsBook(bookId);
    }

    render() {
        const book = this.props.bookDescription;
        return (
            <main>
                <section className="main__content">
                    <section className="section-book">
                        <BookPage book = {book}
                                  testEs={this.props.estimateValue}
                                  setEstimate = {this.props.setEstimate}
                                  addNewComment = {this.props.addNewComment}
                                  myCommentText = {this.props.myCommentText}
                                  changeComment={(e)=>this.props.changeComment(e.target.value)}
                                  showModal={this.props.showModal}
                                  comments = {this.props.bookComments}/>
                    </section>
                </section>
            </main>
        );
    }
}

export default connect(
    state => ({
        bookDescription: state.books.bookDescription,
        estimateValue: state.books.estimateValue,
        myCommentText: state.books.myCommentText,
        showModalTrue: state.auth.showModalTrue,
        bookComments: state.books.bookComments
    }),
    dispatch => ({
        loadBookDescription: bindActionCreators(loadBookDescription, dispatch),
        setEstimate: bindActionCreators(setEstimate, dispatch),
        addNewComment: bindActionCreators(addNewComment, dispatch),
        changeComment: bindActionCreators(changeComment, dispatch),
        showModal: bindActionCreators(showModal, dispatch),
        loadCommentsBook: bindActionCreators(loadCommentsBook, dispatch),
    })
)(BookDescription)
