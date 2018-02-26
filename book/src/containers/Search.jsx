import React, { Component } from 'react';
import './search.less';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import * as searchActions from "../actions/search";

class Search extends Component {

    handleSearch(searchText) {
        const {loadSearchTitle, loadSearchAuthor, loadSearchIsbn, loadSearchFull} = this.props.searchActions;
        loadSearchTitle(searchText);
        loadSearchAuthor(searchText);
        loadSearchIsbn(searchText);
        loadSearchFull(searchText);
    }

    render() {
        const searchText = this.props.searchText;
        const {changeSearchText} = this.props.searchActions;
        return (
            <div className="header__search search">
                <input className="search__input" type="search" name="search" placeholder="Поиск..." value={searchText}
                       onChange={(e) => changeSearchText(e.target.value)} />
                <Link to={`/search/${searchText}`} className="search__btn" onClick={() => this.handleSearch(searchText)}/>
            </div>
        );
    };
}

export default connect(
    state => ({
        searchText: state.search.searchText
    }),
    dispatch => ({
        searchActions: bindActionCreators(searchActions, dispatch)
    })
)(Search)


