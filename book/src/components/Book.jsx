import React, { Component } from 'react';
import './book.less';
import Stars from './Stars';
import { Link } from 'react-router-dom';
import { BookWrapper } from './BookWrapper';
import PropTypes from 'prop-types';
import { totalEstimate } from '../services/BooksService';

export default class Book extends Component {
    static propTypes = {
        book: PropTypes.shape ({
        id: PropTypes.number,
        title: PropTypes.string,
        estimate: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
        author: PropTypes.string,
        annotation: PropTypes.string
        })
    };

    static defaultProps = {
        book: {},
    };

    render() {
        const urlCover = '../../img/';
        const {book} = this.props;
        return (
            <article className="book">
                <figure className="book__description">
                    <img className="book__img" src={urlCover + (book.cover ? book.cover : '')} alt={book.bookName} title={book.bookName} />
                    <figcaption className="book__caption">
                        <Stars estimate = {totalEstimate(book.estimate)}/>
                        <BookWrapper header='Название:' text={book.title}/>
                        <BookWrapper header='Автор:' text={book.author}/>
                        <div className="book__caption-wrapper">
                            <span className="book__header">Аннотация:</span>
                            <p className="book__annotation">{book.annotation}</p>
                        </div>
                        <div className="book__caption-wrapper">
                            <a href="" className="book__download">Скачать</a>
                            <Link to={`/book/${ book.id}`} className="book__info">Подробнее</Link>
                        </div>
                    </figcaption>
                </figure>
            </article>
        );
    }
}