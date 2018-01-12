import React, { Component } from 'react';
import './search.less';
import { Link } from 'react-router-dom';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    onChangeHandler(e) {
        this.setState({
            text: e.target.value
        });
    }

    openSearchPage (text) {
      //  console.log (text);

    }

    render() {
        return (
            <div className="header__search search">
                <input className="search__input" type="search" name="search" placeholder="Поиск..." value={this.state.text}
                       onChange={(e) => this.onChangeHandler (e)} />
                <Link to={'/search/' + this.state.text} className="search__btn" onClick={ () => this.openSearchPage(this.state.text) }/>
            </div>
        );
    };
}


