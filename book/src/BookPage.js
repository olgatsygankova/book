import React, { Component } from 'react';
import './book.less';
import Stars from './Stars';
import Home from './Home';

class BookPage extends Component {
    render() {
        return (
            <article className="book-page">
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
                        <div class="book__caption-wrapper">
                            <span class="book__header">Жанр:</span>
                            <span class="book__text">{this.props.items.genre}</span>
                        </div>
                        <div class="book__caption-wrapper">
                            <span class="book__header">ISBN:</span>
                            <span class="book__text">9785699360956</span>
                        </div>
                        <div class="book__caption-wrapper">
                            <a href="#" class="book__download book__download-description">Скачать</a>
                        </div>
                    </figcaption>
                </figure>
                <span class="book__header book__header-annotation">Аннотация:</span>
                <p class="book__annotation">Книга Алые паруса Александра Грина, написана в 1922 году – удивительно нежное, трогательное произведение, которое не оставит равнодушным любого из читателей. Написанная, казалось бы, о любви и девичьих грезах, эта книга преподаст нам важный жизненный урок о порядочности, верности себе и своим идеалам, мужественности и стойкости перед лицом всеобщего непонимания. И пусть в рассказанной писателем истории царит Ее Величество Романтика, книга «Алые паруса» одна из тех редких книг, которая затронет потаенные струны в душе каждого, независимо от сегодняшнего состояния души, пола и возраста...</p>
            </article>
        );
    }
}

export default BookPage;

