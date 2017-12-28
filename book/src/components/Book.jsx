import React, { Component } from 'react';
import './book.less';
import Stars from './Stars';
import { Link } from 'react-router-dom';
import BookWrapper from './BookWrapper';
import PropTypes from 'prop-types';
import TotalEstimate from "./TotalEstimate"


export default class Book extends Component {
    static defaultProps = {
        books: {},
    };
    render() {
        const urlCover = '../img/';
        const {books} = this.props;
        return (
            <article className="book">
                <figure className="book__description">
                    <img className="book__img" src={urlCover + (books.cover ? books.cover : '')} alt={books.bookName} title={books.bookName} />
                    <figcaption className="book__caption">
                        <Stars estimate = {TotalEstimate(books.estimate)}/>
                        <BookWrapper header='Название:' text={books.bookName}/>
                        <BookWrapper header='Автор:' text={books.author}/>
                        <div className="book__caption-wrapper">
                            <span className="book__header">Аннотация:</span>
                            <p className="book__annotation">{books.annotation}</p>
                        </div>
                        <div className="book__caption-wrapper">
                            <a href="" className="book__download">Скачать</a>
                            <Link to={'/book/'+ books.id} className="book__info">Подробнее</Link>
                        </div>
                    </figcaption>
                </figure>
            </article>
        );
    }
}

Book.propTypes = {
    books: PropTypes.object,
};

