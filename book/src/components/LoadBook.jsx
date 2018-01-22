import React, { Component } from 'react';
import './load-book.less'
import './book-characteristic.less'

export default class LoadBook extends Component {
    render() {
        return (
            <div id="load-book" className="load-book">
                <a href="" title="Закрыть" className="load-book__close">X</a>
                <div className="book-characteristic">
                    <input className="book-characteristic__title book-characteristic__text" name="title" placeholder="Название" />
                    <input className="book-characteristic__author book-characteristic__text" name="author" placeholder="Автор" />
                    <input className="book-characteristic__genre book-characteristic__text" name="genre" placeholder="Жанр" />
                    <input className="book-characteristic__isbn book-characteristic__text" name="isbn" placeholder="ISBN" />
                    <textarea className="book-characteristic__annotation book-characteristic__text" name="annotation" placeholder="Аннотация" />
                    <input className="book-characteristic__picture book-characteristic__text" name="picture" placeholder="Выберите обложку книги" />
                    <div className="book-characteristic__load-picture" />
                    <input className="book-characteristic__file book-characteristic__text" name="file" placeholder="Выберите файл" />
                    <div className="book-characteristic__load-picture" />
                    <button className="book-characteristic__cancel">Отменить</button>
                    <button className="book-characteristic__load">Загрузить</button>
                </div>
            </div>
        );
    }
}