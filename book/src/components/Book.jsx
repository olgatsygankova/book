import React, { Component } from 'react';
import './book.less';
import Stars from './Stars';
import { Link } from 'react-router-dom';
import BookWrapper from './BookWrapper';

export default class Book extends Component {
    render() {
        const {books}  = this.props;
        console.log (books);
        return (
            <article className="book">
                <figure className="book__description">
                    <img className="book__img" src="../img/book_wrapper.jpg" alt="Алые паруса" title="Алые паруса" />
                        <figcaption className="book__caption">
                            <Stars />
                            <BookWrapper header='Название:' text={books.bookName}/>
                            <BookWrapper header='Автор:' text={books.author}/>
                            <div className="book__caption-wrapper">
                                <span className="book__header">Аннотация:</span>
                                <p className="book__annotation">{books.annotation}</p>
                            </div>
                            <div className="book__caption-wrapper">
                                <a href="" className="book__download">Скачать</a>
                                <Link to={'/book-description/'+ books.id} className="book__info">Подробнее</Link>
                            </div>
                        </figcaption>
                </figure>
            </article>
        );
    }
}


/*<a href="bookPage.html" className="book__info">Подробнее</a>*/
/*<Link to={'/book-description'} className="book__info">Подробнее</Link>*/