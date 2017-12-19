import React, { Component } from 'react';
import './book.less';
import Stars from './Stars';
import { Link } from 'react-router-dom';

export default class Book extends Component {
    render() {
        let id="2";
        return (
            <article className="book">
                <figure className="book__description">
                    <img className="book__img" src="../img/book_wrapper.jpg" alt="Алые паруса" title="Алые паруса" />
                        <figcaption className="book__caption">
                            <Stars />
                            <div className="book__caption-wrapper">
                                <span className="book__header">Название:</span>
                                <span className="book__text">{this.props.items.bookName}</span>
                            </div>
                            <div className="book__caption-wrapper">
                                <span className="book__header">Автор:</span>
                                <span className="book__text">{this.props.items.author}</span>
                            </div>
                            <div className="book__caption-wrapper">
                                <span className="book__header">Аннотация:</span>
                                <p className="book__annotation">{this.props.items.annotation}</p>
                            </div>
                            <div className="book__caption-wrapper">
                                <a href="" className="book__download">Скачать</a>
                                <Link to={'/book-description/'+ {id}} className="book__info">Подробнее</Link>
                            </div>
                        </figcaption>
                </figure>
            </article>
        );
    }
}


/*<a href="bookPage.html" className="book__info">Подробнее</a>*/
/*<Link to={'/book-description'} className="book__info">Подробнее</Link>*/