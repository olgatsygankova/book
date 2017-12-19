import React, { Component } from 'react';
import './book.less';
import Stars from './Stars';
import Estimate from './Estimate'
import AddComment from './AddComment'
import Comments from './Comments'

export default class BookPage extends Component {
    render() {
        return (
            <article className="book-page">
                <figure className="book__description">
                    <img className="book__img" src="../img/book_wrapper.jpg" alt="Алые паруса" title="Алые паруса" />
                    <figcaption className="book__caption">
                        <Stars />
                        <div className="book__caption-wrapper">
                            <span className="book__header">Название:</span>
                            <span className="book__text">Алые паруса</span>
                        </div>
                        <div className="book__caption-wrapper">
                            <span className="book__header">Автор:</span>
                            <span className="book__text">Александр Грин</span>
                        </div>
                        <div className="book__caption-wrapper">
                            <span className="book__header">Жанр:</span>
                            <span className="book__text">Фантастика</span>
                        </div>
                        <div className="book__caption-wrapper">
                            <span className="book__header">ISBN:</span>
                            <span className="book__text">9785699360956</span>
                        </div>
                        <div className="book__caption-wrapper">
                            <a href="#" className="book__download book__download-description">Скачать</a>
                        </div>
                    </figcaption>
                </figure>
                <span className="book__header book__header-annotation">Аннотация:</span>
                <p className="book__annotation">Книга Алые паруса Александра Грина, написана в 1922 году – удивительно нежное, трогательное произведение, которое не оставит равнодушным любого из читателей. Написанная, казалось бы, о любви и девичьих грезах, эта книга преподаст нам важный жизненный урок о порядочности, верности себе и своим идеалам, мужественности и стойкости перед лицом всеобщего непонимания. И пусть в рассказанной писателем истории царит Ее Величество Романтика, книга «Алые паруса» одна из тех редких книг, которая затронет потаенные струны в душе каждого, независимо от сегодняшнего состояния души, пола и возраста...</p>
                <Estimate />
                <AddComment />
                <Comments />
            </article>
        );
    }
}


