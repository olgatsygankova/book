import React, { Component } from 'react';
import './book.less';
import Stars from './Stars';
import Estimate from './Estimate';
import AddComment from './AddComment';
import Comments from './Comments';
import { BookWrapper } from './BookWrapper';
import PropTypes from 'prop-types';
import { totalEstimate, myEstimate } from '../services/BooksService';
import { Link } from 'react-router-dom';
import { checkAuth } from '../services/AuthenticationService';

export default class BookPage extends Component {
    static propTypes = {
        book: PropTypes.shape ({
            id: PropTypes.string,
            title: PropTypes.string,
            estimate: PropTypes.array,
            author: PropTypes.string,
            genre: PropTypes.array,
            annotation: PropTypes.string,
            isbn: PropTypes.string
        }),
        comments: PropTypes.array
    };

    render() {
        const {book} = this.props;
        return (
            <article className="book-page">
                <figure className="book__description">
                    <img className="book__img book__img--big" src={book.cover ? book.cover : ''} alt={book.bookName} title={book.bookName} />
                    <figcaption className="book__caption book__caption--big">
                        <Stars estimate = {totalEstimate(book.estimate)}/>
                        <BookWrapper header='Название:' text={book.title}/>
                        <BookWrapper header='Автор:' text={book.author}/>
                        <BookWrapper header='Жанр:' text={book.genre ? book.genre.join(', '): ''}/>
                        <BookWrapper header='ISBN:' text={book.isbn}/>
                        <div className="book__caption-wrapper">
                            <a className="book__download book__download-description"
                            href={`data:text/plain;charset=utf-8, ${book.text}`}
                            download={`${book.title}.txt`}>Скачать</a>
                        </div>
                        <div className="book__caption-wrapper">
                            <Link to={`/read/${book.id}`} className="book__download book__download-description">Читать</Link>
                        </div>
                    </figcaption>
                </figure>
                <span className="book__header book__header-annotation">Аннотация:</span>
                <p className="book__annotation book__annotation--big">{book.annotation}</p>
                {checkAuth() ? <Estimate bookId={book.id} setEstimate = {this.props.setEstimate} estimate = {myEstimate(book.estimate)}/> : <div />}
                <AddComment bookid = {book.id} changeComment = {this.props.changeComment} myCommentText = {this.props.myCommentText} addNewComment = {this.props.addNewComment} showModal = {this.props.showModal}/>
                <Comments comment={this.props.comments}/>
            </article>
        );
    }
}
