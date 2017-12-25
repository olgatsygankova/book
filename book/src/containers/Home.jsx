import React, { Component } from 'react';
import SectionBooks from '../components/SectionBooks';
import './home.less';
import getBooks from '../services/getBooks';
import getCategories from '../services/getCategories';
import Category from '../services/Categories';
import Book from '../services/Books';


/*var getStateFromFlax = () => {
    return {
        books: LibraryStore().books
    }
}*/

export default class Home extends Component {


    constructor() {
        super();
        this.state = {
            books: [{
            }]
        };
    }

    componentDidMount() {
        getCategories().then(
            books => {
                this.setState({
                    isLoading: false,
                    books: books
                })
            }
        );
    }

      /*   componentWillMount() {
             addEventListener('change', this._onChange, false);
         }

         _onChange(){
             this.setState(getStateFromFlax());*/

    render() {
       /* const { books }  = this.state; */
        const { books }  = this.state;

        let content = [];
        for (let i = 0; i < books.length; i++) {
            content[i] =  <SectionBooks category = {books[i].category} books = {books[i].books} key={i}  />
        }

        return (
            <main>
                <section className="main__content">
                    {content}
                </section>
            </main>
        );
    }
}
