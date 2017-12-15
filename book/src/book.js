import React, { Component } from 'react';
/*import './book.less';*/
import Stars from './Stars';

class Book extends Component {

    render() {
        const {book} = this.props;


        return (
            <article className="book">
                <figure className="book__description">
                    <img className="book__img" src="./img/book_wrapper.jpg" alt="Алые паруса" title="Алые паруса" />
                        <figcaption className="book__caption">
                            <Stars />
                            <div className="book__caption-wrapper">
                                <span className="book__header">Название:</span>

                                <span className="book__text">{this.props.bookName}</span>
                            </div>
                            <div className="book__caption-wrapper">
                                <span className="book__header">Автор:</span>
                                <span className="book__text">Александр Грин</span>
                            </div>
                            <div className="book__caption-wrapper">
                                <span className="book__header">Аннотация:</span>
                                <p className="book__annotation">Книга Алые паруса написана в 1922 г. – удивительно нежное, трогательное произведен...</p>
                            </div>
                            <div className="book__caption-wrapper">
                                <a href="" className="book__download">Скачать</a>
                                <a href="bookPage.html" className="book__info">Подробнее</a>
                            </div>
                        </figcaption>
                </figure>
            </article>
        );
    }
}
/*<span className="book__text">{book.bookName}</span>*/
export default Book;

