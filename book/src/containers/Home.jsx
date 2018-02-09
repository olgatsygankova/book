import React, { Component } from 'react';
import SectionBooks from './SectionBooks';
import './home.less';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadGetCategories } from '../actions/books';


class Home extends Component {

    componentDidMount() {
        if (this.props.match) {
            let searchText = this.props.match.params.text;
            this.props.loadGetCategories(searchText);
        }
    }

    render() {
        const {books}  = this.props;
        let content = books ? books.map((category, i) => {
            return (
                <SectionBooks books={category.books} category={category.category} id={category.id} text = {this.props.match.params.text} key={i}/>
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

export default connect(
    state => ({
        books: state.books.booksInHome
    }),
    dispatch => ({
        loadGetCategories: bindActionCreators(loadGetCategories, dispatch)
    })
)(Home)

