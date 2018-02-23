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
        const coverDefault = '../img/defaultimg.jpg';
        const {cover, title, estimate, author, annotation, text, id, genre, isbn} = this.props.book;
        const {setEstimate, changeComment, myCommentText, addNewComment, showModal, comments} = this.props;
        return (
            <article className="book-page">
                <figure className="book__description">
                    <img className="book__img book__img--big" src={cover ? cover : coverDefault} alt={title} title={title} />
                    <figcaption className="book__caption book__caption--big">
                        <Stars estimate = {totalEstimate(estimate)}/>
                        <BookWrapper header='Название:' text={title}/>
                        <BookWrapper header='Автор:' text={author}/>
                        <BookWrapper header='Жанр:' text={genre ? genre.join(', '): ''}/>
                        <BookWrapper header='ISBN:' text={isbn}/>
                        <div className="book__caption-wrapper">
                            <a className="book__download book__download-description"
                            href={`data:text/plain;charset=utf-8, ${text}`}
                            download={`${title}.txt`}>Скачать</a>
                        </div>
                        <div className="book__caption-wrapper">
                            <Link to={`/read/${id}`} className="book__download book__download-description">Читать</Link>
                        </div>
                    </figcaption>
                </figure>
                <span className="book__header book__header-annotation">Аннотация:</span>
                <p className="book__annotation book__annotation--big">{annotation}</p>
                {checkAuth() ? <Estimate bookId={id} setEstimate = {setEstimate} estimate = {myEstimate(estimate)}/> : <div />}
                <AddComment bookid = {id} changeComment = {changeComment} myCommentText = {myCommentText} addNewComment = {addNewComment} showModal = {showModal}/>
                <Comments comment={comments}/>
            </article>
        );
    }
}
