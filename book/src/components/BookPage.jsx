import React, { Component } from 'react';
import PureComponent from 'react';
import './book.less';
import Stars from './Stars';
import Estimate from './Estimate';
import AddComment from './AddComment';
import Comments from './Comments';
import BookWrapper from './BookWrapper';
import PropTypes from 'prop-types';
import TotalEstimate from "./TotalEstimate";


export default class BookPage extends Component {
    static defaultProps = {
        book: {},
    };

    constructor(props) {
        super(props);
    }

    render() {
        const urlCover = '../img/';
        const {book} = this.props;
        return (
            <article className="book-page">
                <figure className="book__description">
                    <img className="book__img book__img--big" src={urlCover + (book.cover ? book.cover : '')} alt={book.bookName} title={book.bookName} />
                    <figcaption className="book__caption book__caption--big">
                        <Stars estimate = {TotalEstimate(book.estimate)}/>
                        <BookWrapper header='Название:' text={book.bookName}/>
                        <BookWrapper header='Автор:' text={book.author}/>
                        <BookWrapper header='Жанр:' text={book.genre}/>
                        <BookWrapper header='ISBN:' text={book.ISBN}/>
                        <div className="book__caption-wrapper">
                            <a href="#" className="book__download book__download-description">Скачать</a>
                        </div>
                    </figcaption>
                </figure>
                <span className="book__header book__header-annotation">Аннотация:</span>
                <p className="book__annotation book__annotation--big">{book.annotation}</p>
                <Estimate />
                <AddComment />
                <Comments comments={book.comments}/>
            </article>
        );
    }
}

BookPage.propTypes = {
    books: PropTypes.object,
};

///loch comp



