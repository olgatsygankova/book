import React, { Component } from 'react';
import SectionBooks from './SectionBooks';
import './home.less';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {loadGetCategories} from '../actions/books';
import {loadSearchAuthor, loadSearchFull, loadSearchIsbn, loadSearchTitle} from "../actions/search";

class Home extends Component {

    componentDidMount() {
        if (this.props.match) {
            let searchText = this.props.match.params.text;
            if (this.props.match.params.text) {
                this.props.loadSearchTitle(searchText);
                this.props.loadSearchAuthor(searchText);
                this.props.loadSearchIsbn(searchText);
                this.props.loadSearchFull(searchText);
            } else {
                this.props.loadGetCategories()}
        }
    }

    render() {
        let books;
        let result = [];
        result.push(this.props.searchTitleResult, this.props.searchAuthorResult, this.props.searchIsbnResult, this.props.searchFullResult);
        this.props.match.params.text ? books = result : books = this.props.books;
        let content = books ? books.map((category, i) => {
            return (
                <SectionBooks books={category.books} category={category.category} id={category.id} text = {this.props.match.params.text} key={i}/>
        )
        }) : <SectionBooks key={0}/>;
        return (
            <main>
                <section className="main__content">
                    {content}
                </section>
            </main>
        );
    }
}

export default connect(
    state => ({
        books: state.books.booksInHome,
        searchTitleResult: state.search.searchTitleResult,
        searchAuthorResult: state.search.searchAuthorResult,
        searchIsbnResult: state.search.searchIsbnResult,
        searchFullResult: state.search.searchFullResult
    }),
    dispatch => ({
        loadGetCategories: bindActionCreators(loadGetCategories, dispatch),
        loadSearchTitle: bindActionCreators(loadSearchTitle, dispatch),
        loadSearchAuthor: bindActionCreators(loadSearchAuthor, dispatch),
        loadSearchIsbn: bindActionCreators(loadSearchIsbn, dispatch),
        loadSearchFull: bindActionCreators(loadSearchFull, dispatch)
    })
)(Home)

// let result = result && result.length === 0 ? 'Ничего не найдено' : `Results: ${result.length}`;