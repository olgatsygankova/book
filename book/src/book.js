import React, { Component } from 'react';
import './book.less';
import Stars from './Stars';
import Home from './Home';

class Book extends Component {
    render() {
        return (
            <article className="book">
                <figure className="book__description">
                    <img className="book__img" src="./img/book_wrapper.jpg" alt="Алые паруса" title="Алые паруса" />
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


                            </div>
                        </figcaption>
                </figure>
            </article>
        );
    }
}

export default Book;

/*<a href="bookPage.html" className="book__info">Подробнее</a>*/
/*<link to='/book-description' className="book__info">Подробнее</link>*/