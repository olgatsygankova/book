import React, { Component } from 'react';
import BookPage from '../components/BookPage';
import './home.less';
import getBookById from '../services/getBookById';
import getCategories from "../services/getCategories";


export default class BookDescription extends Component {

    constructor() {
        super();
        this.state = {
            book: {
            }
        };
    }
    componentDidMount() {

let bookId = this.props.match.params.id;
        getBookById(bookId).then(
            book => this.setState({
                book: book
            })
        );
    }

    render() {      
        const book = this.state.book;
        return (
            <main>
                <section className="main__content">
                    <section className="section-book">
                        <BookPage book = {book}/>
                    </section>
                </section>
            </main>
        );
    }
}

