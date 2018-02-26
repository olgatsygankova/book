import React, { Component } from 'react';
import SectionBooks from './SectionBooks';
import './home.less';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {loadGetCategories} from '../actions/books';
import * as searchActions from "../actions/search";

class Home extends Component {

    componentDidMount() {
        const {loadSearchTitle, loadSearchAuthor, loadSearchIsbn, loadSearchFull} = this.props.searchActions;
        const {loadGetCategories} = this.props;
        if (this.props.match && this.props.match.params.text) {
            let searchText = this.props.match.params.text;
                loadSearchTitle(searchText);
                loadSearchAuthor(searchText);
                loadSearchIsbn(searchText);
                loadSearchFull(searchText);
            } else {
            loadGetCategories()
        }
    }

    render() {
        const {searchTitleResult, searchAuthorResult,searchIsbnResult, searchFullResult} = this.props.searchResult;
        let books, result = [];
        let paramsText = this.props.match.params.text;
        result.push(searchTitleResult,searchAuthorResult, searchIsbnResult, searchFullResult);
        paramsText ? books = result : books = this.props.books;
        let content = books ? books.map((category, i) => {
            if (category.books && category.books.length > 0) {
            return (
                <SectionBooks books={category.books} category={category.category} id={category.id} text = {paramsText} key={i}/>
            )}
        }) : <SectionBooks key={0}/>;
        if (content && !content[0] && !content[1] && !content[2] && !content[3]) {
            content = <div className='main__content__no-result'>Поиск не дал результатов, попробуйте вести другое слово для поиска</div>}
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
        searchResult: state.search
    }),
    dispatch => ({
        loadGetCategories: bindActionCreators(loadGetCategories, dispatch),
        searchActions: bindActionCreators(searchActions, dispatch)
    })
)(Home)