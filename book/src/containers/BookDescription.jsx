import React, { Component } from 'react';
import BookPage from '../components/BookPage';
import './home.less';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { loadBookDescription } from '../actions/index';
import {setEstimate, addComment, changeComment} from "../actions/index";

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
        console.log(this.props);
        return (
            <main>
                <section className="main__content">
                    <section className="section-book">
                        <BookPage book = {book}
                                  setEstimate = {this.props.setEstimate}
                                  addComment = {() => {this.props.addCommentT(book.id, this.props.myCommentText)}}
                                  myCommentText = {this.props.myCommentText}
                                  changeComment={(e)=>this.props.changeComment(e.target.value)} />
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
        myComment: state.books.myComment,
        myCommentText: state.books.myCommentText
    }),
    dispatch => ({
        loadBookDescription: bindActionCreators(loadBookDescription, dispatch),
        setEstimate: bindActionCreators(setEstimate, dispatch),
        addCommentT: bindActionCreators(addComment, dispatch),
        changeComment: bindActionCreators(changeComment, dispatch)
    })
)(BookDescription)
