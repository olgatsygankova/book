import React, { Component } from 'react';
import './book.less';
import Stars from './Stars';
import { Link } from 'react-router-dom';
import { BookWrapper } from './BookWrapper';
import PropTypes from 'prop-types';
import { totalEstimate } from '../services/BooksService';
import ReactHtmlParser from "react-html-parser";

export default class Book extends Component {
    static propTypes = {
        book: PropTypes.shape ({
        id: PropTypes.string,
        title: PropTypes.string,
        author: PropTypes.string,
        annotation: PropTypes.string
        })
    };

    render() {
        const coverDefault = '../img/defaultimg.jpg';
        const {cover, title, estimate, author, annotation, text, id} = this.props.book;
        return (
            <article className="book">
                <figure className="book__description">
                    <img className="book__img" src={cover ? cover : coverDefault} alt={title} title={title} />
                    <figcaption className="book__caption">
                        <Stars estimate = {totalEstimate(estimate)}/>
                        <BookWrapper header='Название:' text={ReactHtmlParser(title)}/>
                        <BookWrapper header='Автор:' text={ReactHtmlParser(author)}/>
                        <div className="book__caption-wrapper">
                            <span className="book__header">{annotation ? 'Аннотация:' : 'Текст:'}</span>
                            <p className="book__annotation">{annotation ? annotation : ReactHtmlParser(text)}</p>
                        </div>
                        <div className="book__caption-wrapper">
                            <Link to={`/book/${id}`} className="book__info">Подробнее</Link>
                        </div>
                    </figcaption>
                </figure>
            </article>
        );
    }
}
