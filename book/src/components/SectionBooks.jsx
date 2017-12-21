import React, { Component } from 'react';
import Book from './Book';
import './section-books.less';

/*var getStateFromFlax = () => {
    return {
        books: LibraryStore().books
    }
}*/

const items = [
    {
        id: "1",
        bookName: 'Алые паруса',
        author: 'Александр Грин',
        genre: 'Фантастика',
        annotation: 'Книга Алые паруса Александра Грина, написана в 1922 году – удивительно нежное, трогательное произведение, которое не оставит равнодушным любого из читателей. Написанная, казалось бы, о любви и девичьих грезах, эта книга преподаст нам важный жизненный урок о порядочности, верности себе и своим идеалам, мужественности и стойкости перед лицом всеобщего непонимания. И пусть в рассказанной писателем истории царит Ее Величество Романтика, книга «Алые паруса» одна из тех редких книг, которая затронет потаенные струны в душе каждого, независимо от сегодняшнего состояния души, пола и возраста...'
    },
    {
        id: "2",
        bookName: 'Неалые паруса',
        author: 'Василий Грин',
        genre: 'Фантастика',
        annotation: 'Книга Алые паруса написана в 1922 г. – удивительно нежное, трогательное произведен...'
    },
    {
        id: "3",
        bookName: 'Неалые паруса',
        author: 'Василий Грин',
        genre: 'Фантастика',
        annotation: 'Книга Алые паруса написана в 1922 г. – удивительно нежное, трогательное произведен...'
    },
    {
        id: "4",
        bookName: 'Неалые паруса',
        author: 'Василий Грин',
        genre: 'Фантастика',
        annotation: 'Книга Алые паруса написана в 1922 г. – удивительно нежное, трогательное произведен...'
    },
    {
        id: "5",
        bookName: 'Неалые паруса',
        author: 'Василий Грин',
        genre: 'Фантастика',
        annotation: 'Книга Алые паруса написана в 1922 г. – удивительно нежное, трогательное произведен...'
    },
    {
        id: "6",
        bookName: 'Неалые паруса',
        author: 'Василий Грин',
        genre: 'Фантастика',
        annotation: 'Книга Алые паруса написана в 1922 г. – удивительно нежное, трогательное произведен...'
    }
];

export default class SectionBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props
        }
    }
    render() {
        let content = [];
        for (let i = 0; i < items.length; i++) {
            content[i] = <Book items={items[i]} key={i} />
        }
        return <section className="section-books">
            <span className="section-books__header">{items[1].genre}</span>
            <div className="section-books__books">
                {content}
            </div>
            <button className="section-books__load-more">Показать всё</button>
        </section>
    }
}
