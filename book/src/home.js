import React, { Component } from 'react';
import Header from './Header';
import Book from './Book';

/*var getStateFromFlax = () => {
    return {
        books: LibraryStore().books
    }
}*/

var book = {
    id: "1",
    bookName: 'Алые паруса',
    author: 'Paulo',
    genre: 'Фантастика'
}




class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            book: this.props
        }
    }



 /*   componentWillMount() {
        addEventListener('change', this._onChange, false);
    }

    _onChange(){
        this.setState(getStateFromFlax());
    }*/
    render() {
        return (
            <div className="container">
                <Header />
                <main>
                    <section className="main__content">
                        <span className="section-book__header">Ton-100 {this.state.book.id}</span>
                        <div className="section-book__books">
                            <Book name={this.state.book} />
                        </div>
                    </section>
                </main>
           </div>
        );
    }
}

/*<Book book={this.state.book} />*/

export default Home;