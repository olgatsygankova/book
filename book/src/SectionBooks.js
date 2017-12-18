import React, { Component } from 'react';
import Book from './Book';
import './section-books.less';

/*var getStateFromFlax = () => {
    return {
        books: LibraryStore().books
    }
}*/

var items = [
    {
        id: "1",
        bookName: 'Алые паруса',
        author: 'Александр Грин',
        genre: 'Фантастика',
        annotation: 'Книга Алые паруса написана в 1922 г. – удивительно нежное, трогательное произведен...'
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
]

class SectionBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props
        }
    }
    render() {
        let content = [];
        for (var i = 0; i < items.length; i++) {
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

export default SectionBooks;