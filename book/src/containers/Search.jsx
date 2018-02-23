import React, { Component } from 'react';
import './search.less';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import {changeSearchText} from "../actions/search";

class Search extends Component {
    render() {
        const searchText = this.props.searchText;
        return (
            <form className="header__search search">
                <input className="search__input" type="search" name="search" placeholder="Поиск..." value={searchText}
                       onChange={(e) => this.props.changeSearchText(e.target.value)} />
                <Link to={`/search/${searchText}`} className="search__btn"/>
            </form>
        );
    };
}

export default connect(
    state => ({
        searchText: state.search.searchText
    }),
    dispatch => ({
        changeSearchText: bindActionCreators(changeSearchText, dispatch)
    })
)(Search)


