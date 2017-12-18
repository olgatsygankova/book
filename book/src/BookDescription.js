import React, { Component } from 'react';
import Header from './Header';
import SectionBooks from './SectionBooks';
import Footer from './Footer';
import './styles.less';


class BookPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: this.props
        }
    }
    render() {
        return (
            <div className="container">
                <main>
                    <section className="main__content">
                        <section class="section-book">
                            <BookPage />
                        </section>
                    </section>
                </main>
            </div>
        );
    }
}

export default BookPage;