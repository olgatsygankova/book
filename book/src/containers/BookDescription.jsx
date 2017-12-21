import React, { Component } from 'react';
import BookPage from '../components/BookPage';
import './home.less';


export default class BookDescription extends Component {
    render() {
        return (
            <main>
                <section className="main__content">
                    <section className="section-book">
                        <BookPage />
                    </section>
                </section>
            </main>
        );
    }
}

