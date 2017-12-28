import React, { Component } from 'react';
import SectionBooks from '../components/SectionBooks';
import './home.less';
import getBooks from '../services/getBooks';
import getCategories from '../services/getCategories';
import Category from '../services/Categories';
import Book from '../services/Books';
import PropTypes from 'prop-types';

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
            books => this.setState({
                books: books
            })
        );
    }

      /*   componentWillMount() {
             addEventListener('change', this._onChange, false);
         }

         _onChange(){
             this.setState(getStateFromFlax());*/

    render() {
        const { books }  = this.state;
           let content = books ?  books.map((books, i) => {
               return (
                   <SectionBooks books={books.books} category={books.category} id={books.id} key={i}/>
               );
           }): <SectionBooks key={0}/>;
        return (
            <main>
                <section className="main__content">
                    {content}
                </section>
            </main>
        );
    }
}



