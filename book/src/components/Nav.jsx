import React, { Component } from 'react';
import './nav.less';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div className="header__nav nav">
                <input id="toggle" type="checkbox" />
                <label className="toggle-container" htmlFor="toggle">
                    <span className="button button-toggle" />
                </label>
                <nav className="nav__menu">
                    <Link to={'/'} className="nav__menu-item nav__menu-item--home--active nav__menu-item--home">Главная</Link>
                    <a className="nav__menu-item nav__menu-item--my-books" href="">Мои книги</a>
                    <a className="nav__menu-item nav__menu-item--download-book" href="">Загрузить книгу</a>
                </nav>
            </div>
        );
    };
}