import React, { Component } from 'react';
import './search.less';

export default class Search extends Component {
    render() {
        return (
            <div className="header__search search">
                <input className="search__input" type="search" name="search" placeholder="Поиск..." />
            </div>
        );
    };
}
