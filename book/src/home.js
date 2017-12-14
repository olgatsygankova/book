import React, { Component } from 'react';
import Header from './Header';
import Book from './Book';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <main>
                    <section className="main__content">
                        <span className="section_book__header">Ton-100</span>
                        <div className="book__wrapper">
                            <Book />
                        </div>
                    </section>
                </main>
           </div>
        );
    }
}

export default Home;