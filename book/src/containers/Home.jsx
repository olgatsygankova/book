import React, { Component } from 'react';
import SectionBooks from '../components/SectionBooks';
import './home.less';
import {getCategories} from '../services/CategoriesService';
import PropTypes from 'prop-types';

export default class Home extends Component {
    static propTypes = {
        books: PropTypes.shape ({
            id: PropTypes.number,
            category: PropTypes.string,
            books: PropTypes.object
        })
    };
    constructor() {
        super();
        this.state = {
            books: [{
            }]
        };
    }
    componentDidMount() {
        if (this.props.match){
            let searchText = this.props.match.params.text;
            getCategories(searchText).then(
                books => this.setState({
                    books: books
                })
            );
        }
    }
    render() {
        const { books }  = this.state;
           let content = books ? books.map((books, i) => {
               return (
                   <SectionBooks books={books.books} category={books.category} id={books.id} text = {this.props.match.params.text} key={i}/>
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



//<SectionBooks books={books.books} category={books.category} id={books.id} key={i}/>